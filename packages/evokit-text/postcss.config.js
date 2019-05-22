module.exports = {
    parser: 'sugarss',
    plugins: {
        'postcss-import': {},
        'postcss-mixins': {},
        'postcss-each': {},
        'postcss-for': {},
        'postcss-math': {},
        'postcss-conditionals': {},
        'postcss-nested': {},
        'postcss-prefixer': { prefix: 'ek-' },
        'css-mqpacker': {}
    }
};