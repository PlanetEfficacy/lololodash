// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(/* arguments */) {
        // do work; return stuff
        var cities = { Hamburg:    { population: 1.698 },
            Strasbourg: { population: 0.272 },
            Rome:       { population: 2.753 },
            Dublin:     { population: 0.528 } };
        return _.forEach(cities, function(city){
          if(city.population > 1) {
            city.size = 'big'
          } else if (city.population > .5) {
            city.size = 'med'
          } else {
            city.size = 'small'
          }
        })
    };

    // export the worker function as a nodejs module
    module.exports = worker;
