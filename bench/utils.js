const REPEAT = 100;
const ITERATION = 2000;

export const checkPerformance = (name, cb) => {
    const timerStart = performance.now();
    let timerEnd = 0;
    let result;

    let repeatCount = 0;
    while (repeatCount < REPEAT) {
        let iterationCount = 0;
        while (iterationCount < ITERATION) {
            result = cb();
            iterationCount++;
        }
        repeatCount++;
    }

    timerEnd = performance.now();
    console.log(`${name} (${ITERATION} * ${REPEAT}): -- ${timerEnd - timerStart}`, '\n' + result + '\n');
};
