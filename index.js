var fs = require ('fs');

fs.readFile('tmp/meat.json', 'utf8', function(err, data) {
    var meat;

    if (err) throw err;
    meat = JSON.parse(data);

    fs.writeFile('tmp/meat.md', "Content here!", function(err) {
        if (err) throw err;
    });
});