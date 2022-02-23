const mongoose = require('mongoose');

require('dotenv').config();
// replace<password> with password from mongodb, replace Defualt database name to your database name
const MONGO_URL = process.env.MONGO_URL;

//once only triggers for one time when the condition is satisfied
//mongoose.connection return a event

mongoose.connection.on('error', (err) => {
  console.log(err);
});
mongoose.connection.once('open', () => {
  console.log('MongoDB connection ready!');
});
async function mongoConnect() {
  await mongoose.connect(MONGO_URL);
}

async function mongoDisconnect() {
  await mongoose.disconnect();
}

module.exports = {
  mongoConnect,
  mongoDisconnect,
};
