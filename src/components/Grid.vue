<script setup lang="ts">
import { computed } from 'vue';
import { useCrt } from '../crt';
import Box from './Box.vue';

const props = defineProps<{ mainElWidth: number }>()
const { state } = useCrt()
const style = computed(() => ({
    width: (props.mainElWidth / 40) + 'px',
    height: (props.mainElWidth / 40) + 'px',
    marginBottom: "3px"
}))
</script>

<template>
    <div class="flex flex-wrap">
        <div v-for="cell, i in state.cells" :style="style">
            <div class="h-full">
                <Box :is-active="state.step > i" :is-on="state.cells[i]" />
            </div>
        </div>
    </div>
</template>