const express = require('express');
const router = express.Router();
const { upload, uploadPrescription, bookConsultation } = require('../controllers/serviceController');

router.post('/upload-prescription', upload.single('prescription'), uploadPrescription);
router.post('/book-consultation', bookConsultation);

module.exports = router;
