module.exports.createNewsRoute = (app, req, res) => {
    res.render('admin/admin.ejs', {validation:{}, news:{}});
}

module.exports.createNews = (app, req, res) => {
    req.assert('title', 'Titulo é obrigatório').notEmpty();
    req.assert('resumo', 'Resumo é obrigatório').notEmpty();
    req.assert('resumo', 'Deve conter entre 10 e 100 caracteres').len(10, 100);
    req.assert('author', 'Autor é obrigatório').notEmpty();
    req.assert('data', 'Data é obrigatório').notEmpty()
    req.assert('content', 'Noticia é obrigatório').notEmpty();

    const errors = req.validationErrors();

    if (errors) {
        res.render('admin/admin.ejs', {
            validation: errors,
            news: req.body
        });
        return;
    }
    const database = app.config.database();

    const model = new app.app.models.news(database);

    model.createNews(req.body, () => res.redirect('/feed'));
}