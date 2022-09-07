<template>
  <div class="container">
    <button @click="show = !show">
      {{ show ? '隐藏' : '显示' }}
    </button>
    <div v-if="show" :class="animationClasses"></div>
  </div>
</template>

<script setup>
  const show = ref(true)
  const animationClasses = ref(['box'])

  watchEffect(() => {
    if (show.value) {
      animationClasses.value = ['box', 'box-enter']
    } else {
      animationClasses.value = ['box', 'box-leave']
    }
  })
</script>

<style scoped>
  .container {
    grid-template-rows: 70px 1fr;
    height: 300px;
  }

  .box-enter {
    animation: fade 0.5s;
  }

  .box-leave {
    animation: fade 0.5s reverse;
  }

  @keyframes fade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
</style>
