import { forwardRef, createElement } from 'react';

export const withProps = (target, defaultProps) => {
    const Block = forwardRef((props, ref) => createElement(target, { ...props, ref }));

    Block.defaultProps = {
        ...target.defaultProps,
        ...defaultProps,
    };
    Block.displayName = 'withProps';
    Block.propTypes = target.propTypes;

    return Block;
};
