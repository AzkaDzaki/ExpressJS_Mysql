const express = require('express'); //manggil library express
const bodyParser = require('body-parser'); //manggil body parser
const app = express(); //manggil fungsi expressjs

//parse application/json
app.use(bodyParser.urlencoded({extended: true})); //bodyparser.url
app.use(bodyParser.json()); //bodyparser.json

//panggil routes
var routes = require('./routes');
routes(app);

//app.listen
app.listen(3000, () => {
    console.log(`Server started on port`);
});