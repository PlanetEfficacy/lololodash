// include the Lo-Dash library
    var _ = require("lodash");

    var worker = function(/* arguments */) {
      var users = [
        { id: 22, username: "martin", active: true},
        { id: 23, username: "max",    active: false},
        { id: 24, username: "linda",  active: false}
      ];

      return _.filter(users, { 'active': true });

        // do work; return stuff
    };

    // export the worker function as a nodejs module
    module.exports = worker;
