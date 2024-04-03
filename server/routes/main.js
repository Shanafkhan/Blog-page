const express = require('express');

const router = express.Router();

router.get('',(req,res) => {
    res.render('index');
});

router.get('/about',(req,res) => {
    const locals = {
        title : "About",
        description: "This is a node js blog"
    }
    res.render('About' , {locals});
});

module.exports = router;