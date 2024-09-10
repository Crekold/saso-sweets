<template>
  <div>
    <Header />
    <!-- Aquí renderizamos el contenido de las rutas -->
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style scoped>
</style>
