<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    p Sea bienvenido a este recurso educativo, el cual está orientado a los servicios que se pueden implementar en la gestión de bases de datos como son los servicios de base de datos (protocolos, seguridad y permisos) así como los lenguajes de manipulación y definición de datos. Antes de iniciar este proceso de formación, lo invitamos a revisar el video para identificar el contexto de aprendizaje. 

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
