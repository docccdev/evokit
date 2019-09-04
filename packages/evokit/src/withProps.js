export const withProps = (target, defaultProps) => {
    if (typeof target !== 'function') {
        throw new Error('The first argument `target` is not a function');
    }

    const Block = (props) => target(props);

    Block.defaultProps = {
        ...target.defaultProps,
        ...defaultProps,
    };
    Block.displayName = target.displayName;
    Block.propTypes = target.propTypes;

    return Block;
};
