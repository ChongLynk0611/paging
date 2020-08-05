var db = require('../db');

module.exports.index = function(req, res ){
    var page = parseInt( req.query.page) || 1;
    var start = (page-1)*6;
    var end = page*6;
    var pages = [String( page-1),String(page),String( page+1),String( page+2)];
    res.render('index',{
        products:db.get('products').value().slice(start,end),
        pages:pages
        
    });
}