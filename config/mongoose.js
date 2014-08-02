var mongoose = require('mongoose');

module.exports = function() {

  var MONGODB = {
      uri: process.env.MONGOHQ_URL || 'mongodb://localhost/nuggetDB',
      options: {
        server: {
          auto_reconnect: true,
          poolSize: 10,
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

  mongoose.connect(MONGODB.uri, MONGODB.options);

}