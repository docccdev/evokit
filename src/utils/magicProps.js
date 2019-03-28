import { withPreset } from './cnBlock';

export const BLOCK_PROP_KEY = '__block__';

export const magicProps = ({ className, ...props }, allowProps, defaultProps, modKeys) => {
    const newProps = Object.assign({}, defaultProps, props);
    const newCnList = [];
    const mapProps = {
        [BLOCK_PROP_KEY]: {},
    };

    Object
        .keys(newProps)
        .filter((key) => allowProps.hasOwnProperty(key))
        .forEach((key) => {
            const modData = allowProps[key];

            if (!mapProps.hasOwnProperty(modData[0])) {
                mapProps[modData[0]] = {};
            }

            mapProps[modData[0]][modData[1]] = newProps[key];

            delete newProps[key];
        });

    const cnBlock = withPreset({
        b: 'ek-',
        css: mapProps[BLOCK_PROP_KEY].css,
    });

    modKeys
        .filter((key, index) => index === 0 || mapProps.hasOwnProperty(key))
        .forEach((key) => {
            newCnList.push(cnBlock(key)(mapProps[key]));
        });

    if (className) {
        newCnList.push(className);
    }

    newProps.className = newCnList.join(' ');

    return [newProps, mapProps[BLOCK_PROP_KEY].tag];
}
