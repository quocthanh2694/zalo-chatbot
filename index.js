
const express = require('express');
const app = express();
var ZaloOA = require('zalo-sdk').ZaloOA;

var zaConfig = {
  oaid: 'your oaid',
  secretkey: 'your secret key'
}
var ZOAClient = new ZaloOA(zaConfig);

var userId = 'user id'; // just for test

app.get('/', (req, res) => {
  var date = new Date();
  ZOAClient.api('sendmessage/text', 'POST', { uid: userId, message: 'Test message!' + date }, function (response) {
    console.log(response);
  });

  res.send('Hello World!')
});

app.get('/receive', (req, res)=>{
  console.log(req.query.fromuid);
  var date = new Date();
  ZOAClient.api('sendmessage/text', 'POST', {
     uid: req.query.fromuid, message: req.query.message
    }, function (response) {
    // console.log(response);
  });

  res.send('receive method');
})

var listener = app.listen(process.env.PORT || 3000, () => {
  console.log("Server listening at: " + listener.address().address + ":" + listener.address().port)
});

