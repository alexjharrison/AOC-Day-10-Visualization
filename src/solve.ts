import input from './assets/input'

export function calcSteps(): { cells: boolean[], spriteLocations: number[] } {
    const cells: boolean[] = []
    const spriteLocations: number[] = []
    const lines = input.split('\n')
    let x = 1
    for (const line of lines) {
        if (line === 'noop') {
            spriteLocations.push(x)
        }
        else {
            const xAddition = +line.split(' ')[1]
            spriteLocations.push(x)
            spriteLocations.push(x)
            x += xAddition
        }
    }

    for (const cycle of Array(240).fill(null).map((_, i) => i)) {
        const currX = spriteLocations[cycle]
        const shiftedCycle = cycle % 40
        const overlaps = [currX - 1, currX, currX + 1].includes(shiftedCycle)
        cells.push(overlaps)
    }

    return { cells, spriteLocations }
}

// def p2() -> str:
//     cycles: list[int] = []
//     x = 1
//     for line in dataset:
//         if line == 'noop':
//             cycles.append(x)
//         else:
//             x_addition = int(line.split()[1])
//             cycles += [x, x]
//             x += x_addition

//     output = [" " for _ in range(240)]
//     for cycle, curr_x in enumerate(cycles):
//         shifted_cycle = cycle % 40
//         overlaps = shifted_cycle in [curr_x - 1, curr_x, curr_x + 1]
//         output[cycle] = "#" if overlaps else "."

//     for row_idx in range(6):
//         print("".join(output[row_idx * 40:(row_idx + 1) * 40]))
//     return "EKRHEPUZ"