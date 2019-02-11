module.exports = (app) => {
    app.get('/admin', (req, res, next) => {
        app.app.controllers.admin.createNewsRoute(app, req, res)
    });
    
    
    app.post('/admin/save', (req, res, next) => {
        app.app.controllers.admin.createNews(app, req, res);
    });
}