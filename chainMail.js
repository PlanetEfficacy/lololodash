// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(words) {
        // do work; return stuff
        var changedWords = _
          .chain(words)
          .map(function(word){ return word.toUpperCase() + "CHAINED"; })
          .sort();

        return changedWords;
    };

    // export the worker function as a nodejs module
    module.exports = worker;
