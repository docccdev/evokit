const DEFAULT_PRESET = {
    b: 'ek-',
    e: '__',
    m: '_',
    v: '_',
    css: null,
};

export const withPreset = (preset) => {
    const {
        b, e, m, v, css,
    } = Object.assign({}, DEFAULT_PRESET, preset);

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
                    const cnFn = (value) => {
                        if (value) {
                            return `${block}${m}${key}${v}${value}`;
                        }

                        return `${block}${m}${key}`;
                    };
                    const appendFn = (value) => result.push(cnFn(value));

                    if (modValType === 'string' || modValType === 'number') {
                        appendFn(modVal.toString());
                    } else if (Array.isArray(modVal) && modVal.length) {
                        modVal.forEach(appendFn);
                    } else if (modValType === 'object' && modVal !== null) {
                        Object
                            .keys(modVal)
                            .filter((value) => !!modVal[value])
                            .forEach(appendFn);
                    } else if (modValType === 'boolean') {
                        if (modVal) {
                            appendFn();
                        }
                    }
                });
            }

            if (typeof mix === 'string') {
                result.push(mix);
            } else if (Array.isArray(mix)) {
                mix
                    .filter((item) => typeof item === 'string')
                    .forEach((item) => {
                        item
                            .split(' ')
                            .filter((value) => !result.includes(value))
                            .forEach((value) => result.push(value));
                    });
            }

            if (typeof css === 'object' && css !== null) {
                return result
                    .filter((key) => Object.prototype.hasOwnProperty.call(css, key))
                    .map((key) => css[key])
                    .join(' ');
            }

            return result.join(' ');
        };
    };
};

export const cnBlock = withPreset();
