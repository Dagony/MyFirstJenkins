var fs = require ('fs');
var marky = require('marky-markdown');

fs.readFile('tmp/meat.json', 'utf8', function(err, data) {
    if (err) throw err;
    var meat = JSON.parse(data);
    var content = "# MEAT!!1!\n\n";
    meat.forEach(function(p) {
        content += p + "\n\n";
    });
    var html = marky(content);

    fs.writeFile('tmp/meat.md', content, function(err) {
        if (err) throw err;
    });
    fs.writeFile('tmp/meat.html', html, function(err) {
        if (err) throw err;
    });
});