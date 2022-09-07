<template>
  <div class="container">
    <Transition name="fade" mode="out-in">
      <component :is="shape"></component>
    </Transition>
  </div>
</template>

<script setup>
  import Circle from './Circle.vue'
  import Rectangle from './Rectangle.vue'

  const shapes = [Circle, Rectangle]
  const current = ref(0)
  const shape = computed(() => shapes[current.value])

  setInterval(() => {
    current.value = (current.value + 1) % shapes.length
  }, 1000)
</script>

<style scoped>
  .fade-enter-from {
    opacity: 0;
  }

  .fade-enter-to {
    opacity: 1;
  }

  .fade-enter-active {
    transition: all 0.7s ease-in-out;
  }

  .fade-leave-from {
    opacity: 1;
  }

  .fade-leave-to {
    opacity: 0;
  }

  .fade-leave-active {
    transition: all 0.3s ease-in;
  }
</style>
