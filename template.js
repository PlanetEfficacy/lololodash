
    // include the Lo-Dash library
var _ = require("lodash");

var worker = function(userLogins) {
  var name = userLogins.name;
  var logins = userLogins.login.length;
  var template = 'Hello <%= name %> (logins: <%= logins %>)';
  return _.template(template)({ name: name, logins: logins });
};

// export the worker function as a nodejs module
module.exports = worker;
