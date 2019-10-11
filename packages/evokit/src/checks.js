let printWarning = () => {};

if (process.env.NODE_ENV !== 'production') {
    printWarning = (text) => {
        if (typeof console !== 'undefined') {
            console.error(`Warning: ${text}`); // eslint-disable-line
        }
    };
}

export function checkPropDeprecated(condition, oldProp, newProp) {
    if (process.env.NODE_ENV !== 'production') {
        if (condition) {
            printWarning(`The prop "${oldProp}" is deprecated! Please use "${newProp}".`);
        }
    }
}

export function checkTagName(tag) {
    if (process.env.NODE_ENV !== 'production') {
        if (typeof tag !== 'string') {
            // throw new Error(`Expected tagName to be a string but received ${typeof tag} instead`);
        }
    }
}

export function checkBlockName(name) {
    if (process.env.NODE_ENV !== 'production') {
        if (typeof name !== 'string') {
            throw new Error(`Expected blockName to be a string but received ${typeof name} instead`);
        }
    }
}

export function checkBlockMods(mods) {
    if (process.env.NODE_ENV !== 'production') {
        if (!!mods && !Array.isArray(mods)) {
            throw new Error(`Expected blockMods to be a array but received ${typeof mods} instead`);
        }
    }
}

export function checkBlockPreset(preset) {
    if (process.env.NODE_ENV !== 'production') {
        if (!!preset && typeof preset !== 'object') {
            throw new Error(`Expected blockPreset to be a object but received ${typeof preset} instead`);
        }
    }
}
