const router = require("express").Router();
let Staff = require("../models/staff.model");
const staff = require("../models/staff.model");

//get all inventories
router.route("/").get((req, res) => {
  staff
    .find()
    .then((staff) => res.json(staff))
    .catch((err) => res.status(400).json("Error: " + err));
});

//add an inventory - won't add
router.route("/add").post((req, res) => {
  const name = req.body.name;
  const telephone = req.body.telephone;
  const address = req.body.address;
  const salary = req.body.salary;
  const date = req.body.date;

  const newStaff = new Staff({
    name,
    telephone,
    address,
    salary,
    date,
  });

  newStaff
    .save()
    .then(() => res.json("Staff added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

//update a inventory
router.route("/update/:id").post((req, res) => {
  Staff.findById(req.params.id)
    .then((Staff) => {
      Staff.name = req.body.name;
      Staff.telephone = req.body.telephone;
      Staff.address = req.body.address;
      Staff.salary = req.body.salary;
      Staff.date = req.body.date;

      Staff.save()
        .then(() => res.json("Staff updated!"))
        .catch((err) => res.status(400).json("Error: " + err));
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

//delete a inventory
router.route("/:id").delete((req, res) => {
  Staff.findByIdAndDelete(req.params.id)
    .then(() => res.json("data deleted."))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Staff.findById(req.params.id)
    .then((Staff) => res.json(Staff))
    .catch((err) => res.status(400).json("Error: " + err));
});

module.exports = router;
