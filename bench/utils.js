export const checkPerformance = (name, iteration, cb) => {
    const timerStart1 = performance.now();
    let result = '';
    let counter = 0;
    while (counter < iteration) {
        result = cb();
        counter++;
    }
    const timerEnd1 = performance.now();
    console.log(`${name} (${iteration}): -- ${timerEnd1 - timerStart1}`, '\n' + result + '\n');
};
