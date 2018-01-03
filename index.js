var fs = require ('fs');
var meat;

fs.readFile('tmp/meat.json', 'utf8', function(err, data) {
    if (err) throw err;
    meat = JSON.parse(data);
    console.log(meat);
});