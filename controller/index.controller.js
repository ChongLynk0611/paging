var db = require('../db');

module.exports.index = function(req, res ){
    
    res.render('index',{
        products:db.get('products').value()
    });
}