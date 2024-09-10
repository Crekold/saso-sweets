<template>
  <section class="py-16 bg-brandLightGreen"> <!-- Fondo con el color claro de la marca -->
    <div class="container mx-auto">
      <h2 class="text-3xl font-bold text-center text-brandPink">DULCES MEDICINALES FAVORITOS</h2>
      <!-- Aquí irían las imágenes y descripciones de los dulces medicinales destacados -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <!-- Dulce 1: Miel con Jengibre -->
        <div class="bg-brandYellow p-4 rounded-lg shadow-md">
          <img src="/src/assets/p1.jpg" alt="Miel con Jengibre" class="h-40 mx-auto">
          <h3 class="text-lg font-semibold mt-4 text-brandGreen">Miel con Jengibre</h3>
          <p class="text-gray-700 mt-2">Un dulce natural que combina los beneficios de la miel y el jengibre para fortalecer el sistema inmunológico y aliviar el dolor de garganta.</p>
        </div>

        <!-- Dulce 2: Caramelo de Eucalipto -->
        <div class="bg-brandTeal p-4 rounded-lg shadow-md">
          <img src="/src/assets/p2.jpg" alt="Caramelo de Eucalipto" class="h-40 mx-auto">
          <h3 class="text-lg font-semibold mt-4 text-brandGreen">Caramelo de Eucalipto</h3>
          <p class="text-gray-700 mt-2">Estos caramelos están hechos con extracto natural de eucalipto, ideal para despejar las vías respiratorias y aliviar la tos.</p>
        </div>

        <!-- Dulce 3: Dulce de Propóleo -->
        <div class="bg-brandPink p-4 rounded-lg shadow-md">
          <img src="/src/assets/p3.jpg" alt="Dulce de Propóleo" class="h-40 mx-auto">
          <h3 class="text-lg font-semibold mt-4 text-brandGreen">Dulce de Propóleo</h3>
          <p class="text-gray-700 mt-2">Este dulce tiene propiedades antibacterianas y es excelente para combatir infecciones de garganta y resfriados.</p>
        </div>
      </div>
    </div>
  </section>
</template>

  <script>
  export default {
    name: 'FavoriteProducts'
  }
  </script>
  
  <style scoped>
  </style>
  