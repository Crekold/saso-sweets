<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto flex items-center justify-between p-4">
      <!-- Logo -->
      <div class="flex-shrink-0">
        <img src="/src/assets/ablogo.png" alt="Abuelito Logo" class="h-10">
      </div>

      <!-- Botón de menú para móviles -->
      <button @click="toggleMenu" type="button" class="md:hidden text-gray-700 focus:outline-none">
        <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
          <path v-if="isOpen" fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
          <path v-if="!isOpen" fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2z"/>
        </svg>
      </button>

      <!-- Menú de Navegación y Redes Sociales -->
      <div class="hidden md:flex items-center space-x-4">
        <!-- Menú de Navegación -->
        <nav class="flex space-x-4">
          <router-link to="/" class="text-gray-700 hover:text-red-600">Inicio</router-link>
          <router-link to="/nosotros" class="text-gray-700 hover:text-red-600">Nosotros</router-link>
          <router-link to="/productos" class="text-gray-700 hover:text-red-600">Productos</router-link>
          <router-link to="/certificaciones" class="text-gray-700 hover:text-red-600">Certificaciones</router-link>
          <router-link to="/historia" class="text-gray-700 hover:text-red-600">Historia</router-link>
          <router-link to="/catalogo" class="text-gray-700 hover:text-red-600">Catálogo</router-link>
        </nav>

        <!-- Redes Sociales -->
        <div class="flex items-center space-x-2">
          <a href="#" class="text-gray-700 hover:text-blue-600">
            <img src="/src/assets/facebookicon.png" alt="Facebook" class="h-6 w-6">
          </a>
          <a href="#" class="text-gray-700 hover:text-pink-600">
            <img src="/src/assets/instagramicon.png" alt="Instagram" class="h-6 w-6">
          </a>
          <a href="#" class="text-gray-700 hover:text-green-600">
            <img src="/src/assets/whatsappicon.png" alt="Whatsapp" class="h-6 w-6">
          </a>
        </div>
      </div>
    </div>

    <!-- Menú móvil -->
    <div v-show="isOpen" class="md:hidden">
      <nav class="px-2 pt-2 pb-4 space-y-1">
        <router-link to="/" class="block px-3 py-2 text-gray-700 hover:text-red-600">Inicio</router-link>
        <router-link to="/nosotros" class="block px-3 py-2 text-gray-700 hover:text-red-600">Nosotros</router-link>
        <router-link to="/productos" class="block px-3 py-2 text-gray-700 hover:text-red-600">Productos</router-link>
        <router-link to="/certificaciones" class="block px-3 py-2 text-gray-700 hover:text-red-600">Certificaciones</router-link>
        <router-link to="/historia" class="block px-3 py-2 text-gray-700 hover:text-red-600">Historia</router-link>
        <router-link to="/catalogo" class="block px-3 py-2 text-gray-700 hover:text-red-600">Catálogo</router-link>
      </nav>
      <div class="px-4 py-2 flex justify-center space-x-4">
        <a href="#" class="text-gray-700 hover:text-blue-600">
          <img src="/src/assets/facebookicon.png" alt="Facebook" class="h-6 w-6">
        </a>
        <a href="#" class="text-gray-700 hover:text-pink-600">
          <img src="/src/assets/instagramicon.png" alt="Instagram" class="h-6 w-6">
        </a>
        <a href="#" class="text-gray-700 hover:text-green-600">
          <img src="/src/assets/whatsappicon.png" alt="Whatsapp" class="h-6 w-6">
        </a>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
</style>
