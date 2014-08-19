var i18n = require('i18n');

module.exports = function(app) {
  i18n.configure({
    locales: ['es', 'en'],
    defaultLocale: 'es',
    cookie: 'language',
    directory: __dirname + '/locales'
  });

  app.use(i18n.init);
}