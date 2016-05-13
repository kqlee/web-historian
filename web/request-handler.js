var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!


var mimeTypes = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.png': 'image/png',
  '.gif': 'image/gif',
  '.jpg': 'image/jpeg'
};


exports.handleRequest = function (req, res) {

  var lookup = path.basename(decodeURI(req.url)) || 'index.html';
  var headers = {'Content-type': mimeTypes[path.extname(lookup)]};

  var ourDirectory;

  if (req.method === 'GET') {
    if (decodeURI(req.url) === '/') {
      ourDirectory = archive.paths.siteAssets + decodeURI(req.url) + 'index.html';
    } else if (decodeURI(req.url) === '/styles.css') {
      ourDirectory = archive.paths.siteAssets + decodeURI(req.url);
    } else if (decodeURI(req.url) === '/loading.html') {
      ourDirectory = archive.paths.siteAssets + decodeURI(req.url);
    } else {
      ourDirectory = archive.paths.archivedSites + decodeURI(req.url);
    }

    fs.readFile(ourDirectory, 'utf8', function (err, data) {
      if (err) {
        res.writeHead(404, headers);
        res.end();
        return;
      } else {
        res.writeHead(200, headers);
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

      fs.readdir(archive.paths.archivedSites, function(err, fileNames) {
        if (err) {
          console.log(err);
        } else {
          if (fileNames.indexOf(jsonString) === -1) {
            // console.log("I MADE IT HERE");
            res.writeHead(302, {location: 'loading.html'});
            res.end();
          }
        }
      });      



      
      // if (!archive.isUrlArchived(data.slice(startSlice), function() {
      //   return;
      // })) {
      //   res.writeHead(302, {Location: archive.paths.siteAssets + '/' + 'loading.html'});
      //   res.end();
      // }
    });

    req.on('end', function () {
      archive.addUrlToList(jsonString, function() {
        res.writeHead(302);
        res.end();
      });

    });
  }
};