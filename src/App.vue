<script setup lang="ts">
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import { ref } from 'vue';
import Grid from './components/Grid.vue';
import { useCrt } from './crt';

const { state } = useCrt();
const isFast = ref(true)
const step = ref(1)
</script>

<template>
  <div class="px-4 w-8">
    <h1>Day 10</h1>
    <div class="flex align-items-center">
      <Button icon="pi pi-arrow-left" class="p-button-sm mr-2" />
      <Button class="p-button-sm mr-2">play</Button>
      <Button icon="pi pi-arrow-right" class="p-button-sm mr-2" />

      <div class="flex ml-6 align-items-center h-full">
        <RadioButton class="mr-2" input-id="fast" name="speed" :value="true" v-model:model-value="isFast">Fast
        </RadioButton>
        <label for="fast" class="mr-2">Fast</label>
        <RadioButton class="mr-2" input-id="slow" name="speed" :value="false" v-model:model-value="isFast">Fast
        </RadioButton>
        <label for="slow">Slow</label>
      </div>
    </div>
    <div class="my-4 px-3">
      <Slider v-model:model-value="step" :min="0" :max="240" />
    </div>
    <Grid />
  </div>
</template>

<style>
body,
html {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
 