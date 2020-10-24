const router = require("express").Router();
const SQL = require("../db.js");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt-nodejs");
const jwt = require("jwt-simple");

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

secret = "scoobydoobydoowhereareyou?";

router.post("/store/login", function(req, res) {

    let qry = "SELECT store_email, password FROM Store WHERE store_email = ?";
    SQL.query(qry, [req.body.store_email], (err, rows) => {

        if (err) throw err;

        if (rows.length == 0){
            res.status(401).json({error: "The email or password was incorrect."});
        }
        else{
            bcrypt.compare(req.body.password, rows[0].password, (err, valid)=>{
                if (err){
                    res.status(400).json({error: err});
                }
                else if (valid){
                    //Optional personal information to return
                    //let commaPos = rows[0].full_name.indexOf(",");
                    //let firstName = rows[0].full_name.substring(commaPos+1);
                    let token = jwt.encode({store_email:rows[0].store_email}, secret);
                    res.json({token: token});
                }
            });
        }
    });
});


module.exports = router;