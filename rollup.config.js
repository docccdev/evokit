// import babel from 'rollup-plugin-babel';
// import eslint from 'rollup-plugin-eslint';
// import serve from 'rollup-plugin-serve'
// import postcss from 'rollup-plugin-postcss';
// import postcssModules from 'postcss-modules';
// import postcssEvokit from 'postcss-evokit';
// import evokitConfig from './evokit.config.js';

// const cssExportMap = {};

export default {
    input: 'dist_evokit/index.js',
    output: {
        file: 'dist/index.js',
        format: 'esm',
        // name: 'Grid',
    },
    // external: ['react', 'prop-types'],
    // globals: {
    //   react: 'React',
    //   'prop-types': 'PropTypes',
    // },
    // plugins: [
    //     eslint(),
    //     postcss({
    //         plugins: [
    //             postcssEvokit({
    //                 variables: {
    //                     globals: evokitConfig
    //                 }
    //             }),
    //             postcssModules({
    //                 // generateScopedName: function(selector) {
    //                 //     return `ui-${selector}`;
    //                 // },
    //                 getJSON: function(id, exportTokens) {
    //                     cssExportMap[id] = exportTokens;
    //                 },
    //             })
    //         ],
    //         extract: 'dist/style.css',
    //         getExport: function(id) {
    //             return cssExportMap[id];
    //         },
    //     }),
    //     babel(),
    //     serve({ contentBase: 'dist', port: 10001 })
    // ]
};


