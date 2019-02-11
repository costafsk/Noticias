module.exports = (app) => {
    app.get('/feed', (req, res, next) => {
        app.app.controllers.feed.getAllNews(app, req, res);
    });
    app.get('/news', (req, res, next) => {
        app.app.controllers.feed.getNews(app, req, res);
    });
}