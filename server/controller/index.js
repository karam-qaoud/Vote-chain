const router = require("express").Router();
const signup = require("../middlewares/auth/signup.js");
const login = require("../middlewares/auth/login.js");
const verfication = require("./verificationCode");
const auth = require("../middlewares/auth/auth");
const confirm = require("./confirm");
const admin = require("./admin");
const createPassword = require('../middlewares/createPassword');
const {feedbackModel} = require('./../database/index');


// const { sign } = require("jsonwebtoken");
// var jwt_decode = require("jwt-decode");
router.post("/signup", signup.signup);
router.post("/login", login.login);
router.post("/confirm", confirm.done);
router.post("/login", login.login);
router.post("/admin", admin.add);
router.get("/verfiy", verfication.verfiy);
router.post('/createPassword/:id', createPassword.createPassword);
router.post("/contact", function (req, res) {
    const feedback = new feedbackModel({
        name: req.body.name,
        email: req.body.email,
        message: req.body.message
    })
    console.log(req.body);
    feedback.save()
    .then((result) => {
        console.log("Feedback saved to database", result);
        res.send("RECIEVED");
    })
    .catch((err) => {
        console.log("ERROR in saving feedback to database", err);
        res.send("Not recieved")
    });
});

router.get("/contact", function (req, res) {
    feedbackModel.find({}).then(output => {
        console.log("Here goes your data", output)
        res.send(output)
    })
        .catch(error => {
            console.log("Not well", error)
            res.send("Something went wrong")
    })
});
// router.use((req, response, next) => {
//   req.headers.cookie = {
//     jwt:
//       "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEwMCIsImlhdCI6MTUxNjIzOTAyMn0.RnVBg7o-biy687HZSIU6aQ8EVqiObH-CS2HlrjlT9OI ",
//   };
//   var payload = {
//     id: 12,
//   };

//   sign(payload, process.env.SECRET, (err, token) => {
//     if (err) {
//       res.status(401).json("Error: server error");
//     } else {
//       console.log(">>>>>>", token, jwt_decode(token));
//       req.headers.cookie.jwt = token;
//       console.log("sssss,,,,,,,");
//       next();
//     }
//   });
//   next();
// });
// router.use(auth);
module.exports = router;
