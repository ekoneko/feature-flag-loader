const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const config = require('./assets/webpack.config.js');

const distPath = require.resolve('./assets/dist/index.js');

it ('webpack compile', done => {
    webpack(config, (err) => {
        if (err) {
            return done(err);
        }
        const target = fs.readFileSync(distPath).toString();
        if (target.indexOf('flag_start') > -1) {
            return done('Flag literal don\'t remove yet');
        }
        if (target.indexOf('codeInFlagA') > -1) {
            return done('Flag rules don\'t match');
        }
        done();
    });
});
