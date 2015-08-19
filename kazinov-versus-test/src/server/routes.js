var path = require('path');
var controller = require('./controller');

/**
 * Configures the application's routes.
 * @param app - The application.
 */
function configure(app) {
    app.get('/api/:nameUrl', controller.findByNameUrl);

    app.get('*', function (req, res) {
        res.sendFile(path.join(__dirname, '../client', 'index.html'));
    });
}

module.exports = {
    configure: configure
};