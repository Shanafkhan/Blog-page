const express = require('express');

const router = express.Router();

router.get('',(req,res) => {
    res.render('index');
});

router.get('/about',(req,res) => {
    const locals = {
        title : "About"
    }
    res.render('index' , {locals});
});

module.exports = router;