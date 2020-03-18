const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes')


const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/', express.static(path.join(__dirname, '../client/dist')))
app.use('/api/restaurants', routes.restaurants)
const port = process.env.PORT || '3000';


app.listen(port, () => console.log(`Server running on localhost ${port}`));