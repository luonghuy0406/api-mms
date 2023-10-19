const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3003;
const router = require('./router');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "https://dashboard-mms.vercel.app/")
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next()
  }) 

app.use(express.static('public'));
app.set('view engine', 'ejs');

app.use('/upload', router);

app.listen(port, function () {
    console.log('Server is running on PORT',port);
});

