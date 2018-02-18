const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-overide');
const exphbs = require('express-handlebars');

const app = express();

app.use(express.static(_dirname+ '/public'));

app.use(bodyParser.urlencoded({
	extended: false
}));

app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({
	defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

const port = process.env.PORT || 3000;
app.listen(port);

console.log("your listening on port: "+ port)
