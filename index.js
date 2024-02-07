const express = require('express');
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(
    cors({
      origin: ["http://localhost:3000"],
      methods: ["POST", "PUT", "GET", "OPTIONS", "HEAD", "PATCH", "DELETE"],
      credentials: true,
      preflightContinue: false,
      optionsSuccessStatus: 204,
    })
);

app.use(bodyParser.urlencoded({ extended: false, limit: "50mb" }));
app.use(bodyParser.json({ limit: "50mb" }));

app.get('/', (req, res) => {
  res.send('Successful response.');
});

// Just add whatever API you might need
// For example if you need a login API as it as below

app.post("/login", (req, res) => {
    const userName = req.body.username;
    const password = req.body.password;

    if(userName == 'admin' && password == 'admin'){
        return res.send({success: true, message: "Login Successful"})
    }
    else{
        return res.send({success: false, message: "Login Failed"})
    }
})




app.listen(3002, function () {
  console.log('Example app listening on port 3002!');
});