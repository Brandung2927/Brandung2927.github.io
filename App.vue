<template>
  <div>
    <h3>This is a remote component</h3>
    <p>{{ message }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const message = ref('Hello from the remote component!');
</script>

<style scoped>
h3 {
  color: #42b983;
}
</style>