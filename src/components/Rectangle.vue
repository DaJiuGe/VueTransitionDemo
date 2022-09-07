<template>
  <div class="rectangle"><slot></slot></div>
</template>

<script setup></script>

<style scoped>
  .rectangle {
    width: 100px;
    height: 100px;
    padding: 0.5em 1.4em;
    border-radius: 4px;
    color: white;
    background: linear-gradient(
      45deg,
      hsl(240deg, 60%, 50%),
      hsl(300deg, 90%, 50%)
    );

    display: grid;
    place-items: center;
    font-size: 28px;
    font-weight: 800;

    transform-origin: center;

    cursor: pointer;
  }
</style>
