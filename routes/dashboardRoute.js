const express = require('express');
const router = express.Router();

router.route("/dashboard")
    .get((req,res) => {

        const username = req.session.user;
        const organization = req.session.organization;
        const property = req.session.property;
        const image = req.session.image;

        res.render("dashboard", {user:username, org:organization, prop:property, img:image});
    })

module.exports = router;