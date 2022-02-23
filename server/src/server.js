const http = require('http');
const app = require('./app');
require('dotenv').config();
const { mongoConnect } = require('./services/mongo');
const { loadPlanetsData } = require('./models/planets.model');
const { loadLaunchData } = require('./models/launches.model');
//check if port is specified or goes to default port 8000
const PORT = process.env.PORT || 8000;

const server = http.createServer(app);

//load data from csv before setting the listener
//this pattern is used when we need to load data or perform action before server starts to respond to the users
//server respond to user after data is loaded
async function startServer() {
  //connecting to database, some settings are required to use the latest driver
  await mongoConnect();
  await loadPlanetsData();
  await loadLaunchData();
  server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}... `);
  });
}

startServer();
