// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(/* arguments */) {
        // do work; return stuff
        var words = ['Test', 'Hello', 'World', 'Node', 'JavaScript'];

        var changedWords = _
          .chain(words)
          .map(function(word){ return word.toUpperCase() + "CHAINED"; })
          .sort();

        return changedWords;
    };

    // export the worker function as a nodejs module
    module.exports = worker;
