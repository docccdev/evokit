const DEFAULT_PERETS = {
    b: '',
    e: '__',
    m: '_',
    v: '_',
};

export const withPreset = (preset) => {
    const { b, e, m, v } = Object.assign(DEFAULT_PERETS, preset);

    return (name, elem) => {
        if (typeof name !== 'string') {
            throw new Error('The argument "name" is not a string');
        }

        return (mods, mix) => {
            const block = elem ? `${b}${name}${e}${elem}` : `${b}${name}`;
            const result = [block];


            if (mods) {
                Object.keys(mods).forEach((key) => {
                    const modVal = mods[key];
                    const modValType = typeof modVal;
                    const cnFn = (value) => value ? `${block}${m}${key}${v}${value}` : `${block}${m}${key}`;
                    const appendFn = (value) => result.push(cnFn(value));

                    if (modValType === 'string' || modValType === 'number') {
                        appendFn(modVal.toString());
                    } else if (Array.isArray(modVal) && modVal.length) {
                        modVal.forEach(appendFn);
                    } else if (modValType === 'object') {
                        Object
                            .keys(modVal)
                            .filter((value) => !!modVal[value])
                            .forEach(appendFn);
                    } else if (modValType === 'boolean') {
                        if(modVal) {
                            appendFn();
                        }
                    }
                });
            }

            if (Array.isArray(mix)) {
                mix.forEach((item) => {
                    item
                        .split(' ')
                        .filter((value) => !result.includes(value))
                        .forEach((value) => result.push(value));
                });
            }

            return result.join(' ');
        }
    }
}

export const cnBlock = withPreset();
