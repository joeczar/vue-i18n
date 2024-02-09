<template>
  <button :class="classes" @click="onClick">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { defineProps, computed, defineEmits } from 'vue';

const props = defineProps({
  primary: Boolean,
});

const classes = computed(() => ({
  'btn-primary': props.primary,
  'btn-default': !props.primary,
}));

const onClick = (event: MouseEvent) => {
  emit('click', event);
};

const emit = defineEmits(['click']);
</script>

<style scoped>
.btn-primary {
  background-color: blue;
  color: white;
}

.btn-default {
  background-color: #efefef;
  color: #333;
}
</style>
