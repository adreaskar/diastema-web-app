const express = require('express');
const router = express.Router();

router.route("/monitoring")
    .get((req,res) => {
        res.render("404");
    });

module.exports = router;