import fauxelsProceso from '../assets/pexels-fauxels-3183197-1024x683.jpg';
import grabowskaFormacion from '../assets/pexels-karolina-grabowska-4476376-1024x683.jpg';
import grabowskaSoftware from '../assets/pexels-karolina-grabowska-5908776-1024x683.jpg';
import fox from '../assets/pexels-fox-1595385-scaled.jpg';
import lukas22 from '../assets/pexels-lukas-590022-scaled.jpg';
import ricky from '../assets/pexels-ricky-esquivel-1654698-scaled.jpg';
import shvets from '../assets/pexels-shvets-production-7516363-scaled.jpg';
import christina from '../assets/pexels-christina-morillo-1181345-scaled.jpg';
import lukas16 from '../assets/pexels-lukas-590016-scaled.jpg';

// TODO: el sitio WordPress original apuntaba a http://test/ (placeholder). Definir la URL real.
export const loginUrl = '#';

export const hero = {
  title: 'Optimiza y potencia la investigación en tu universidad',
  text: 'Conecta, organiza y potencia tus líneas de investigación a lo largo de toda tu entidad con nuestra plataforma, capacitaciones y consultoría en el sector académico y científico.',
  services: ['Consultoría', 'Formación', 'Software de gestión'],
};

export const about = {
  title: 'Sobre Nosotros',
  paragraphs: [
    'Buscamos ser la solución integral para la gestión de líneas de investigación en universidades y centros de estudios superiores.',
    'Nuestra plataforma de software y servicios especializados están diseñados para ayudar a optimizar los recursos, fomentar la innovación y mejorar el impacto de las instituciones en el ámbito académico y científico.',
  ],
};

export const howItWorks = {
  title: '¿Cómo funciona el servicio?',
  steps: [
    {
      title: 'Proceso de consultoría',
      image: fauxelsProceso,
      text: 'Trabajamos de la mano con tu institución para definir y desarrollar las líneas de investigación personalizadas. La consultoría abarca la identificación de líneas matrices, potenciales, virtuales y operativas, que se definen estrechamente con directivos, coordinadores y directores de centros de investigación. Nuestro enfoque garantiza una planificación y estructuración de proyectos alineados a las necesidades y objetivos de la universidad.',
    },
    {
      title: 'Proceso de formación',
      image: grabowskaFormacion,
      text: 'La capacitación es un componente fundamental de nuestro servicio. Estas capacitaciones buscan alinear conceptos y objetivos entre los distintos actores involucrados en el proceso de investigación. Además, busca fortalecer las habilidades de gestión de investigación, desarrollo de proyectos y de comunicación efectiva entre facultades y centros de investigación.',
    },
    {
      title: 'Configuración del software de gestión',
      image: grabowskaSoftware,
      text: 'Nuestra plataforma de software en la nube complementa los servicios de consultoría y capacitación. Proporciona una solución integral para la gestión de líneas de investigación, buscando facilitar el proceso de seguimiento de los proyectos, fomentar la interdisciplinariedad y tomar decisiones informadas basadas en los objetivos institucionales.',
    },
  ],
};

export const whyUs = {
  title: '¿Porqué tener un sistema de gestión de líneas?',
  items: [
    { title: 'Colaboración interdisciplinaria', image: fox, text: 'Impulsa proyectos de investigación multidisciplinarios y fortalece la comunicación entre facultades, semilleros y centros de investigación.' },
    { title: 'Monitoreo y seguimiento', image: lukas22, text: 'Mantén un control constante del progreso de tus proyectos y mejora la eficiencia de tus programas.' },
    { title: 'Mayor visibilidad y alcance', image: ricky, text: 'Atrae a mas estudiantes, investigadores y colaboradores, aumentando el impacto y reconocimiento de tu institución.' },
    { title: 'Acceso a expertos', image: shvets, text: 'Todo el proceso de creación de líneas se realiza con la asesoría y orientación de profesionales especializados en la gestión de proyectos de investigación.' },
    { title: 'Identificación de oportunidades', image: christina, text: 'Descubre áreas emergentes y potenciales mejoras en tu enfoque investigativo con la aplicación de la investigación a nuevos contextos o profundidades de estudio.' },
    { title: 'Optimización de recursos', image: lukas16, text: 'Asegura una asignación eficiente de personal y fondos para las líneas de investigación.' },
  ],
};
