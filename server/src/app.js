const express = require('express');
const path = require('path');
const cors = require('cors');
const morgan = require('morgan');

const api = require('./routes/api');

//doing this allows us to separated middleware from server
const app = express();
app.use(
  cors({
    origin: 'http://localhost:3000',
  })
);

//logging middleware should go after secuirty related middleware
app.use(morgan('combined'));

app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'public')));
//* matches everything after the / , everything uses html5 history api can be served this way

//for another version of api we can mount it under v2
//i.e app.use('/v2',v2Router);
app.use('/v1', api);

//mounting of static files should be the last route, so /* don't interfer with other apis
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});
module.exports = app;
