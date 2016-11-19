// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(items) {
        // do work; return stuff

        return _.sortBy(items, function(item) { return item.quantity; }).reverse()
    };

    // export the worker function as a nodejs module
    module.exports = worker;
