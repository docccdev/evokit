const DEFAULT_PRESET = {
    b: 'ek-',
    e: '__',
    m: '_',
    v: '_',
    css: null,
};

export const withPreset = (preset) => {
    const { b, e, m, v, css } = Object.assign({}, DEFAULT_PRESET, preset);

    return (name, elem) => {
        if (typeof name !== 'string') {
            throw new Error('The argument "name" is not a string');
        }

        return (mods, mix, modsExtended = {}) => {
            const block = elem ? `${b}${name}${e}${elem}` : `${b}${name}`;
            const result = [block];
            const mixResult = [];

            if (mods) {
                Object.keys(mods).forEach((key) => {
                    const modVal = mods[key];
                    const modValType = typeof modVal;
                    const cnFn = (modName, modValue) => {
                        if (modValue) {
                            return `${block}${m}${modName}${v}${modValue}`;
                        }

                        return `${block}${m}${modName}`;
                    };
                    const appendFn = (value) => {
                        const splitVal = value ? `${value}`.split(' ') : [];

                        if (splitVal.length > 1 && Object.prototype.hasOwnProperty.call(modsExtended, key)) {
                            splitVal.forEach((val, index) => {
                                const extendedVal = modsExtended[key];
                                const extendedKey = extendedVal[index];

                                if (extendedKey) {
                                    if (Array.isArray(extendedKey)) {
                                        extendedKey.filter((extKey, i) => {
                                            const extIndex = extendedVal.indexOf(extKey);
                                            return i === 0 || (extIndex !== -1 && !splitVal[extIndex]);
                                        }).forEach((extKey) => {
                                            result.push(cnFn(extKey, val));
                                        });
                                    } else {
                                        result.push(cnFn(extendedKey, val));
                                    }
                                }
                            });
                        } else {
                            result.push(cnFn(key, splitVal[0]));
                        }
                    };

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

            if (!!mix) {
                if (typeof mix === 'string') {
                    mixResult.push(mix);
                } else if (Array.isArray(mix)) {
                    mix
                        .filter((item) => typeof item === 'string')
                        .forEach((item) => {
                            item
                                .split(' ')
                                .filter((value) => !result.includes(value))
                                .forEach((value) => mixResult.push(value));
                        });
                }
            }

            if (typeof css === 'object' && css !== null) {
                const cssModuleResult = result
                    .filter((key) => Object.prototype.hasOwnProperty.call(css, key))
                    .map((key) => css[key]);

                return [...cssModuleResult, ...mixResult].join(' ');
            }

            return [...result, ...mixResult].join(' ').trim();
        };
    };
};

export const className = withPreset();
