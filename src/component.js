import classNames from 'classnames';
import PropTypes from 'prop-types';


export function createBlock(target) {
    const propsPrefixName = target.blockName.split('__')[0];

    target.blockTag = target.blockTag || 'div';
    target.propTypes = target.propTypes || {};
    target.classPrefix = target.classPrefix || 'ek-';
    target.propsPrefix = target.propsPrefix || `${propsPrefixName}-`;
    target.blockMods = target.blockMods || [];
    target.displayName = target.displayName || `${target.classPrefix}${target.blockName}`;

    target.propTypes['domRef'] = PropTypes.func;

    const tagPropName = `${target.propsPrefix}tag`;

    target.propTypes[tagPropName] = PropTypes.string;

    for (const key of target.blockMods) {
        target.propTypes[`${target.propsPrefix}${key}`] = PropTypes.oneOfType([
            PropTypes.array,
            PropTypes.string,
            PropTypes.object,
            PropTypes.number,
        ]);
    }

    target.prototype.getElementClassName = function getElementClassName(name) {
        const blockClassName = `${target.classPrefix}${target.blockName}`;

        return `${blockClassName}__${name}`;
    };

    target.prototype.getClassName = function getClassName() {
        const blockClassName = `${target.classPrefix}${target.blockName}`;
        const modsProps = [blockClassName];

        for (const key of target.blockMods) {
            const propName = `${target.propsPrefix}${key}`;

            if (propName in this.props) {
                const modName = `${blockClassName}_${key}`;
                let modsString = classNames(this.props[propName]);

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
            const propName = `${target.propsPrefix}${key}`;

            if (propName in cleanProps) {
                delete cleanProps[propName];
            }
        }

        if (cleanProps.className) {
            delete cleanProps.className;
        }

        if (tagPropName in this.props) {
            delete cleanProps[tagPropName];
        }

        if (this.props.domRef) {
            delete cleanProps.domRef;
            cleanProps.ref = this.props.domRef;
        }

        return cleanProps;
    };

    target.prototype.getTagName = function getTagName() {
        return this.props[tagPropName] || target.blockTag;
    };

    target.prototype.getProps = function getProps() {
        return Object.assign(this.getCleanProps(), {
            className: this.getClassName(),
        });
    };

    return target;
}
