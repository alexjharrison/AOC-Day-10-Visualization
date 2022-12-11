import { computed, reactive, watch, watchEffect } from "vue";
import { calcSteps } from "./solve";

type State = {
    playInterval: number | null
    isFast: boolean,
    step: number,
    cells: boolean[]
    spriteLocations: number[]
}

const state = reactive<State>({
    playInterval: null,
    isFast: true,
    step: 0,
    ...calcSteps()
})



export function useCrt() {
    function handlePlay() {
        if (state.playInterval) {
            clearInterval(state.playInterval)
            state.playInterval = null
        } else {
            if (state.step >= 240) {
                state.step = 0
            }
            state.playInterval = setInterval(() => {
                state.step++
            }, state.isFast ? 300 : 800)
        }
    }

    watch(() => state.isFast, _ => {
        handlePlay()
        handlePlay()
    })
    watch(() => state.step, step => {
        if (step >= 240) {
            state.playInterval && clearInterval(state.playInterval)
            state.playInterval = null
        }
    })
    return {
        state,
        handlePlay,
        transitionTimeMs: computed(() => state.isFast ? 300 : 800)
    }
}