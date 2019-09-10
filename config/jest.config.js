var path = require('path');

module.exports = {
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    setupFiles: [
        path.resolve(__dirname, 'jest/adapter.js')
    ],
    moduleNameMapper: {
        '\\.css$': 'identity-obj-proxy'
    },
    transform: {
      '^.+\\.jsx?$': path.resolve(__dirname, 'jest/transformer.js')
    }
};
