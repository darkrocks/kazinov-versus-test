var controller = require('./controller');

/**
 * Configures the application's routes.
 * @param app - The application.
 */
function configure(app) {
    app.get('/api/:nameUrl', controller.findByNameUrl);
}

module.exports = {
    configure: configure
};