// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(/* arguments */) {
        // do work; return stuff
        items = [{ article: 41,   quantity: 24 },
                 { article: 2323, quantity: 2  },
                 { article: 655,  quantity: 23 }];

        return _.sortBy(items, function(item) { return item.quantity; }).reverse()
    };

    // export the worker function as a nodejs module
    module.exports = worker;
