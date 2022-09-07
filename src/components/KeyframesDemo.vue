<template>
  <div class="container">
    <div class="box"></div>
    <!-- <input type="text" v-model="duration" /> -->
  </div>
</template>

<script setup>
  const duration = ref(1)
</script>

<style scoped>
  .box {
    animation: scale v-bind(duration + 's') linear infinite;
  }

  @keyframes rotate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  @keyframes scale {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
