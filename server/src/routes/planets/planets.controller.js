const { getAllPlanets } = require('../../models/planets.model');

async function httpGetAllPlanets(req, res) {
  console.log(getAllPlanets());
  return res.status(200).send(await getAllPlanets());
}

module.exports = {
  httpGetAllPlanets,
};
