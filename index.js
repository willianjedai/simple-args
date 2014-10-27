module.exports = (function () {
  'use Strict';

  var arguments = process.argv;
  var serializedArguments = {};

  for (var i = 0; i <= arguments.length-1; i++) {
    var arg = arguments[i];

    if (arg.indexOf('=') !== -1) {
      arg = arg.match(/([^=]*)=(.*)/);
      serializedArguments[arg[1]] = arg[2];
    }

    if (arg.substr(0,2) === '--'){
      if (arguments[i+1]){
        serializedArguments[arg.replace(/-/g, '')] = (arguments[i+1].substr(0,2) === '--') ? true : arguments[++i];
      }else{
        serializedArguments[arg.replace(/-/g, '')] = true;
      }
    }

    if ( arg.substr(0,1) === '-' ) {
      if (arguments[i+1]){
        serializedArguments[arg.replace(/-/g, '')] = (arguments[i+1].substr(0,1) === '-') ? true : arguments[++i];
      }else{
        serializedArguments[arg.replace(/-/g, '')] = true;
      }
    }
  }

  return serializedArguments;
})();
