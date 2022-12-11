<script setup lang="ts">
import Button from 'primevue/button';
import RadioButton from 'primevue/radiobutton';
import Slider from 'primevue/slider';
import Grid from './components/Grid.vue';
import { useElementSize } from '@vueuse/core'
import { ref } from 'vue';
import { useCrt } from './crt';

const { state, handlePlay } = useCrt();
const mainEl = ref(null)
const { width } = useElementSize(mainEl)

</script>

<template>
  <main class="px-4 mx-auto" ref="mainEl">
    <h1>Day 10</h1>
    <div class="flex align-items-center">
      <Button icon="pi pi-arrow-left" class="p-button-sm mr-2" @click="state.step--" />
      <Button class="p-button-sm mr-2" @click="handlePlay">{{ state.playInterval ? 'Pause' : 'Play' }}</Button>
      <Button icon="pi pi-arrow-right" class="p-button-sm mr-2" @click="state.step++" />

      <div class="flex ml-6 align-items-center h-full">
        <RadioButton class="mr-2" input-id="fast" name="speed" :value="true" v-model:model-value="state.isFast">Fast
        </RadioButton>
        <label for="fast" class="mr-2">Fast</label>
        <RadioButton class="mr-2" input-id="slow" name="speed" :value="false" v-model:model-value="state.isFast">Fast
        </RadioButton>
        <label for="slow">Slow</label>
      </div>
    </div>
    <div class="my-4 px-3">
      <Slider v-model:model-value="state.step" :min="0" :max="240" />
    </div>
    <Grid :main-el-width="width" />
  </main>
</template>

<style>
body,
html {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>
 
<style scoped lang="scss">
main {
  max-width: 1000px;
}
</style>