var express = require('express');
var app = express();
var routerIndex = require('./routes/index.router');

app.set('views', './views');
app.set('view engine', 'pug');
app.use(express.static('public'));

app.use('/',routerIndex);

app.listen(3000, () => {
    console.log(`listening port 3000 !!!`);
  })