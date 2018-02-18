var mysql = require('mysql');
var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'burgers_db'
})

connection.connect(function(err){
	if(err)throw err;
	console.log("connected as id: " + connection.threadid);
})

module.exports = connection;