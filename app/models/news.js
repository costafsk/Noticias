 // Design Pattern DAO;

class News {
    constructor(connection) {
        this._connection = connection;
    }
    getAllNews(callback) {
        this._connection.query('select * from news order by createdAt desc;', callback);
    }
    getNews(id, callback) {
        this._connection.query(`select * from news where id = ${id.id};`, callback);
    }
    createNews(form, callback) {
        this._connection.query('insert into news set ?', form, callback);
    }
    getNewsIndex(callback) {
        this._connection.query('select * from news order by createdAt desc limit 5', callback)
    }

}

module.exports = () => {
    return News;
}