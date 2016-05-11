var path = require('path');
var archive = require('../helpers/archive-helpers');
var httpHelpers = require('./http-helpers');
var fs = require('fs');
// require more modules/folders here!


// var requestTypes = {
//   'GET': function() {},
//   'POST': function() {},
//   'OPTIONS':  
// }

var mimeTypes = {
  '.js': 'text/javascript',
  '.html': 'text/html',
  '.css': 'text/css'
};


// var statusCode = 200;

// exports.handleRequest = function (req, res) {

//   var basePath = 'public/'
//   var ourAsset = basePath + decodeURI(req.url);
  
//   if(decodeURI(req.url) === '/') {
//     ourAsset = basePath + 'index.html';
//   } else {

//   }



//   if (req.method === 'GET') {

//     httpHelpers.serveAssets(res, ourAsset, function(data) {  
//       res.writeHead(200, {'Content-Type': 'text/html'});
//       console.log(data);
//       res.end(data);
//     });


// };


   // console.log('REQUEST URL **********', path.basename(decodeURI(req.url)));
    // var lookup = path.basename(decodeURI(req.url)) || 'index.html';
    // var f = './public/' + lookup;
    // fs.exists(f, function (exists) { 
    //   console.log(exists ? lookup + " is there" 
    //   : lookup + " doesn't exist");
    // });


    // httpHelpers.serveAssets(res, asset, callback);



  // var basePath = 'public/';
  // var url = decodeURI(req.url);
  // var filename = path.join(process.cwd(), url);



  // if (req.method === 'GET') {

  //   httpHelpers.serveAssets(res, asset, function() {
  //     res.end();
  //   });
  // }
  // // res.writeHead(404); //no such file found!
  // // res.end(archive.paths.list);
  // // res.end();