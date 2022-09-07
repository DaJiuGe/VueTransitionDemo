<template>
  <div class="container">
    <button @click="nums.splice(0, 0, nums.length + 1)">添加元素</button>
    <div>
      <TransitionGroup name="fade">
        <Rectangle
          v-for="(num, index) in nums"
          :key="num"
          @click="nums.splice(index, 1)"
        >
          {{ num }}
        </Rectangle>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
  import Rectangle from './Rectangle.vue'

  const nums = ref([1, 2, 3, 4])
</script>

<style scoped>
  .container {
    display: grid;
    gap: 48px;
  }

  .container > div {
    position: relative;
    display: flex;
    gap: 24px;
  }

  .container button {
    justify-self: start;
  }

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

  .fade-move {
    transition: all 0.3s ease-out;
  }

  .fade-leave-active {
    position: absolute;
  }
</style>
