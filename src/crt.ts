import { reactive } from "vue";

type State = {
    isFast: boolean,
    step: number,
    cells: boolean[]
    spriteLocation: number
}

const state = reactive<State>({
    isFast: true,
    step: 1,
    cells: [],
    spriteLocation: 0
})

export function useCrt() {
    return { state }
}