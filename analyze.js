// include the Lo-Dash library
var _ = require("lodash");

var worker = function(freelancerIncome) {

    var average = _.reduce(freelancerIncome, function(sum, freelancer){
      return sum += freelancer.income;
    },0)/(freelancerIncome.length);

    var underperform = [];
    var overperform = [];

    _.forEach(freelancerIncome, function(freeLancer, key) {
      var thisFreeLancer = { name: freeLancer.name, income: freeLancer.income};
      if(freeLancer.income > average) {
        overperform.push(thisFreeLancer);
      } else {
        underperform.push(thisFreeLancer);
      }
    });

    return {  average: average,
              underperform: _.sortBy(underperform, 'income'),
              overperform: _.sortBy(overperform, 'income') }
};

// export the worker function as a nodejs module
module.exports = worker;
