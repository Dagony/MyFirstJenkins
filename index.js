var fs = require ('fs');

fs.readFile('tmp/meat.json', 'utf8', function(err, data) {
    if (err) throw err;
    var meat = JSON.parse(data);
    var content = "# MEAT!!1!\n\n";
    meat.forEach(function(p) {
        content += p + "\n\n";
    });

    fs.writeFile('tmp/meat.md', content, function(err) {
        if (err) throw err;
    });
});