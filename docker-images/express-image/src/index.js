var Chance = require('chance');
var chance = new Chance();

var express = require('express');
var app = express();

app.get('/', function (req, res) {
    var comp = getHackedComputers();
    res.send(comp);
    console.log(comp);
});

app.listen(3000, function () {
    console.log("Accepting HTTP requests on port 3000");
});

function getHackedComputers() {
    var nbOfComputer = chance.integer({
        min: 0, max: 10
    });

    var computers = [];

    for (var s = 0; s < nbOfComputer; s++) {

        var nbWebSite = chance.integer({
            min: 1,
            max: 5
        });
        var webSites = [];
        for (var i = 0; i < nbWebSite; i++) {
            webSites.push(chance.url());
        }

        var computer = {
            'ip': chance.ip(),
            'localisation': {
                'lat': chance.latitude(),
                'lon': chance.longitude()
            },
            'lastWebSitesVisited': webSites,
            'lastPasswordUsed': chance.word() + chance.word()
        };

        computers.push(computer);
    }

    return computers;
}