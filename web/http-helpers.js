var path = require('path');
var fs = require('fs');
var archive = require('../helpers/archive-helpers');

exports.headers = {
  'access-control-allow-origin': '*',
  'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'access-control-allow-headers': 'content-type, accept',
  'access-control-max-age': 10, // Seconds.
  'Content-Type': 'text/html'
};


exports.serveAssets = function(res, asset, callback) {
  // Write some code here that helps serve up your static files!
  // (Static files are things like html (yours or archived from others...),
  // css, or anything that doesn't change often.)

  // fs.readFile(asset, function (err, data) {
  //   if (err) {
  //     res.writeHead(404);
  //     res.end(JSON.stringify(err));
  //     return;
  //   }
  //   return data;
  // });
};

// As you progress, keep thinking about what helper functions you can put here!


// //to check if a file exists
// var f = '/' + lookup;
// fs.exists(f, function (exists) { 
//   console.log(exists ? lookup + " is there" 
//   : lookup + " doesn't exist");
// });

// exports.readContent = function(callback) {

// }




// filePath = './sample_files/sample_css.css';

// // this for async way
// fs.readFile(filePath, 'utf8', function (err, data) {
//     if (err) throw err;
//     console.log(data);
//     callback(data);
// };




  // var statusCode = statusCode || 200;
  

  // fs.readFile('public/index.html', function (err, data) {
    

  //   //file exists ?
  //     //No: error 400
  //   //Yes:   

  //   if (err) {
  //     console.log("THE ERROR IS ********", err);
  //     statusCode = 500;
  //     res.writeHead(statusCode, {'Content-Type': 'text/plain'});
  //     res.end('Server Error!'); return; 
  //   }
  
  //   console.log(data);
  //   res.writeHead(statusCode, {'Content-Type': 'text/html'});
    
  //   res.end(callback(data));