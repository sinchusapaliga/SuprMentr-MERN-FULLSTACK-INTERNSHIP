const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const roleMiddleware = require('../middleware/roleMiddleware');

// Route accessible by any logged-in user
router.get('/profile', authMiddleware, (req, res) => {
    res.json({
        message: `Welcome to your profile, ${req.user.username}!`,
        user: req.user
    });
});

// Route accessible ONLY by admins
router.get('/admin-dashboard', authMiddleware, roleMiddleware('admin'), (req, res) => {
    res.json({
        message: 'Welcome to the Admin Dashboard!',
        adminStats: {
            usersCount: 120,
            revenue: '$50,000',
            activeSessions: 34,
            newSignups: 8
        }
    });
});

module.exports = router;
