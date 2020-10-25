const router = require("express").Router();
const SQL = require("../db.js");


//Gets all users
router.get("/", function (req, res) {
    SQL.query("SELECT * FROM User", function (err, user) {
        if (err) {
            res.status(400).send(err);
        } else {
            res.end();
        }
    });
});

module.exports = router;
