<template>
  <div class="container">
    <button @click="show = !show">
      {{ show ? '隐藏' : '显示' }}
    </button>
    <Transition @enter="enter" @leave="leave">
      <div v-if="show" class="box"></div>
    </Transition>
  </div>
</template>

<script setup>
  const show = ref(true)

  function enter(el, done) {
    const fadeIn = el.animate([{ opacity: 0 }, { opacity: 1 }], {
      duration: 700,
      easing: 'ease-in-out'
    })

    fadeIn.onfinish = () => {
      done()
    }
  }

  function leave(el, done) {
    const fadeOut = el.animate([{ opacity: 1 }, { opacity: 0 }], {
      duration: 300,
      easing: 'ease-in'
    })

    fadeOut.onfinish = () => {
      done()
    }
  }
</script>

<style scoped>
  .container {
    grid-template-rows: 70px 1fr;
    height: 300px;
  }
</style>
