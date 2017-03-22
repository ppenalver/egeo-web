const fs = require('fs')
const path = require('path');

var mkdirp = require('mkdirp');
var getDirName = require('path').dirname;

function writeFile(path, contents, cb) {
   mkdirp(getDirName(path), function (err) {
      if (err) return cb(err);

      fs.writeFile(path, contents, cb);
   });
}

function getDirectories(srcpath) {
   return fs.readdirSync(srcpath)
      .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory())
      .filter(file => file !== '.git')
}


function getIndex(versionList) {
   return `
<!DOCTYPE html>
<html lang="en">

<head>
   <meta charset="utf-8">
   <title>Egeo-Web</title>
</head>

<body>
<script src="https://code.jquery.com/jquery-2.2.4.min.js"></script>
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

<!-- Optional theme -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

<!-- Latest compiled and minified JavaScript -->
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
<!-- Single button -->
<div class="btn-group">
  <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Action <span class="caret"></span>
  </button>
  <ul class="dropdown-menu">
    ${getList(versionList)}
  </ul>
</div>
</body>

</html>
`;
}

function getList(versionList) {
   list = '';
   versionList.forEach(name => {
      list += ` <li><a href="./${name}">${name}</a></li>  `
   })
   return list;
}

function writeResult(value) {
   console.log(value);
}

function iterate(folder) {
   let versions = getDirectories(folder);
   console.log(getIndex(versions))

}

if (process.argv[2] && process.argv[3]) {
   iterate(process.argv[2], process.argv[3]);
}
