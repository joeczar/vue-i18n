<template>
  <div class="tile pulsate">
    <slot></slot> <!-- Use slot for customizable text -->
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.pulsate {
  border: 1px solid #000;
  border-radius: 0.5rem;
  padding: 1rem;
  text-align: center;
  margin: 0.5rem;
}

@keyframes pulsate {
  0% {
    transform: scale(1);
    border-width: 1px;
  }

  50% {
    transform: scale(1);
    border-width: 5px;
  }

  100% {
    transform: scale(1);
    border-width: 1px;
  }
}
</style>
