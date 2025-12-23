const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
    destination(req, file, cb) {
        cb(null, 'uploads/');
    },
    filename(req, file, cb) {
        cb(null, `${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`);
    },
});

const upload = multer({
    storage,
    fileFilter: function (req, file, cb) {
        const filetypes = /jpg|jpeg|png|pdf/;
        const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
        const mimetype = filetypes.test(file.mimetype);

        if (extname && mimetype) {
            return cb(null, true);
        } else {
            cb('Images or PDFs only!');
        }
    },
});

// @desc    Upload prescription
// @route   POST /api/services/upload-prescription
// @access  Public (or Private)
const uploadPrescription = (req, res) => {
    res.send(`/${req.file.path}`);
};

// @desc    Book consultation
// @route   POST /api/services/book-consultation
// @access  Public
const bookConsultation = (req, res) => {
    // Mock booking logic
    const { doctorId, slot } = req.body;
    res.json({ message: 'Consultation booked successfully', bookingId: 'BOOK-' + Date.now() });
};

module.exports = {
    upload,
    uploadPrescription,
    bookConsultation,
};
