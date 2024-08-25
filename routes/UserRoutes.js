const express = require('express');
const router = express.Router();
const User = require('../models/User.model');

router.get('/Users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

router.post('/Users', async (req, res) => {
    const user = new User({
        userID: req.body.userID,
        name: req.body.name,
        email: req.body.email,
        phonenumber: req.body.phonenumber,
        Address: req.body.Address,
        profilepicture: req.body.profilepicture,
        usertype: req.body.usertype,
        rating: req.body.rating,
        registrationdate: req.body.registrationdate
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.get('/Users/:id', getUser, (req, res) => {
    res.json(res.user);
});


async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (user == null) {
            return res.status(404).json({ message: 'User not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.user = user;
    next();
}


router.patch('/Users/:id', getUser, async (req, res) => {
    if (req.body.name != null) {
        res.user.name = req.body.name;
    }
    

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});


router.delete('/Users/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

module.exports = router;
