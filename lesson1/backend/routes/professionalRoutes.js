const router = require('express').Router();

const professionalController = require('../controllers/professionalController');

// localhost:8080/professional API endpoint
router.get('/', professionalController.getData);

module.exports = router;