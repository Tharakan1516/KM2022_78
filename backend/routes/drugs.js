const router = require("express").Router();
let Drugs = require("../models/drugs.model");
const drugs = require("../models/drugs.model");

//get all inventories
router.route("/").get((req, res) => {
  drugs
    .find()
    .then((drugs) => res.json(drugs))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add an inventory - won't add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const amount = req.body.amount;
  const price = req.body.price;
  const purpose = req.body.purpose;
  const date = req.body.date;

  const newDrugs = new Drugs({
    name,
    amount,
    price,
    purpose,
    date,
  });

  newDrugs
    .save()
    .then(() => res.json("Drugs added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update a inventory
router.route("/update/:id").post((req, res) => {
  Drugs.findById(req.params.id)
    .then((Drugs) => {
      Drugs.name = req.body.name;
      Drugs.amount = req.body.amount;
      Drugs.price = req.body.price;
      Drugs.purpose = req.body.purpose;
      Drugs.date = req.body.date;

      Drugs.save()
        .then(() => res.json("Drugs updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete a inventory
router.route("/:id").delete((req, res) => {
  Drugs.findByIdAndDelete(req.params.id)
    .then(() => res.json("data deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Drugs.findById(req.params.id)
    .then((Drugs) => res.json(Drugs))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
