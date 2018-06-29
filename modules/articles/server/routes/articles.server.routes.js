'use strict';

/**
 * Module dependencies
 */
var articlesPolicy = require('../policies/articles.server.policy'),
    articles = require('../controllers/articles.server.controller'),
    checkRoutes = require('../controllers/checkRoute');

module.exports = function(app) {
    // Articles collection routes
    app.route('/api/articles').all(articlesPolicy.isAllowed)
        .get(articles.list)
        .post(articles.create);

    // Single article routes
    app.route('/api/articles/:articleId').all(articlesPolicy.isAllowed)
        .get(articles.read)
        .put(articles.update)
        .delete(articles.delete);

    // Finish by binding the article middleware
    app.param('articleId', articles.articleByID);

    app.route('/api/auth/newWay').post(checkRoutes.new_route);
};