const { bindAll, functionsIn, assignIn } = require("lodash");

module.exports = function ezfn(obj, dest=window) {
    bindAll(obj, functionsIn(obj));
    assignIn(dest, obj);
};
