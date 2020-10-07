const express = require('express');
const userDb = require("./userDb")
const router = express.Router();

router.post('/', (req, res) => {
  // do your magic!
});

router.post('/:id/posts', (req, res) => {
  // do your magic!


});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', validateUserId(), (req, res) => {
  // do your magic!
  res.status(200).json(req.user)
});

router.get('/:id/posts', validateUserId(), (req, res) => {
  // do your magic!
  res.status(200).json(req.user)

});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', validateUser(), validateUserId, (req, res) => {
  // do your magic!

  userDb.update(req.params.id, req.body)
    .then((user) => {
      if (user) {
        res.status(200).json(user)
      }
      else {
        res.status(404).json({
          message: "the user could not be found"
        })
      }
    })
});

//custom middleware

function validateUserId() {
  return (req, res, next) => {
    userDb.getById(req.params.id)
      .then((user) => {
        if (user) {
          console.log("hi")
          req.user = user
          next()
        }
        else {
          res.status(404).json({
            message: "User not found"
          })
        }
      })
      .catch((error) => {
        console.log("error", error)
        res.status(500).json({
          message: "Error retrieving the user"
        })
      })
    // do your magic!
  }

}

function validateUser() {
  return (req, res, next) => {
    if (!req.body.name) {
      console.log("ValidateData", req.body.name)
      return res.status(400).json({
        message: "missing required name field"
      })
    }
    next()
  }
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
