const loaderUtils = require('loader-utils');
const featureFlag = require('feat-flag');

module.exports = function featureFlagLoader(content) {
    const query = loaderUtils.getOptions(this);
    const babelOptions = query.babelOptions || {};
    const rules = query.rules || {};

    if (!rules || !Object.keys(rules).length) {
        return content;
    }
    return featureFlag(content, rules, babelOptions);
}
