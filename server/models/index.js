/*
  * initializes all models and sources them as .model-name
  * Not currently using this file
*/

fs.readdirSync(__dirname).forEach(function(file) {
  if (file !== 'index.js') {
    var moduleName = file.split('.')[0];
    exports[moduleName] = require('./' + moduleName);
  }
});

// var models = require('./path/to/models');
// var User = models.user;
// var OtherModel = models['other-model'];