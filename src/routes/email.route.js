const router = require('express').Router()
const {
    verifyEmail,
    verifyPassword,
} = require('../controllers/email.controller')

// * Verify the email
router.post("/verify_email", verifyEmail);
router.post("/verify_password", verifyPassword);

module.exports = router