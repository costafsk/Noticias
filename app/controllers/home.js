module.exports.index = (app, res) => {
    const connection = app.config.database();
    const modelNews = new app.app.models.news(connection);
    modelNews.getNewsIndex((reject, resolve) => {
        res.render('home/home.ejs', {news:resolve});
    });
}