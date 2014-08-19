module.exports = function() {
  var mongoose = require('mongoose');

  var MONGODB = {
      uri: process.env.MONGOHQ_URL || 'mongodb://localhost/nuggetDB',
      options: {
        server: {
          auto_reconnect: true,
          poolSize: 3,
          socketOptions: {
            keepAlive: 1
          }
        },
        db: {
          numberOfRetries: 10,
          retryMiliSeconds: 1000
        }
      }
  }

  console.log("Mongoose connecting...");
  mongoose.connect(MONGODB.uri, MONGODB.options);

}();