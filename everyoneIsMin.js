// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(cities) {
        // do work; return stuff
        result = { hot : [],
                   warm : [] };

        _.forEach(cities, function(val, key){
          var hot = _.every(val, function(n) {
            return n > 19;
          });
          var warm = _.some(val, function(n) {
            return n > 19;
          });

          if(hot) {
            result.hot.push(key)
          }else if(warm) {
            result.warm.push(key)
          }

        });

        return result;
    };

    // export the worker function as a nodejs module
    module.exports = worker;
