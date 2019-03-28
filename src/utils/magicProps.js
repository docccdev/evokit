import { withPreset } from './cnBlock';

export const BLOCK_PROP_KEY = '__block__';
export const PRESET_KEY = 'preset';

export const magicProps = ({ className, ...props }, allowProps, defaultProps, modKeys) => {
    const newProps = { ...defaultProps, ...props };
    const newCnList = [];
    const mapProps = {
        [BLOCK_PROP_KEY]: {},
    };

    Object
        .keys(newProps)
        .filter((key) => allowProps.hasOwnProperty(key))
        .forEach((key) => {
            const modData = allowProps[key];
            let value = newProps[key];

            if (!mapProps.hasOwnProperty(modData[0])) {
                mapProps[modData[0]] = {};
            }

            if (modData[1] === PRESET_KEY) {
                value = { ...defaultProps[key], ...newProps[key] };
            }

            mapProps[modData[0]][modData[1]] = value;

            delete newProps[key];
        });

    const cnBlock = withPreset(mapProps[BLOCK_PROP_KEY].preset);

    modKeys
        .filter((key, index) => index === 0 || mapProps.hasOwnProperty(key))
        .forEach((key) => {
            newCnList.push(cnBlock(key)(mapProps[key]));
        });

    if (className) {
        newCnList.push(className);
    }

    if (mapProps[BLOCK_PROP_KEY].ref) {
        newProps.ref = mapProps[BLOCK_PROP_KEY].ref;
    }

    newProps.className = newCnList.join(' ');

    return [newProps, mapProps[BLOCK_PROP_KEY].tag];
}
