module.exports.getAllNews = (app, req, res) => {
    const database = app.config.database();
    const model = new app.app.models.news(database);

    model.getAllNews((reject, result) => {
        res.render('feed/feed.ejs', {
            news: result
        });
    });
}

module.exports.getNews = (app, req, res) => {
    const database = app.config.database();
    const model = new app.app.models.news(database);

    model.getNews(req.query, (reject, resolve) => {
        res.render('news/news.ejs', {news: resolve});
    });
}