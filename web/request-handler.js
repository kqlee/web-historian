var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!

exports.handleRequest = function (req, res) {

  var ourDirectory;

  if (req.method === 'GET') {
    if (decodeURI(req.url) === '/') {
      ourDirectory = archive.paths.siteAssets + decodeURI(req.url) + 'index.html';
    } else {
      ourDirectory = archive.paths.archivedSites + decodeURI(req.url);
    }

    fs.readFile(ourDirectory, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404);
        res.end();
        return;
      } else {
        res.writeHead(200);
        res.end(data.toString());
      }
    });
  }

  if (req.method === 'POST') {
    
    var jsonString = '';

    req.on('data', function (data) {
      jsonString += data;
      var startSlice = (jsonString.indexOf('=') + 1);
      jsonString = jsonString.slice(startSlice) + '\n';
    });

    req.on('end', function () {
      archive.addUrlToList(jsonString, function() {
        res.writeHead(302);
        res.end();
      });

    });
  }
};