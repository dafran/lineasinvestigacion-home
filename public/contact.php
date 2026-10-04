<?php
// Recibe el formulario de contacto y lo envía por correo (Hostinger ejecuta PHP con mail()).
const TO = 'contacto@cieasypal.com';
const FROM = 'no-reply@lineasdeinvestigacion.com'; // debe ser una cuenta del dominio para buena entrega

header('Content-Type: application/json; charset=utf-8');

function fail(int $code, string $msg): never {
    http_response_code($code);
    echo json_encode(['ok' => false, 'error' => $msg]);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    fail(405, 'Método no permitido');
}

// Honeypot: si el campo oculto viene lleno es un bot; respondemos "ok" sin enviar.
if (!empty($_POST['website'])) {
    echo json_encode(['ok' => true]);
    exit;
}

// Quita saltos de línea para evitar inyección de cabeceras.
$clean = fn(string $v, int $max): string =>
    mb_substr(trim(preg_replace('/[\r\n]+/', ' ', $v)), 0, $max);

$nombre = $clean($_POST['nombre'] ?? '', 100);
$institucion = $clean($_POST['institucion'] ?? '', 150);
$email = $clean($_POST['email'] ?? '', 150);
$mensaje = mb_substr(trim($_POST['mensaje'] ?? ''), 0, 3000);

if ($nombre === '' || $mensaje === '' || !filter_var($email, FILTER_VALIDATE_EMAIL)) {
    fail(422, 'Datos incompletos o inválidos');
}

$subject = '=?UTF-8?B?' . base64_encode("Solicitud de información - $nombre") . '?=';
$body = "Nombre: $nombre\n"
    . "Institución: " . ($institucion ?: '(no indicada)') . "\n"
    . "Correo: $email\n\n"
    . "Mensaje:\n$mensaje\n";
$headers = implode("\r\n", [
    'From: Líneas de investigación <' . FROM . '>',
    'Reply-To: ' . $email,
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
]);

if (!mail(TO, $subject, $body, $headers)) {
    fail(500, 'No se pudo enviar el mensaje');
}

echo json_encode(['ok' => true]);
