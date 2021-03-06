const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/test', (req, res) => {
    res.status(200).send({success: true}); 
});

router.get('/*', (req, res) => {
    res.status(404).send();
});

module.exports = router;