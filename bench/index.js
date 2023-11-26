import { withPreset } from './className.js';
import { withPreset as withPreset2 } from './className2.js';
import { getMapPropModsExtend, getPrepareMods } from './utils.js';
import { blockMods } from './blockMods.js';
import { cssModules } from './cssModules.js';

const ITERATION = 200000;
// const ITERATION = 1000;
const PROPS = { padding: 's m l xl', margin: ['s', 'm', 'xl'], border: 'none' };
// const PROPS = { padding: ['s', 'm', 'xl'], margin: ['s', 'm', 'xl'], border: 'none' };
// const PROPS = { padding: { s: true, m: true, xl: true }, margin: { s: true, m: true, xl: true }, border: 'none' };
// const PROPS = { opacity: [20, 30, 40] };
// const PROPS = { opacity: { 0: true, 20: true, 30: true, 40: true } };
// const PROPS = { opacity: true };
// const PROPS = { padding: 's', margin: 'm', border: 'none' };

const BLOCK_MODS = getPrepareMods(blockMods);
const MODS_BLOCK_PROPS_EXTENDED = getMapPropModsExtend(BLOCK_MODS);

/* --------------------------------------------------------------------------------------------------------------- */
const timerStart1 = performance.now();
let counter1 = 0;
let res1 = '';
while (counter1 < ITERATION) {
    res1 = withPreset({ css: cssModules })('box')(PROPS, 'customClass', MODS_BLOCK_PROPS_EXTENDED);
    counter1++;
}
const timerEnd1 = performance.now();
console.log(`withPreset1 (${ITERATION}): -- ${timerEnd1 - timerStart1}`, '\n' + res1);

/* --------------------------------------------------------------------------------------------------------------- */
const timerStart2 = performance.now();
let counter2 = 0;
let res2 = '';
while (counter2 < ITERATION) {
    res2 = withPreset2({ css: cssModules })('box')(PROPS, 'customClass', MODS_BLOCK_PROPS_EXTENDED);
    counter2++;
}
const timerEnd2 = performance.now();
console.log(`withPreset2 (${ITERATION}): -- ${timerEnd2 - timerStart2}`, '\n' + res2);
