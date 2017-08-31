import classSet from 'classnames';
import PropTypes from 'prop-types';

const DEFAULT_MOD_PROP_TYPES = PropTypes.oneOfType([
    PropTypes.array,
    PropTypes.string,
    PropTypes.object,
]);

export function uiKitComponent(target) {
    target.propTypes = target.propTypes || {};
    target.classPrefix = target.classPrefix || 'ui';
    target.blockMods = target.blockMods || [];
    target.displayName = target.displayName || `${target.classPrefix}-${target.blockName}`;

    for (const key of target.blockMods) {
        target.propTypes[`${target.classPrefix}-${key}`] = DEFAULT_MOD_PROP_TYPES;
    }

    target.prototype.getElementClassName = function getElementClassName(name) {
        const blockClassName = `${target.classPrefix}-${target.blockName}`;

        return `${blockClassName}__${name}`;
    };

    target.prototype.getClassName = function getClassName() {
        const blockClassName = `${target.classPrefix}-${target.blockName}`;
        const modsProps = [blockClassName];

        for (const key of target.blockMods) {
            const propName = `${target.classPrefix}-${key}`;

            if (propName in this.props) {
                const modName = `${blockClassName}_${key}`;
                let modsString = classSet(this.props[propName]);

                if (modsString) {
                    modsString = modsString.replace(/ /g, ` ${modName}_`);
                    modsProps.push(`${modName}_${modsString}`);
                }
            }
        }

        if (this.props.className) {
            modsProps.push(this.props.className);
        }

        return modsProps.join(' ');
    };

    target.prototype.getCleanProps = function getCleanProps() {
        const cleanProps = Object.assign({}, this.props);

        for (const key of target.blockMods) {
            const propName = `${target.classPrefix}-${key}`;

            if (propName in cleanProps) {
                delete cleanProps[propName];
            }
        }

        if (cleanProps.className) {
            delete cleanProps.className;
        }

        return cleanProps;
    };

    return target;
}
