<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Servicios de BD

    p Las bases de datos son un sistema de información importante para las organizaciones, ya que provee el almacenamiento de registros organizados de manera digital; desde las grandes aplicaciones multiusuario hasta los teléfonos móviles y agendas electrónicas utilizan bases de datos como un elemento fundamental en el desarrollo comercial; es decir, con los datos se pueden realizar ventas, compras o suministrar información de un lugar.

    .bloque-texto-a.color-acento-botones.p-4.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4.border
              p Los servicios que proveen las bases de datos a las empresas están dados por el funcionamiento de los Sistemas Gestores de Bases de datos (SGBD), siendo las herramientas que permiten el almacenamiento de registros o datos de manera organizada, de tal manera que se pueden hacer consultas en menor tiempo, y adicionalmente, permite compartir datos a los usuarios que los necesitan para realizar acciones, ellas pueden ser de tipo comercial, de consulta o análisis de información, facilitando el mejoramiento y la organización. Por otra parte, los SGBD permiten la edición de registros en cuanto a su actualización, la eliminación de aquello que ya no sirve como una estructura fundamental dentro de la BD y la agregación o registro de información llamado comúnmente como la alimentación de la BD.

        .col-lg-3.mb-4.mb-lg-0(data-aos="zoom-in")
            img(src='@/assets/curso/temas/t1/f1.svg', alt='persona frente a un ordenador')

    p Los servicios permiten que una BD sea de alta calidad, con información actualizada, capaz de ofrecer datos que permitan el análisis y el comercio entre los usuarios.

    Separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Protocolos para la gestión de concurrencia

    .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-4.mb-5
      .row.m-0.align-items-center.justify-content-between
        .col-lg-3.mb-4.mb-lg-0
          .bloque-texto-g__img(
            data-aos="fade-right",:style="{'background-image':`url(${require('@/assets/curso/temas/t1/f2.jpg')})`}"
          )
        .col-lg-8
          .contenedor-dashed.p-3
            .bloque-texto-g1__texto.p-3
              p.mb-0 La cantidad de transacciones de registros por minutos son muy altas, de ahí la importancia de la administración de concurrencia, permitiendo la coherencia, integridad y durabilidad de los datos que son procesados por los SGDB por esto es una tarea vital. La elección de una técnica de manejo de concurrencia que permita la serialización de las transacciones y la coherencia de las operaciones realizadas sobre dichos datos, debe ejecutarse de acuerdo a la naturaleza del problema que se esté tratando de resolver. (Arduino, & Alfonzo, 2018).
              br
              br
              | Las técnicas o métodos para administrar la cantidad de transacciones de información sobre dichos datos deben ejecutarse de acuerdo a la naturaleza del problema que se está tratando de resolver, para el caso, veremos un modelo de gestión de compras y ventas, demostrando que con la aplicación de técnicas mencionadas de acuerdo con acciones que no registran un bloqueo o que el bloque resultaría costoso para la operatividad de la organización en el rendimiento del sistema; es decir, en tiempo y recurso busca como objetivo primordial mantener la integridad y coherencia de los datos.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Control de concurrencia

    p Al hablar de control de concurrencia en las aplicaciones, primordialmente sobre el inicio y el fin de las transacciones de datos que se pueden ejecutar, al mismo tiempo, se evitan bloqueos que se pudieran dar durante su ejecución. El acceso compartido de los datos que realizan estas transacciones simultáneas, puede transferir, como resultado, información inconsistente, generando incoherencias en estos datos o, simplemente, causando la pérdida de los mismos, aportando, aleatoriamente, el resultado que se puede dar en el proceso de las lecturas y escrituras simultáneas. Esta situación ha llevado a diseñar e implementar diferentes estrategias de control de concurrencia de datos, las cuales se encargan de evitar los problemas descritos, de modo que estos procesos de control, se crean transparentes para los desarrolladores de las aplicaciones, en el momento de escribir su código.

    p Veamos este ejemplo de una compra si tenemos una estructura de tablas relacional que incluye la siguiente forma:

    .col-md-9.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 1
        br
        em Ejemplo de compra bases de datos relacionales
      .tabla-a.color-acento-contenido.mb-5
        table
          thead
            tr
              th Tabla
              th Atributos
          tbody
            tr
              td PEDIDO
              td id, num-cliente, id-produc, cantidad, valor
            tr
              td PRODUCTO
              td id-produc, nombre-produc, ..., stock

    p Cuando se registre un proceso en la BD, pueden ocurrir diferentes problemas relacionados con la escritura simultánea o lecturas, incluyendo los siguientes:

    .col-lg-10.mx-auto.mb-5
      .row.justify-content-center.mb-5
        .col-lg-10
          .tarjeta--boton.p-4
            .row.justify-content-center.mb-3
              .col-3
                figure
                  img.riddle(:src="rid1" @mouseover="rid1 = f3inv" @mouseleave="rid1 = f3" , alt='signos de interrogación')
            p Dos sentencias UPDATE que actualicen un mismo producto reduciendo el proceso del mismo a una unidad, podrían terminar en que una de ellas no finalice la operación. Si pensamos en un UPDATE como una sucesión de una lectura y una escritura, puede que ambos UPDATE hagan la lectura; por ejemplo, de una acción de 10 segundos y después las escrituras, decrementan ese dato, quedando el resultado en 9 segundos, mientras que lo correcto era un resultado de 8 segundos.

            p Si tenemos una sentencia que primero comprueba que hay una transacción del producto P, y después inserta un nuevo PEDIDO de diez unidades del producto P, que tiene un proceso de 10 segundos, seguido de un UPDATE al proceso por esa cantidad. Puede que otra inserción de un pedido se ejecute antes del UPDATE seguido de la comprobación, realizando quedar el proceso del producto en negativo.


    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Acceso concurrente a los datos

    p Ocurre cuando dos transacciones distintas intentan acceder concurrentemente a los mismos datos, por lo que es posible que se presenten los siguientes casos:

    TabsB.color-acento-contenido.mb-5(style="background-color: #ECF6FE !important")
      .tarjetacolor-acento-botones--borde.p-4(titulo="<em>Dirty Read</em> <b>(Lectura sucia)</b>")
        p Se presenta cuando una segunda transacción lee datos que están siendo actualizados por una transacción antes de que haga
          em COMMIT
          | .
        .tabla-a.color-acento-contenido.mb-5.fblanco
          table
            thead
              tr
                th Transacción 1
                th Transacción 2
            tbody
              tr
                td
                  em UPDATE
                  | cuentas
                  em SET
                  | saldo = saldo - 300
                  em WHERE
                  | id = 1;
                td
              tr
                td
                td
                  em SELECT
                  | saldo
                  em FROM
                  | cuentas
                  em WHERE
                  | id = 1;
              tr
                td
                  em SELECT
                  | saldo
                  em FROM
                  | cuentas
                  em WHERE
                  | id = 1;
                td
      .tarjetacolor-acento-botones--borde.p-4(titulo="<em>Non-Repeatable Read</em> <b>(Lectura No Repetible)</b>")
        p Se presenta cuando una transacción hace la consulta al mismo dato dos veces durante una ejecución de la transacción y la segunda vez encuentra que el valor del dato ha sido modificado por otra transacción.
        .tabla-a.color-acento-contenido.mb-5.fblanco
          table
            thead
              tr
                th Transacción 1
                th Transacción 2
            tbody
              tr
                td
                  em SELECT
                  | saldo
                  em FROM
                  | cuenta
                  em WHERE
                  | id = 1;
                td
              tr
                td
                td
                  em UPDATE
                  | CUENTAS
                  em SET
                  | saldo = saldo - 200
                  em WHERE
                  | id = 1;
              tr
                td
                  em SELECT
                  | saldo
                  em FROM
                  | cuentas
                  em WHERE
                  | id = 1;
                td
      .tarjetacolor-acento-botones--borde.p-4(titulo="<em>Phantom Read</em> <b>(Lectura fantasma)</b>")
        p Se produce este error cuando una transacción registra dos veces una consulta, devuelve un conjunto de filas y en la segunda ejecución de la consulta registra nuevas filas en el conjunto que no existían cuando se inició la transacción.
        .tabla-a.color-acento-contenido.mb-5.fblanco
          table
            thead
              tr
                th Transacción 1
                th Transacción 2
            tbody
              tr
                td
                  em SELECT SUM
                  | (saldos)
                  em FROM
                  | cuenta;
                td
              tr
                td
                td
                  em INSERT INTO
                  | cuentas
                  em VALUES
                  | (2, 9000);
              tr
                td
                  em SELECT SUM
                  | (saldos)
                  em FROM
                  | cuenta;
                td

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Técnicas para controlar las recurrencias

    p Dentro de las técnicas más utilizadas, se encuentran los bloqueos, como también el control multiversión y las marcas de tiempo:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        .fcab.p-4
          .contenedor-dashed.p-4
            .fblanco.borde2.p-3
              h4 Bloqueos binarios
              p La primera forma de bloquear es utilizar bloqueos binarios. En un bloqueo binario, cada transacción debe solicitar el bloqueo de cada parte de datos A que vaya a utilizar antes de ingresar a él, sea para leerlo o escribirlo, a través de una operación bloquear(A). Deberá redimir todos los bloqueos, mediante una operación desbloquear(A) de modo que otros procesos puedan tomarlos.
              p.mb-0 Este sistema de bloqueos tiene una descripción muy simple, ya que solo necesita mantener una tabla que indica qué partes de los datos está bloqueada y por cuál transacción.
      .col-lg-4
        img(src='@/assets/curso/temas/t1/f4.svg', alt='imagen alusiva a la seguridad')

    .row.justify-content-center.mb-5
      .col-lg-6
        figure
          img.mb-4(src='@/assets/curso/temas/t1/f5.png', alt='')
          p.text-small.tarjeta--gris.p-3
            b Nota:
            | el gráfico representa como debe aparecer el código en consola de
            em MySQL
            | , nos muestra el bloque de escritura. Tomado de:
            a(href="https://programmerclick.com", target="_blank") https://programmerclick.com
      .col-lg-6
        .fcab.p-4
          .contenedor-dashed.p-4
            .fblanco.borde2.p-3
              h4 Bloqueos de lectura/escritura
              p.mb-0 Es un método utilizado en los SGBD para restringir el proceso de las tablas que sean definidas en ciertos momentos, todo dependerá de la alta concurrencia que exista; para el caso, podemos ver el siguiente código.

    Separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Seguridad de BD SQL y NOSQL

    p Vamos a instalar un servidor de bases de datos
      em MySQL
      | , para ello tener en cuenta lo siguiente:

    .row.justify-content-center.mb-5
      .col-lg-5
        figure
          img(src='@/assets/curso/temas/t1/f6.svg', alt='ilustración de base de datos')
      .col-lg-7
        LineaTiempoD.color-acento-botones
          div(numero="1" titulo="Para conectar con bases de datos")
            ol.lista-ol
              li
                p.mb-0
                  span.text-bold a.
                  | Descargar e instalar el
                  em appserv
                  | (Ojo como el usuario será root pueden colocar
                  em Password
                  | root1234):
                  a(href='https://sourceforge.net/projects/appserv/files/AppServ%20Open%20Project/8.5.0/appserv-win32-8.5.0.exe/download?use_mirror=gigenet&download=', target="_blank") descargar
                    em AppServ
              li
                p.mb-0
                  span.text-bold b.
                  | Ver video de instalación:
                  a(href='https://www.youtube.com/watch?v=L2mMMevapSk', target='_blank') https://www.youtube.com/watch?v=L2mMMevapSk
          div(numero="2" titulo="Descargar e instalar <em>mysqlworkbench</em>")
            a(href="https://downloads.mysql.com/archives/workbench/", target="_blank") https://downloads.mysql.com/archives/workbench/
          div(numero="3" titulo="Ver video de instalación")
            a(href="https://www.youtube.com/watch?v=fBogDpofRiQ", target="_blank") https://www.youtube.com/watch?v=fBogDpofRiQ
          div(numero="4" titulo="Importante")
            p Es posible que
              em MySQLworkbench
              | le salga que no se puede instalar porque no tiene
              em Visual C++
              | entonces instalarlo.
            p
              a(href="https://www.youtube.com/watch?v=fBogDpofRiQ", target="_blank") https://www.youtube.com/watch?v=fBogDpofRiQ

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Definiciones sobre bases de datos SQL y NOSQL

    p Veamos las definiciones al respecto de cada base de datos:

    .col-md-8.mx-auto.mb-5
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/f7.svg', alt='imagen relacionada')
        .tarjeta.color-acento-contenido.p-3(x="10%" y="40%" numero="1")
          .h5.mb-2 BD SQL
          p “Una base de datos es un conjunto de datos almacenados en memoria externa que están organizados mediante una estructura de datos. Cada base de datos ha sido diseñada para satisfacer los requisitos de información de una empresa u otro tipo de organización como, por ejemplo, una universidad o un hospital”. (Marqués, 2009).
        .tarjeta.color-acento-contenido.p-3(x="73%" y="32%" numero="2")
          .h5.mb-2 BD NoSQL
          p Cuando se habla de bases de datos “NoSQL” se refiere a tipos de bases de datos no relacionales que almacenan datos de forma distinta a las tablas relacionales. Adicionalmente, las bases de datos NoSQL se pueden consultar utilizando API (aplicación web que permite realizar búsquedas de información) de lenguaje natural, lenguajes de consulta estructurados declarativos y lenguajes de consulta mediante ejemplo, también se les llama bases de datos “no solo SQL”; es decir, que una base de datos NoSQL hace las consultas en archivos o documentos, gráficos o en Bases SQL.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Definición BD NoSQL

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2
        img(src='@/assets/curso/temas/t1/f8.svg', alt='icono de base de datos')
      .col-lg-11.col-sm-10
        p.mb-0 La seguridad es un elemento trascendental que tienen las organizaciones en sus bases de datos, de acuerdo a su disposición en una variedad de herramientas, controles y medidas trazadas para establecer y conservar la
          b confidencialidad
          | , la
          b integridad
          | y la
          b disponibilidad
          | de los registros o datos. De estos tres conceptos que definen la seguridad de datos nos enfocaremos en la confidencialidad, ya que, es el elemento más importante y sensible, en gran parte, concerniente a la seguridad de datos.

    .bloque-texto-a.color-acento-botones.p-4.p-md-4.mb-5.bg-1
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .contenedor-dashed.p-4
            .bloque-texto-a__texto.p-4
              p La seguridad de las bases de datos se enfoca en los siguientes ítems:
              ul.lista-ul--color
                li
                  i.fas.fa-check
                  | El sistema de gestión de bases de datos (SGBD).
                li
                  i.fas.fa-check
                  | Los datos de la base de datos.
                li
                  i.fas.fa-check
                  p.mb-0 El servidor de base de datos físico y/o el servidor de base de datos virtual y el
                    em hardware
                    | subyacente.
                li
                  i.fas.fa-check
                  | Cualquier aplicación relacionada.
                li
                  i.fas.fa-check
                  | La infraestructura informática y/o de red utilizada para acceder a la base de datos.
        .col-lg-4.mb-4.mb-lg-0

    p.mb-5 Para las organizaciones, la seguridad de base de datos es un reto complejo y desafiante, que implica todos los aspectos de las tecnologías y buenas prácticas de seguridad de la información. Adicionalmente, está naturalmente en desacuerdo con la usabilidad de la base de datos, sin embargo, cuantos más permisos de acceso se puedan manipular entre los usuarios, más vulnerable será ante las amenazas de seguridad; cuanto más invulnerable sea la base de datos ante las amenazas, más difícil será el acceso y el uso. En ocasiones, esta paradoja se denomina
      b regla de Anderson.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Diferentes tipos de seguridad que existen en las bases de datos

    p A continuación, comprenderemos los diferentes tipos de seguridad, que existen en las bases de datos:

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t1/f10.svg', alt='imagen relacionada')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="Seguridad física")
            p Cuando el servidor de bases de datos es local o en un centro de datos en la nube, es imprescindible que esté dentro de un entorno seguro y con control de clima, es decir, que este en un cuarto con acceso restringido al público y su temperatura este entre 17 °C o 21 °C. Por otra parte, si el servidor de bases de datos está en un centro de datos de nube, el proveedor será el encargado de ello.
          div(titulo="Controles de acceso administrativo y de red")
            p Cuando se habla de control de acceso decimos que es la cantidad de usuarios que acceden a la base de datos. Como medida de protección de datos es aconsejable tener el mínimo de usuarios que operen la base de datos y sus permisos deben limitarse a los niveles mínimos necesarios donde podrán realizar sus trabajos. Adicionalmente, el acceso a la red debe estar limitada al nivel mínimo de permisos necesarios, esto con el fin que los usuarios no realicen acciones que no estén dentro de su trabajo.
          div(titulo="Seguridad de cuenta/dispositivo de usuario final")
            p Se debe tener la información de quién accede a la base de datos, en qué momento y de qué forma se utiliza su contenido. Supervisar la información, puede alertar si las actividades de la gestión de los datos no son comunes, o parecen arriesgadas. Todas las cuentas y los dispositivos de usuario que se conectan con la red que aloja la base de datos, deben ser físicamente seguros, es decir, que los usuarios conozcan lo que están haciendo, para no tener pérdida de información o inconsistencia de registros.

          div(titulo="Cifrado")
            p Es una parte muy importante de la seguridad de datos, deben estar cifrados los datos de la base de datos y los datos de credenciales, adicionalmente, se deberán proteger con el mejor cifrado mientras no estén operando o en tránsito.
          div(titulo="Seguridad de <em>software</em> de base de datos")
            p Es importante utilizar la última versión del
              em software
              | de gestión de bases de datos aplicando los parches cuando sean suministrados por el proveedor.
          div(titulo="Seguridad del servidor de aplicaciones/<em>web</em>")
            p Cualquier aplicación o servidor web que interactúen con la base de datos, están susceptibles a los ataques y deben estar supervisados de manera constante, para pruebas de seguridad, acompañadas de las mejores prácticas.

          div(titulo="Seguridad de copia")
            p Para una buena gestión de la información, las copias de seguridad, copias o imágenes de la base de datos deben estar sujetas a los mismos controles de seguridad, estas deben estar registradas en una bitácora de registro donde indique fecha en la que se va a registrar la copia durante el año en curso.
          div(titulo="Auditoría")
            p Los formatos deben hacer parte del administrador de bases de datos, esto con el fin de registrar todos los inicios de sesión en el servidor de bases de datos y el sistema operativo también debe registrar las operaciones realizadas en datos confidenciales. Las auditorías estándar de seguridad de base de datos deben realizarse regularmente, anualmente o antes, si hay registros de fugas de información.

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Creación de usuarios en una base de datos SQL en servidor
      em AppServer con MySQL
      | .

    p A continuación, veamos el video el cual explicará con detalle, la creación de usuarios en una base de datos NoSQL en MongoDB:

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/JUBqztYEiJE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    .col-lg-10.mx-auto
      .tarjeta.color-primario.grbg1.p-4.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/temas/t1/f11.svg")
          .col-auto
            .row.justify-content-between.align-items-center
              .col-auto.mb-3.mb-sm-0
                h4.mb-1 Proceso de instalación de
                  em MongoDB
                p.text-small Descargue el siguiente documento, el cual explica el proceso de instalación de
                  em MongoDB
                  | .
              .col.mb-3.mb-sm-0
                a.boton.color-acento-botones(:href="obtenerLink('downloads/ProcesodeinstalaciondeMongoDB.pdf')" target="_blank" type="application/pdf")
                  span(style='color:#12263F !important') Descargar
                  i.fas.fa-file-download(style='color:#12263F !important')

    Separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Permisos y roles de BD

    p Permite la creación y modificación de roles y usuarios en la base de datos actual. Dado que el
      em userAdminrol
      | concede a los usuarios cualquier privilegio a cualquier usuario, incluidos ellos mismos, el rol también entrega indirectamente permisos de superusuario a la base de datos o, si se limita a la admin base de datos, al clúster.

    .row.justify-content-center.mb-5
      .col-lg-4
        figure
          img(src='@/assets/curso/temas/t1/f12.svg', alt='imagen relacionada')
      .col-lg-8
        AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
          div(titulo="<em>updateUser</em>")
            p El usuario puede cambiar la informaci&oacute;n personalizada de cualquier usuario en la base de datos dada. Aplique esta acci&oacute;n a los recursos de la base de datos;
            code {
              br
              |  updateUser: &ldquo;&lt;Nombre del usuario&gt;&rdquo;,
              br
              |  pwd: passwordPrompt(), // Or &ldquo;&lt;m&eacute;todo que solicita password&gt;&rdquo;
              br
              |  customData: { &lt;any information&gt; },
              br
              |  roles: [
              br
              | &nbsp; { role: &ldquo;&lt;role&gt;&rdquo;, db: &ldquo;&lt;database&gt;&rdquo; } | &ldquo;&lt;role&gt;&rdquo;,
              br
              | &nbsp; ...
              br
              | &nbsp; ],
              br
              |  authenticationRestrictions: [
              br
              | &nbsp; {
              br
              | &nbsp; clientSource: [&rdquo;&lt;IP&gt;&rdquo; | &ldquo;&lt;CIDR range&gt;&rdquo;, ...],
              br
              | &nbsp; serverAddress: [&rdquo;&lt;IP&gt;&rdquo;, | &ldquo;&lt;CIDR range&gt;&rdquo;, ...]
              br
              | &nbsp; },
              br
              | &nbsp; ...
              br
              | &nbsp; ],
              br
              |  mechanisms: [ &ldquo;&lt;scram-mechanism&gt;&rdquo;, ... ],
              br
              |  digestPassword: &lt;boolean&gt;,
              br
              |  writeConcern: { &lt;write concern&gt; },
              br
              |  comment: &lt;any&gt;
              br
              | }

          div(titulo="<em>changePassword</em>")
            p El usuario puede cambiar la contraseña de cualquier usuario en la base de datos dada. Aplique esta acción a los recursos de la base de datos ingresando el siguiente comando; ojo, recuerde que debemos estar en las bases de datos admin de MongoDB para hacer este cambio;
              em db.changeUserPassword(“admin”, passwordPrompt())
              | , cuando solicite el
              em password
              | registrar el nuevo para hacer el cambio.

          div(titulo="<em>createRole</em>")
            p Crea un rol y especifica sus privilegios. El rol se aplica a la base de datos en la que ejecuta el comando. El createRole comando devuelve un error de rol duplicado si el rol ya existe en la base de datos.
            p El createRole comando utiliza la siguiente sintaxis:
            code
              | db.adminCommand({ createRole: &ldquo;myClusterwideAdmin&rdquo;,
              br
              |  privileges: [
              br
              | &nbsp; { resource: { cluster: true }, actions: [ &ldquo;addShard&rdquo; ] },
              br
              | &nbsp; { resource: { db: &ldquo;config&rdquo;, collection: &ldquo;&rdquo; }, actions: [ &ldquo;find&rdquo;, &ldquo;update&rdquo;, &ldquo;insert&rdquo;, &ldquo;remove&rdquo; ] },
              br
              | &nbsp; { resource: { db: &ldquo;users&rdquo;, collection: &ldquo;usersCollection&rdquo; }, actions: [ &ldquo;update&rdquo;, &ldquo;insert&rdquo;, &ldquo;remove&rdquo; ] },
              br
              | &nbsp; { resource: { db: &ldquo;&rdquo;, collection: &ldquo;&rdquo; }, actions: [ &ldquo;find&rdquo; ] }
              br
              |  ],
              br
              |  roles: [
              br
              | &nbsp; { role: &ldquo;read&rdquo;, db: &ldquo;admin&rdquo; }
              br
              |  ],
              br
              |  writeConcern: { w: &ldquo;majority&rdquo; , wtimeout: 5000 }
              br
              | })

          div(titulo="<em>createUser</em>")
            p El usuario puede crear nuevos usuarios en la base de datos dada. Aplique esta acci&oacute;n a los recursos de la base de datos.
            code db.getSiblingDB(&ldquo;admin&rdquo;).runCommand( {
              br
              | &nbsp; createUser: &ldquo;accountAdmin01&rdquo;,
              br
              | &nbsp; pwd: passwordPrompt(),
              br
              | &nbsp; customData: { employeeId: 12345 },
              br
              | &nbsp; &nbsp; roles: [
              br
              | &nbsp; &nbsp; &nbsp; { role: &ldquo;clusterAdmin&rdquo;, db: &ldquo;admin&rdquo; },
              br
              | &nbsp; &nbsp; &nbsp; { role: &ldquo;readAnyDatabase&rdquo;, db: &ldquo;admin&rdquo; },
              br
              | &nbsp; &nbsp; &nbsp; &ldquo;readWrite&rdquo;
              br
              | &nbsp; &nbsp; ],
              br
              | &nbsp; &nbsp; writeConcern: { w: &ldquo;majority&rdquo; , wtimeout: 5000 }
              br
              | &nbsp; &nbsp; } )

          div(titulo="<em>dropRole</em>")
            p El usuario puede eliminar cualquier rol de la base de datos dada. Aplique esta acci&oacute;n a los recursos de la base de datos, con la siguiente sintaxis:
            code
              | use admin
              br
              | db.runCommand(
              br
              | &nbsp; {
              br
              | &nbsp; &nbsp; dropRole: &ldquo;readPrices&rdquo;,
              br
              | &nbsp; &nbsp; writeConcern: { w: &ldquo;majority&rdquo; }
              br
              | &nbsp; }
              br
              | )

          div(titulo="<em>dropUser</em>")
            p El usuario puede eliminar a cualquier usuario de la base de datos dada. Aplique esta acci&oacute;n a los recursos de la base de datos.
            code use admin
              br
              | &nbsp; db.runCommand( {
              br
              | &nbsp; dropUser: &ldquo;admin&rdquo;,
              br
              | &nbsp; writeConcern: { w: &ldquo;majority&rdquo;, wtimeout: 5000 }
              br
              | &nbsp; } )

          div(titulo="<em>grantRole</em>")
            p El usuario puede otorgar cualquier rol en la base de datos a cualquier usuario de cualquier base de datos del sistema. Aplique esta acci&oacute;n a los recursos de la base de datos.
            code use admin
              br
              | db.grantPrivilegesToRole(
              br
              | &nbsp; &ldquo;inventoryCntrl01&rdquo;,
              br
              | &nbsp; &nbsp; [
              br
              | &nbsp; &nbsp; &nbsp; {
              br
              | &nbsp; &nbsp; &nbsp; resource: { db: &ldquo;admin&rdquo;, collection: &ldquo;&rdquo; },
              br
              | &nbsp; &nbsp; &nbsp; actions: [ &ldquo;insert&rdquo; ]
              br
              | &nbsp; &nbsp; &nbsp; },
              br
              | &nbsp; &nbsp; &nbsp; {
              br
              | &nbsp; &nbsp; &nbsp; resource: { db: &ldquo;admin&rdquo;, collection: &ldquo;system.js&rdquo; },
              br
              | &nbsp; &nbsp; &nbsp; actions: [ &ldquo;find&rdquo; ]
              br
              | &nbsp; &nbsp; &nbsp; }
              br
              | &nbsp; &nbsp; ],
              br
              | &nbsp; { w: &ldquo;majority&rdquo; }
              br
              | )

          div(titulo="<em>revokeRole</em>")
            p El usuario puede eliminar cualquier rol de cualquier usuario de cualquier base de datos del sistema. Aplique esta acci&oacute;n a los recursos de la base de datos.
            code db.revokePrivilegesFromRole(
              br
              | &nbsp; &ldquo;associate&rdquo;,
              br
              | &nbsp; [
              br
              | &nbsp; &nbsp; {
              br
              | &nbsp; &nbsp; &nbsp; resource: { db: &ldquo;admin&rdquo;, collection: &ldquo;&rdquo; },
              br
              | &nbsp; &nbsp; &nbsp; actions: [ &ldquo;createCollection&rdquo;, &ldquo;createIndex&rdquo;, &ldquo;find&rdquo; ]
              br
              | &nbsp; &nbsp; }
              br
              | &nbsp; ],
              br
              | &nbsp; { w: &ldquo;majority&rdquo; }
              br
              | )

          div(titulo="<em>setAuthenticationRestriction</em>")
            p El usuario puede especificar el campo de restricciones de autenticación en el userdocumento al ejecutar los siguientes comandos:
            ul.lista-ul--color
              li
                i.fas.fa-check
                | Crear usuario.
              li
                i.fas.fa-check
                | Actualizar usuario.

          div(titulo="<em>viewRole</em>")
            p El usuario puede ver informaci&oacute;n sobre cualquier rol en la base de datos dada. Aplique esta acci&oacute;n a los recursos de la base de datos.
            code db.getRoles(
              br
              | &nbsp; {
              br
              | &nbsp; &nbsp; rolesInfo: 1,
              br
              | &nbsp; &nbsp; showPrivileges:true,
              br
              | &nbsp; &nbsp; showBuiltinRoles: true
              br
              | &nbsp; }
              br
              | )

          div(titulo="<em>viewUser</em>")
            p El usuario puede ver la información de cualquier usuario en la base de datos dada. Aplique esta acción a los recursos de la base de datos indicamos el siguiente comando en la consola:
            ul.lista-ul--color
              li
                i.fas.fa-check
                code db.getUsers({ filter: { mechanisms: “SCRAM-SHA-256” } })
              li
                i.fas.fa-check
                code db.getUsers()


</template>

<script>
export default {
  el: '.riddle',
  name: 'Tema1',
  components: {},
  data: () => ({
    rid1: require('@/assets/curso/temas/t1/f3.svg'),
    rid2: require('@/assets/curso/temas/t1/f3.svg'),
    f3: require('@/assets/curso/temas/t1/f3.svg'),
    f3inv: require('@/assets/curso/temas/t1/f3-inv.svg'),
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
