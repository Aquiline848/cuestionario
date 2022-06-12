const express = require('express');
const app = express();
const morgan = require('morgan');

const path = require('path');
const router = require('./routes/routes');
app.set('view engine', 'ejs');
app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set('views', path.join(__dirname, 'pages'));
app.use('/', router);



app.listen(80, () => {
    console.log('Server running on port 80');
})
