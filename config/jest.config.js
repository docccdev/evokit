var path = require('path');

module.exports = {
    snapshotSerializers: [
        'enzyme-to-json/serializer'
    ],
    setupFiles: [
        path.resolve(__dirname, 'jest/adapter.js')
    ],
    transform: {
      '^.+\\.jsx?$': path.resolve(__dirname, 'jest/transformer.js'),
      '\\.css': 'jest-raw-loader'
    }
};
