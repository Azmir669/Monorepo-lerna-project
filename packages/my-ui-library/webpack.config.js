// webpack.config.js
const path = require('path');

module.exports = {
    mode: 'development', // Set mode to 'development' or 'production'
    entry: './lib/my-ui-library.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
};
