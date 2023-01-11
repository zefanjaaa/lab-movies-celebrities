const Celebrity = require("../models/Celebrity.model");
const MovieModel = require("../models/Movie.model");
const Movies = require("../models/Movie.model");
const router = require("express").Router();

router.get("/movies", (req, res) => {
  Movies.find().then((allCelebrities) => {
    console.log(allCelebrities);
    res.render("movies/movies", { allCelebrities });
  });
});

router.get("/movies/create", (req, res) => {
  Celebrity.find().then((allCelebrities) => {
    console.log("its working!", allCelebrities);
    res.render("movies/new-movies", { allCelebrities });
  });
});

router.post("/movies/create", (req, res) => {
  const { title, genre, plot, cast_id } = req.body;
  console.log(req.body);
  Movies.create({
    title: title,
    genre: genre,
    plot: plot,
    cast_id: cast_id,
  })
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log("error", error);
      res.render("movies/new-movies");
    });
});

router.get("/movies/:id", (req, res) => {
  Movies.findById(req.params.id)
    .populate("cast_id")
    .then((movie) => {
      console.log(movie);
      res.render("movies/movie-details", movie);
    })
    .catch((error) => {
      console.log("BIG ERROR", error);
    });
});

router.post("/movies/:id/delete", (req, res) => {
  Movies.findByIdAndDelete(req.params.id)
    .then(() => {
      res.redirect("/movies");
    })
    .catch((error) => {
      console.log("EVEN BIGGER ERROR", error);
    });
});

router.get("/movies/:id/edit", (req, res) => {
  Movies.findById(req.params.id);
  Celebrity.find()
    // .populate("cast_id")
    .then((somewords) => {
      console.log("some words", somewords);
      res.render("movies/edit-movie", somewords);
    })
    .catch((error) => {
      console.log("biiig error", error);
    });
});

router.post("/movies/:id/edit", (req, res) => {
  const { title, genre, plot, cast_id } = req.body;
  Movies.findByIdAndUpdate(req.params.id, {
    title: title,
    genre: genre,
    plot: plot,
    cast_id: cast_id,
  })

    .then((result) => {
      console.log("Movie edited", result);
      res.redirect("/movies/movie-details");
    })
    .catch((error) => {
      console.log("error edit failed", error);
    });
});

// router.get("/movies", (req, res) => {
//   Movies.find()
//     .then((allCelebrities) => {
//       console.log("its working");
//       res.render("movies/movies", { allCelebrities });
//     })
//     .catch((error) => {
//       console.log("oh no its an error", error);
//     });
// });

module.exports = router;
