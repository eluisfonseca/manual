var ngrok = require('ngrok');

ngrok.connect(8080, function (err, url) {
  if (err) {
    console.log('error');
    process.exit(0);
  }

  console.log(url);
});