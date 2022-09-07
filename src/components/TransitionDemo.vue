<template>
  <div class="container">
    <div class="box"></div>
  </div>
</template>

<script setup>
  const duration = ref(1)
</script>

<style scoped>
  .box {
    transition: all 0.5s ease-in-out;
  }

  .box:hover {
    transform: scale(1.24) skewY(-20deg) rotateY(20deg);
  }
</style>
