<script setup lang="ts">
import { ref, onMounted, onUnmounted, defineProps } from 'vue';

const props = defineProps<{
  textArray: string[];
}>();

const displayedText = ref<string[]>([]);
let intervalId: number;
let currentIndex = 0; // Track the current index globally

const scrollText = () => {
  if (props.textArray.length === 0) return; // Prevent errors if textArray is empty

  // Add the next line from props.textArray to displayedText
  displayedText.value.push(props.textArray[currentIndex]);

  // Increment currentIndex, wrapping around if we reach the end of props.textArray
  currentIndex = (currentIndex + 1) % props.textArray.length;

  // Remove the oldest line if we exceed the visible capacity to simulate scrolling
  if (displayedText.value.length > props.textArray.length) {
    displayedText.value.shift(); // Adjust this condition based on your needs
  }
};

onMounted(() => {
  intervalId = setInterval(scrollText, 1000); // Adjust the interval as needed
});

onUnmounted(() => {
  clearInterval(intervalId); // Clean up on component unmount
});
</script>

<template>
  <div class="terminal">
    <ul>
      <li v-for="(line, index) in displayedText" :key="index">{{ line }}</li>
    </ul>
  </div>
</template>
<style scoped>
.terminal {
  background-color: black;
  color: green;
  font-family: 'Courier New', Courier, monospace;
  padding: 20px;

  /* Adjust based on your needs */
  overflow: none;
  ;
}

ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

li {
  margin: 0;
  padding: 0;
}
</style>
