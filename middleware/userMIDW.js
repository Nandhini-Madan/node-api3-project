const db = require("../users/userDb")

function validateUserId() {
    return (req, res, next) => {
        db.getById(req.params.id)
            .then((user) => {
                if (user) {
                    // attach "user data the request so we could access it inmidw func"
                    req.user = user
                    next()
                } else {
                    res.status(400).json({ message: "Invalid user ID" })
                }
            })
            .catch((error) => {
                next(error)
            })
    }

}

// function validateUser(req,res,next) {

//     return (req, res, next) => {
//         if (!req.body) {
//             console.log("req.body",req.body)
//             res.status(400).json({ message: "missing user data" })
//         } else if (!req.body.name) {
//             res.status(400).json({ message: "missing required name field" })

//         } else {
//             next()
//         }
//     }
// }
function validateUser() {
    // do your magic!
    return (req, res, next) => {
      if (!req.body) {
       res.status(400).json({ message: "missing user data" });
      } else if (!req.body.name) {
         res.status(400).json({ message: "missing required name field" });
      }
      next();
    };
  }

function validatePost() {
    return (req, res, next) => {
        if (!req.body) {
            console.log("req",req.body)
            res.status(400).json({ message: "missing post data" })
            next()

        } else if (!req.body.text) {
            res.status(400).json({ message: "missing required text field" })
            next()
        }
        next()
    }
}




module.exports = {
    validateUser,
    validateUserId,
    validatePost
}