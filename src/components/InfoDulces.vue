<template>
  <section class="bg-brandLightGreen py-16 px-4"> <!-- Fondo con color de la marca -->
    <div class="container mx-auto text-center">
      <!-- Título Principal -->
      <h1 class="text-4xl font-bold text-brandGreen mb-8">Dulces Naturales con Propiedades Medicinales en La Paz, Bolivia</h1> <!-- Título con color verde de la marca -->
      
      <!-- Subtítulo -->
      <h2 class="text-3xl font-semibold text-brandPink mb-6">¿Por Qué Elegir Nuestros Dulces Naturales?</h2> <!-- Subtítulo con color rosa de la marca -->
  
      <!-- Beneficios -->
      <h3 class="text-2xl font-semibold text-brandTeal mb-4">Beneficios para la Salud de Nuestros Dulces Medicinales</h3> <!-- Beneficios con color teal de la marca -->
  
      <!-- Lista de Beneficios con iconos -->
      <div class="flex flex-col md:flex-row justify-center items-start space-y-6 md:space-y-0 md:space-x-8 mt-8">
        
        <!-- Beneficio 1 -->
        <div class="bg-brandTeal p-6 rounded-lg shadow-md"> <!-- Fondo con color teal -->
          <img src="/src/assets/placeholder.jpg" alt="Inmunológico" class="h-12 mx-auto mb-4">
          <h4 class="text-xl font-semibold text-brandGreen mb-2">Fortalecen el Sistema Inmunológico</h4> <!-- Título con color verde -->
          <p class="text-gray-600">Nuestros dulces contienen ingredientes naturales que ayudan a reforzar las defensas del cuerpo.</p>
        </div>
        
        <!-- Beneficio 2 -->
        <div class="bg-brandGreen p-6 rounded-lg shadow-md"> <!-- Fondo con color verde -->
          <img src="/src/assets/placeholder.jpg" alt="Digestión" class="h-12 mx-auto mb-4">
          <h4 class="text-xl font-semibold text-brandTeal mb-2">Promueven la Digestión Saludable</h4> <!-- Título con color teal -->
          <p class="text-gray-600">Los dulces son ricos en fibras y otros nutrientes que ayudan a mantener una digestión regular y saludable.</p>
        </div>
        
        <!-- Beneficio 3 -->
        <div class="bg-brandYellow p-6 rounded-lg shadow-md"> <!-- Fondo con color amarillo -->
          <img src="/src/assets/placeholder.jpg" alt="Ánimo" class="h-12 mx-auto mb-4">
          <h4 class="text-xl font-semibold text-brandPink mb-2">Mejora del Estado de Ánimo</h4> <!-- Título con color rosa -->
          <p class="text-gray-600">Con ingredientes especiales que promueven una sensación de bienestar y mejoran el estado de ánimo.</p>
        </div>
  
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'InfoDulces'
}
</script>

<style scoped>
</style>
