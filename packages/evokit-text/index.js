if (process.env.NODE_ENV === 'production') {
    module.exports = require('./evokit-text.min.js');
} else {
    module.exports = require('./evokit-text.js');
}