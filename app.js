var Cuexpress = require('./cuexpress');
var app = new Cuexpress();

app.get('/', function (req, res) {
  console.log('Hello World!');
  res.send('Hello World!');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});