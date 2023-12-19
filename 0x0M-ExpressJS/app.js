const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//MIDDLEWARE
const postsRoute = require('./routes/posts');
const apiRoute = require('./routes/api');
app.use('/posts', postsRoute);
app.use('/api', apiRoute);

//ROUTES
app.get('/', (req, res) => {
    res.send('We are now on home page');
    });

//CONNECT TO DB
// mongoose.connect(process.env.DB_CONNECT,
//      { userNewUrlParser: true},
//      () => console.log('connected to database!')
//      );

//LISTEN TO SERVER
const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));