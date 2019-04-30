import React from 'react';
import { magicProps, BLOCK_PROP_KEY } from './magicProps';
import { withPreset } from './cnBlock';

const reactFn = (fn, displayName, propTypes) => {
    fn.displayName = displayName;
    fn.propTypes = propTypes;

    return fn;
};

export const withProps = (target, defautProps) => {
    if (typeof target !== 'function') {
        throw new Error('The argument "target" is not a function');
    }

    return reactFn(
        (props) => target({ ...defautProps, ...props }),
        target.displayName,
        target.propTypes,
    )
}

export const newBlock = ({ name, tag='div', preset=null, mods=[], mix=[] }) => {
    if (typeof name !== 'string') {
        throw new Error('The argument "name" is not a string');
    }

    const modList = [{ name, mods }, ...mix];
    const modKeys = modList.map(({ name }) => name);

    const defaultProps = {
        [`${name}-tag`]: tag,
        [`${name}-preset`]: preset,
    };

    const allowProps = modList.reduce((acc, item) => {
        if(Array.isArray(item.mods)) {
            item.mods.forEach((value) => acc[`${item.name}-${value}`] = [item.name, value]);
        }
        return acc;
    }, {});

    Object.assign(allowProps, {
        [`${name}-tag`]: [BLOCK_PROP_KEY, 'tag'],
        [`${name}-preset`]: [BLOCK_PROP_KEY, 'preset'],
        [`${name}-ref`]: [BLOCK_PROP_KEY, 'ref'],
    });

    return reactFn(
        ({ children, ...props }) => {
            const [newProps, newTag] = magicProps(props, allowProps, defaultProps, modKeys);

            return React.createElement(
                newTag,
                newProps,
                children,
            );
        },
        name,
    );
}



const getTagName = (prevTag, nextTag) => {
    if (typeof nextTag === 'string') {
        return nextTag;
    }

    return prevTag;
}

const getRef = (prevRef, nextRef) => {
    if (typeof nextRef === 'function') {
        return nextRef;
    }

    return prevRef;
}

const getPropKey = (...args) => {
    return args.filter((key) => typeof key === 'string').join('-');
};

const divideProps = (props, ...divide) => {
    const propsKeys = Object.keys(props);
    const divideKeys = divide.flat();
    const result = [Object.create(null), ...divide.map(() => Object.create(null))];

    propsKeys.forEach((key) => {
        const value = props[key];

        if (divideKeys.includes(key)) {
            divide.forEach((keys, index) => {
                if (keys.includes(key)) {
                    result[index + 1][key] = value;
                }
            });
        } else {
            result[0][key] = value;
        }
    });

    return result;
};


export const newBlock2 = ({ name, tag='div', preset, mods=[], mix=[] }) => {
    if (typeof name !== 'string') {
        throw new Error('The argument "name" is not a string');
    }
    return (() => {
        const basePropKeys = ['tag', 'ref'].map((key) => getPropKey(name, key));
        const modPropKeys = mods.map((key) => getPropKey(name, key));
        const mixModPropKeys = mix.map(({ modPropKeys }) => modPropKeys);
        const mapOfNamePropMods = mods.reduce((target, key) => {
            target[getPropKey(name, key)] = key;
            return target;
        }, {});

        const getProp = (props, key) => props[getPropKey(name, key)];

        const getClassName = (props) => {
            const mods = Object.keys(props).reduce((target, key) => {
                target[mapOfNamePropMods[key]] = props[key];
                return target;
            }, {});

            return withPreset(preset)(name)(mods);
        };

        const Element = ({ ref, className, children, ...props }) => {
            const [
                cleanProps, modProps, baseProps, ...mixProps
            ] = divideProps(props, modPropKeys, basePropKeys, ...mixModPropKeys);

            const newTagName = getTagName(tag, getProp(props, 'tag'));
            const newRef = getRef(ref, getProp(props, 'ref'));
            const newClassName = [getClassName(modProps)];

            mixProps
                .filter((mixModMods) => !!Object.keys(mixModMods).length)
                .forEach((mixModMods, index) => {
                    newClassName.push(
                        mix[index].getClassName(mixModMods)
                    );
                });

            if (className) {
                newClassName.push(className);
            }

            return React.createElement(
                newTagName,
                {
                    ref: newRef,
                    className: newClassName.join(' '),
                    ...cleanProps,
                },
                children,
            );
        };

        Element.modPropKeys = modPropKeys;
        Element.getClassName = getClassName;
        Element.displayName = name;

        return Element;
    })();
}
