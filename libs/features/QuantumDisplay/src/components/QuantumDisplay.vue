<script setup lang="ts">
import { defineProps } from 'vue';

export type Props = {
  isLoading: Boolean;
  error: Error | null;
  data: Record<string, number> | undefined;
};
defineProps<Props>();
</script>
<template>
  <div class="dashboard">
    <div v-if="isLoading" class="data-point">Loading Quantum Data...</div>
    <div v-if="error" class="data-point">{{ error.message }}</div>
    <div v-for="(value, key) in data" :key="key" class="data-point">
      <span class="data-label">{{ key }}:</span>
      <span class="data-value">{{ value }}</span>
    </div>
  </div>
</template>

<style scoped>
.dashboard {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;
  color: #0f0;
  background-color: #000;
  padding: 20px;
}

.data-point {
  background-color: #111;
  border: 1px solid #0f0;
  padding: 10px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
}

.data-label {
  font-weight: bold;
}

.data-value {
  font-family: 'Orbitron', sans-serif;
  /* A sci-fi style font */
}
</style>
