import titulo from './titulo'

export default {
  global: {
    componenteFormativo: titulo,
    descripcionCurso:
      'La administración de bases de datos es el arte de dirigir los datos digitales, afianzando su seguridad y validez, trabajando sobre las formas de reorganizar las bases, para propender su rapidez en los procesos de búsqueda; adicionalmente, se gestionan respaldos y las consultas de elementos importantes, para el desarrollo analítico de datos y la toma de decisiones.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.svg'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.svg'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Servicios de BD',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Protocolos para la gestión de concurrencia',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Seguridad de BD SQL y NOSQL',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Permisos y roles de BD',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Lenguajes de definición y manipulación de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Lenguaje de definición de datos DDL',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Lenguaje de manipulación de datos DML',
            hash: 't_2_2',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Creación de bases de datos en mysql, consola.',
      referencia:
        'Saklasr. (2019). MYSQL Consola – Crear bases de datos – Video 60 [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=L2p3xOKUQW0',
    },
    {
      tema: 'Creación de bases de datos MongoDb.',
      referencia:
        'Ávila, J. (2020). Cómo crear Bases de Datos en MongoDB Compass Creación de Colecciones, Documentos y Vistas [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=8gbDA7kH5zg',
    },
    {
      tema: 'Lenguaje estructurado de consultas SQL.',
      referencia:
        'Pulido, E., Escobar, O. & Núñez, J.A. (2019). <em>Base de datos</em>. Grupo Editorial Patria.',
      tipo: 'Libro',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/121283',
    },
  ],
  glosario: [
    {
      termino: 'Base datos',
      significado:
        'conjunto ordenado y finito de operaciones que permite hallar la solución de un problema.',
    },
    {
      termino: 'Concurrencia',
      significado: 'cantidad de información registrada por segundo en un SGDB.',
    },
    {
      termino: 'Colección',
      significado:
        'es un compendio de documentos que comparten una relación de estructura similar, no necesariamente igual para todos los objetos.',
    },
    { termino: 'DDL', significado: 'lenguaje de definición de datos.' },
    {
      termino: '<em>Daemon_memcached</em>',
      significado:
        'almacena y recupera automáticamente datos de las tablas, convirtiendo el servidor MySQL en un rápido “almacén de clave-valor”.',
    },
    {
      termino: 'Documento',
      significado:
        'en bases de datos no relacionales, un documento es un objeto en formato JSON que es almacenado en binario en el motor NoSQL (BSON).',
    },
    { termino: 'DML', significado: 'lenguaje de Manipulación de datos.' },
    {
      termino: 'Metadatos',
      significado:
        'conjunto unitario de instrucciones que permite a una computadora realizar funciones diversas, como el tratamiento de textos, el diseño de gráficos, la resolución de problemas matemáticos, el manejo de bancos de datos.',
    },
    { termino: 'Mongodb', significado: 'Gestor de Bases de Datos NoSQL.' },
    { termino: 'MySQL', significado: 'Gestor de Bases de Datos SQL.' },
    {
      termino: 'NoSQL',
      significado:
        'considerado como un paradigma para la administración de bases de datos que se adapta a una amplia variedad de modelos de datos, formatos de valor clave, documento, columnas y gráficos.',
    },
    {
      termino: 'SQL',
      significado:
        'lenguaje de consulta estructurado, contiene relaciones entre tablas las cuales contienen registros.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arduino, G., & Alfonzo, P. L. (2018). <em>Técnicas de control de concurrencia en base de datos: implementación en un sistema de gestión</em>. In XXIV Congreso Argentino de Ciencias de la Computación.',
      link: 'http://sedici.unlp.edu.ar/handle/10915/73561',
    },
    {
      referencia:
        'Escobar, O., Núñez, J & Pulido, E. (2019). <em>Base de datos</em>. Editorial Patria.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/ereader/senavirtual/121283?page=214',
    },
    {
      referencia:
        'González, E. (2015). <em>Salvaguarda y seguridad de los datos: administración de bases de datos (UF1473)</em>. IC Editorial.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/44140',
    },
    {
      referencia:
        'Marqués, M. (2009). <em>Bases de datos</em>. D - Universitat Jaume I. Servei de Comunicació i Publicacions.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/51645',
    },
    {
      referencia: 'Mongodb. (2022). MongoDB, Inc.',
      link: 'https://www.mongodb.com/docs/v5.0/security/',
    },
    {
      referencia:
        'MySQL. (2022). <em>Administración de Bases de datos MySQL</em>.',
      link: 'https://dev.mysql.com/doc/refman/8.0/en/user-names.html',
    },
    {
      referencia:
        'Sarasa, A. (2020). <em>Introducción a las bases de datos NoSQL usando MongoDB</em>. Editorial UOC.',
      link:
        'https://elibro-net.bdigital.sena.edu.co/es/lc/senavirtual/titulos/58524?fs_q=mongodb&prev=fs    ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
