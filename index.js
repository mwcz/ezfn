const { bindAll, functionsIn, assignIn } = require("lodash");

module.exports = function ezfn(src, dest=window) {
    bindAll(src, functionsIn(src));
    assignIn(dest, src);
};
