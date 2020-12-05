var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World! This sample application was deployed using Red Hat Advanced Cluster Management for Kubernetes');
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});

