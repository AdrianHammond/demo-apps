var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This nodejs application was deployed from GitHub using Red Hat Advanced Cluster Management for Kubernetes');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
