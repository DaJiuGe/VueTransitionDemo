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
      animationClasses.value = ['box', 'box-enter-active', 'box-enter-from']
      setTimeout(() => {
        animationClasses.value.push('box-enter-to')
      }, 0)
    } else {
      animationClasses.value = ['box', 'box-leave-active', 'box-leave-from']
      setTimeout(() => {
        animationClasses.value.push('box-leave-to')
      }, 0)
    }
  })
</script>

<style scoped>
  .container {
    grid-template-rows: 70px 1fr;
    height: 300px;
  }

  .box-enter-from {
    opacity: 0;
  }

  .box-enter-to {
    opacity: 1;
  }

  .box-enter-active {
    transition: all 1s ease-in-out;
  }

  .box-leave-from {
    opacity: 1;
  }

  .box-leave-to {
    opacity: 0;
  }

  .box-leave-active {
    transition: all 0.3s ease-in-out;
  }
</style>
