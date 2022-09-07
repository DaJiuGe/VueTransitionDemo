<template>
  <div class="container">
    <button @click="show = !show">
      {{ show ? '隐藏' : '显示' }}
    </button>
    <Transition name="fadeAndScale">
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

  .fadeAndScale-enter-from {
    opacity: 0;
  }

  .fadeAndScale-enter-to {
    opacity: 1;
  }

  .fadeAndScale-enter-active {
    transition: all 0.7s ease-in-out;
    animation: scale 0.7s ease-in-out;
  }

  .fadeAndScale-leave-from {
    opacity: 1;
  }

  .fadeAndScale-leave-to {
    opacity: 0;
  }

  .fadeAndScale-leave-active {
    transition: all 0.3s ease-in;
    animation: scale 0.3s ease-in reverse;
  }

  @keyframes scale {
    0% {
      transform: scale(0);
    }
    33% {
      transform: scale(1.1);
    }
    66% {
      transform: scale(0.9);
    }
    100% {
      transform: scale(1);
    }
  }
</style>
