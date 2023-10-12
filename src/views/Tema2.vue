<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Lenguajes de definición y manipulación de datos

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-2.col-md-3
        figure
          img(src='@/assets/curso/temas/t2/f1.svg', alt='imagen relacionada')
      .col-lg-10
        p Dentro de la administración de los registros o documentos de una base de datos necesitamos ciertas acciones que permiten procesar la información para mejorar la misma, para ello, tenemos el
          b Lenguaje de Manipulación de Datos (DML)
          | , que son procedimientos proporcionados por los sistemas gestores de bases de datos que permite a los usuarios llevar a cabo ciertas tareas, como consulta y modificación; y
          b Lenguaje de definición de Datos (DDL)
          | que es un lenguaje para describir los datos y sus relaciones en una base de datos, los cuales permiten dentro de sus funcionalidades, la creación, modificación y borrado de tablas.
        .cajon.color-acento-contenido.p-4
          p.mb-0
            b DML:
            | se ejecutan cuando un usuario intenta modificar datos mediante un evento de lenguaje de manipulación de datos (DML). Los eventos DML son instrucciones
            em INSERT, UPDATE
            | o
            em DELETE
            | de una tabla o vista. (González, E. 2015)

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Lenguaje de definición de datos DDL

    p DDL: se ejecutan en respuesta a una variedad de eventos de lenguaje de definición de datos (DDL). Estos eventos corresponden principalmente a instrucciones
      em CREATE, ALTER
      | y
      em DROP
      | de
      em Transact-SQL
      | , y a determinados procedimientos almacenados del sistema que ejecutan operaciones de tipo DDL. (González, E. 2015). Definir

    .row.justify-content-center.mb-5
      .col-lg-12.position-relative
        h3.mb-4.text-center.txt--purpura
        .avatar
          figure
            img(src="@/assets/curso/temas/t2/f5.svg", alt="alt").img200
        .crd.crd--avatarHorizontal.crd--first.py-4
          .row.align-items-center.position-relative
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/f2.svg", alt="alt").img100
            .col
              p.mb-0 Para empezar, lo primero que se debe hacer cuando estamos frente a un sistema gestor de bases de datos es registrar la creación de bases de datos precisando el lenguaje de definición
                em (Data Definition Language, DDL)
                | , como uno proporcionado por el sistema de gestión de base de datos que permite a los administradores de la misma, llevar a cabo las tareas de definición de las estructuras de las tablas y las relaciones que almacenan datos o registros como también el proceso que permiten consultarlos como parte fundamental para tener la base de datos.
        .crd.crd--avatarHorizontal.py-4
          .row.align-items-center.position-relative
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/f3.svg", alt="alt").img100
            .col
              p.mb-0 Esta definición de la estructura de la base de datos (DDL), incluye tanto la creación inicial de los diferentes objetos que la formarán como el mantenimiento de esa estructura o tablas. La sintaxis del DDL utilizan acciones que se repiten para distintos objetos. Un ejemplo para crear un objeto nuevo con la acción registrada será
                em CREATE
                | , continuando el tipo de objeto a registrar.
                em CREATE DATABASE
                | es la sintaxis para registrar una base de datos nueva,
                em CREATE TABLE
                | permite registrar una nueva tabla,
                em CREATE INDEX
                | registra un nuevo índice; por otra parte, podremos registrar sus eliminaciones a los objetos creados utilizando la sintaxis
                em DROP (DROP TABLE, DROP INDEX…)
                |  y para modificar algún componente del objeto ya creado, utilizamos la sintaxis
                em ALTER, ALTER TABLE, ALTER INDEX,
                |  etc.
        .crd.crd--avatarHorizontal.crd--last.py-4
          .row.align-items-center.position-relative
            .col-auto
              figure
                img(src="@/assets/curso/temas/t2/f4.svg", alt="alt").img100
            .col
              p.mb-0 El objetivo principal de SQL como lenguaje de definición (DDL) son la creación, modificación y borrado de las tablas que componen la base de datos, así como de los índices, vistas, sinónimos, permisos, etc. que pudieran expresar sobre las mismas. Veremos la siguiente sintaxis para ser aplicado en MySQL como el Gestor de Bases de datos:

    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Tabla 2
        br
        em Creación, modificación y borrado de tablas
      .tabla-a.color-primario.mb-5
        table
          caption Fuente: el autor
          thead
            tr
              th Sintaxis SQL
              th Descripción
          tbody
            tr
              td Create database Nomdb;
              td Creación de base de datos.
            tr
              td Use Nomdb;
              td Ingresa a la base de datos para registrar tablas.
            tr
              td Create table Nomt1;
              td Crear Tabla.
            tr
              td ALTER Table &lt;nombre_tabla&gt; add primary key &lt;Nombre_campo&gt;;
              td Crea índice de una tabla en cuanto a su llave primaria.
            tr
              td Show databases;
              td Muestra las bases de datos del gestor para nuestro caso Myql.
            tr
              td Show tables;
              td Muestra las tablas de una base de datos.
            tr
              td Drop database NombBd;
              td Borrar Bases de datos.
            tr
              td Drop Table NombT1;
              td Borrar Tabla.
            tr
              td Describe NombT1;
              td Muestra los registros de la Tabla.

    Separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Lenguaje de manipulación de datos DML

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-1.col-sm-2
        img(src='@/assets/curso/temas/t2/f6.svg', alt='icono de base de datos')
      .col-lg-11.col-sm-10
        p.mb-0 Sabemos que DML es el Lenguaje de Manipulación de Datos, para el caso, vamos a implementarlo en un gestor de bases de datos MySQL. Los puntos de referencia sugieren que el daemon_memcached complemento acelera las operaciones DML (inserciones, actualizaciones y eliminaciones) más de lo que acelera las consultas. Por tal razón, se debe enfocar inicialmente en el desarrollo de aplicaciones de escritura intensiva que están vinculadas a E/S y buscar oportunidades para usar MySQL con el
          em Daemon memcached
          | complemento para crear nuevas aplicaciones de escritura.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        .cajon.color-acento-contenido.p-3.mb-4
          p La Sintaxis DML de una sola fila son los tipos de declaraciones más fáciles de convertir en memcached operaciones. INSERT se vuelve add, UPDATE se vuelve set, incro decr y DELETE se vuelve delete. Podemos limitar que las operaciones solo afectarán a una fila cuando se emitan a través de la interfaz de Memcachedkey, porque es único dentro de la tabla.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-9
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Tabla 3
          br
          em Sintaxis SQL
        .tabla-a.color-primario.mb-5
          table
            thead
              tr
                th Sintaxis SQL
            tbody
              tr
                td
                  code INSERT INTO tabla1 (key,valor) VALUES (some_key,some_value);
              tr
                td
                  code SELECT valor FROM tabla1 WHERE key = some_key;
              tr
                td
                  code UPDATE tabla1 SET valor = new_value WHERE key = some_key;
              tr
                td
                  code UPDATE tabla1 SET valor = valor + x WHERE key = some_key;
              tr
                td
                  code DELETE FROM tabla1 WHERE key = some_key;

    h3(data-aos="fade-right")
      i.fas.fa-square.cac.me-2
      | Conociendo los lenguajes de manipulación y definición de datos

    p Entendamos los lenguajes de manipulación y definición de datos:

    .col-md-10.mx-auto
      ImagenInfografica.color-acento-contenido.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t2/f7.svg', alt='Texto que describa la imagen')

        .tarjeta.color-acento-contenido.p-3(x="0%" y="50%" numero="1")
          p Es lo primero que se debe hacer cuando estamos frente a un sistema gestor de bases de datos, vamos a registrar la creación de bases de datos definiendo el lenguaje de definición de datos (
            em Data Definition Language, DDL
            | ). Incluye tanto la creación inicial de los diferentes objetos que formarán la base de datos, como el mantenimiento de esa estructura o tablas.
          p
            em CREATE DATABASE
            | es la sintaxis para registrar una base de datos nueva,
            em CREATE TABLE
            | permite registrar una nueva tabla,
            em CREATE INDEX
            | registra un nuevo índice; por otra parte, podremos registrar sus eliminaciones a los objetos creados utilizando la sintaxis
            em DROP (DROP TABLE, DROP INDEX…)
            | y para modificar algún componente del objeto ya creado utilizamos la sintaxis
            em ALTER, ALTER TABLE, ALTER INDEX,
            | etc.
        .tarjeta.color-acento-contenido.p-3(x="100%" y="50%" numero="2")
          p Lenguaje para describir los datos y sus relaciones en una base de datos los cuales permiten dentro de sus funcionalidades la creación, modificación y borrado de tablas.
          p Se ejecutan cuando un usuario intenta modificar datos mediante un evento de lenguaje de manipulación de datos (DML). Los eventos DML son instrucciones
            em INSERT, UPDATE
            | o
            em DELETE de una tabla o vista. (González, E. 2015)

      .fcab.p-3
        .contenedor-dashed.p-3
          .fblanco.borde2.p-3
            p.mb-0 Recuerde explorar los demás recursos que se encuentran disponibles en este componente formativo; para ello, diríjase al menú principal, donde encontrará la síntesis, una actividad didáctica para reforzar los conceptos estudiados, material complementario, entre otros.

</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
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
