<template>
  <section class="bg-brandLightGreen py-8 md:py-16"> <!-- Fondo con color de la marca -->
    <div class="container mx-auto flex flex-col md:flex-row items-center">
      <!-- Imagenes de productos -->
      <div class="flex justify-center w-full md:w-1/2 mb-8 md:mb-0">
        <img 
          src="/src/assets/p4.jpg" 
          alt="Productos" 
          class="w-64 md:w-80 transition-transform duration-500 ease-in-out transform hover:scale-110 hover:rotate-3"
        >
      </div>

      <!-- Texto Promocional -->
      <div class="text-center w-full md:w-1/2 md:text-left md:pl-8">
        <h2 class="text-3xl md:text-4xl font-bold text-brandGreen mb-4">Dulces Medicinales</h2> <!-- Título con color verde de la marca -->
        <h3 class="text-xl md:text-2xl font-semibold text-brandTeal">Naturales y Efectivos</h3> <!-- Subtítulo con color teal de la marca -->
        <p class="mt-4 text-base md:text-lg text-gray-600">
          Descubre nuestros dulces medicinales elaborados con ingredientes naturales de alta calidad para tu bienestar.
        </p>
      </div>
    </div>
  </section>
</template>


<script>
export default {
  name: 'MainBanner'
}
</script>

<style scoped>
</style>