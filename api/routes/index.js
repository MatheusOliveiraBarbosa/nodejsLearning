const express = require('express');
const router = express.Router();
const fs = require('fs');


router.get('/', (req, res, next) => {
    res.status(200).json({
        message:'Handligng GET requests to /index'
    });
    
});


module.exports = router;

