const Celebrity = require("../models/Celebrity.model");
const router = require("express").Router();

//creates the new page
router.get("/celebrities/create", (req, res) => {
  res.render("celebrities/new-celebrities");
});

router.post("/celebrities/create", (req, res) => {
  const { name, occupation, catchphrase } = req.body;
  Celebrity.create({
    name: name,
    occupation: occupation,
    catchphrase: catchphrase,
  })
    .then(() => {
      res.redirect("/celebrities");
    })
    .catch((error) => {
      console.log("error", error);
      res.render("/celebrities/new-celebrities");
    });
});

router.get("/celebrities", (req, res) => {
  Celebrity.find()
    .then((result) => {
      console.log("its working");
      res.render("celebrities/celebrities", { result });
    })
    .catch((error) => {
      console.log("oh no its an error", error);
    });
});
// res.redirect("/celebrities").catch((tryagain) => {
//   console.log("error", tryagain);
//   res.render("celebrities/new-celebrities");
// });

module.exports = router;
