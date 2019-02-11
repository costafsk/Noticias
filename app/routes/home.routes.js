module.exports = (app) => {
    app.get('/', (req, res, next) => {
        app.app.controllers.home.index(app, res);
    });
}