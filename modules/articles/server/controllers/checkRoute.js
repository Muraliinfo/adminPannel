'use strict';

var newRoute = function(req, res) {
    console.log(req.body);
    res.json({ me: 'santho' });
};
exports.new_route = newRoute;