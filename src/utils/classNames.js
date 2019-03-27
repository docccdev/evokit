export const classNames = (name) => {
    return (mods, mix) => {
        const res = [`ek-${name}`];

        if (mods) {
            Object.keys(mods).forEach((key) => {
                const modVal = mods[key];
                const modValType = typeof modVal;
                const cnFn = (val) => `ek-${name}_${key}_${val}`;

                if (modValType === 'string' || modValType === 'number') {
                    res.push(cnFn(modVal));
                } else if (Array.isArray(modVal) && modVal.length) {
                    modVal.forEach((val) => res.push(cnFn(val)));
                } else if (modValType === 'object') {
                    Object.keys(modVal).filter((val) => !!modVal[val]).forEach((val) => {
                        res.push(cnFn(val));
                    });
                }
            });
        }

        if (Array.isArray(mix)) {
            mix.forEach((value) => res.push(value));
        }

        return res.join(' ');
    }
}
