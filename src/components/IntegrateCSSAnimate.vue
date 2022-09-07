<template>
  <div class="container">
    <button @click="show = !show">
      {{ show ? '隐藏' : '显示' }}
    </button>
    <Transition
      enter-active-class="animate__animated animate__bounceIn"
      leave-active-class="animate__animated animate__bounceOut"
    >
      <div v-if="show" class="box"></div>
    </Transition>
  </div>
</template>

<script setup>
  const show = ref(true)
</script>

<style scoped>
  .container {
    grid-template-rows: 70px 1fr;
    height: 300px;
  }
</style>
