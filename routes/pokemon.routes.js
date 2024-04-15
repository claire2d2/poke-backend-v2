const router = require("express").Router();
const Pokemon = require("./../models/Pokemon.model");
// all routes here are prefixed with /api/pokemon

router.get("/", async (req, res, next) => {
  try {
    const search = generateSearch(req.query);
    console.log(search);
    //TODO to change / implement paginationcl
    let offset = 0;
    const allPokemon = await Pokemon.find(search).limit(50).skip(offset);
    res.status(200).json(allPokemon);
  } catch (error) {
    //TODO add error handling
    next(error);
  }
});

router.get("/:pokeId", async (req, res, next) => {
  try {
    const { pokeId } = req.params;
    const onePoke = await Pokemon.findOne({ _id: pokeId });
    console.log(onePoke);
    if (!onePoke) {
      return res.status(404).json({ error: "Pokemon not found" });
    }
    res.status(200).json(onePoke);
  } catch (error) {
    console.error(error);
    // next(error);
  }
});

function generateSearch(query) {
  const search = {};
  if (query.name) {
    // "i" is for case insensitive
    search.name = new RegExp(query.name);
    console.log(search);
  }
  return search;
}

module.exports = router;
