<script setup lang="ts">
import { computed } from 'vue';
import { useCrt } from '../crt';
import Box from './Box.vue';

const props = defineProps<{ mainElWidth: number }>()
const { state, transitionTimeMs } = useCrt()
const gridStyle = computed(() => ({
    width: (props.mainElWidth / 40) + 'px',
    height: (props.mainElWidth / 40) + 'px',
    marginBottom: "3px"
}))



const spriteStyle = computed(() => {
    const spriteCol = Math.floor(state.step / 40)
    console.log(spriteCol)
    const spriteRow = state.spriteLocations[state.step] - 1
    return {
        width: (props.mainElWidth / 40 * 3) + 'px',
        height: (props.mainElWidth / 40) + 'px',
        transition: `transform ${transitionTimeMs.value}ms ease-in`,
        border: "blue 2px dashed",
        // transform: `translateY(${spriteRow * (props.mainElWidth / 40)}px)`
        transform: `translateX(${spriteRow * (props.mainElWidth / 40)}px) translateY(${spriteCol * (props.mainElWidth / 40) + 3 * spriteCol}px)`,
    }
})
</script>

<template>
    <div class="flex flex-wrap relative">
        <div v-for="cell, i in state.cells" :style="gridStyle">
            <div class="h-full">
                <Box :is-active="state.step > i" :is-on="state.cells[i]" />
            </div>
        </div>
        <div class="sprite absolute  border-round" :style="spriteStyle"></div>
    </div>
</template>

<style scoped lang="scss">
.sprite {
    // transition: transform 2ms ease-out;

}
</style>
