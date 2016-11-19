// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(comments) {
        // do work; return stuff
      // return

      var result =  _.groupBy(comments, function(comment) {
          return comment.username
        });

      var arr = [];
      _.forEach(result, function(value, key) {
        arr.push({ username: key,
          comment_count: _.size(value)
        })
      });

      return arr.reverse();

    };

    // export the worker function as a nodejs module
    module.exports = worker;
