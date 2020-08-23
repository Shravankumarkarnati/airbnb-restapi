const express = require("express");
const router = express.Router();
const Airbnb = require("../database/airbnb");

router.get("/", (req, res) => {
  const airbnb = new Airbnb();
  airbnb.getData((results) => {
    res.send(results);
  });
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  const airbnb = new Airbnb();
  airbnb.getById(id, (results) => {
    res.send(results);
  });
});

router.post("/admin/update", (req, res) => {
  const id = req.body.id.id;
  const name = req.body.name;
  console.log(id, name, "post id name");
  const airbnb = new Airbnb();
  airbnb.updateById(id, name, (results) => {
    res.redirect(`/${id}`);
  });
});

router.delete("/admin/delete/:id", (req, res) => {
  const id = req.params.id;
  // var redirectDefault = "/";
  // var redirect = req.flash("on-del-resource") || redirectDefault;
  const airbnb = new Airbnb();
  airbnb.deleteById(id, () => {
    // res.redirect(303, "/");
    // res.redirect(redirect);
    res.send(200);
  });
});

module.exports = router;
