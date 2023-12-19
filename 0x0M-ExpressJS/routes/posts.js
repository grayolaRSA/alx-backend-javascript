const express = require('express');
const Joi = require('joi');

const router = express.Router();

router.use(express.json());

// router.get('/', (req, res) => {
//     res.send('Hello World');
//     });

router.get('/', (req, res) => {
    res.send('We are on posts!');
});


router.post('/', (req, res) => {
    console.log('updating post...');
    });

    
router.delete('/', (req, res) => {
    console.log('deleting...');
    });

module.exports = router;