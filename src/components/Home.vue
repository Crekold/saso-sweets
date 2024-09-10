<template>
    <div>
      <MainBanner />
      <InfoDulces /> <!-- Aquí incluimos el componente -->
      <FavoriteProducts />
    </div>
  </template>
  
  <script>
    import MainBanner from './MainBanner.vue';
    import InfoDulces from './InfoDulces.vue';
    import FavoriteProducts from './FavoriteProducts.vue';
  
  export default {
    components: {
      MainBanner,
      InfoDulces,
      FavoriteProducts,
    }
  }
  </script>