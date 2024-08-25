
const express = require('express');
const Review = require('../models/Review.model');
const router = express.Router();


router.post('/', async (req, res) => {
    const { taskId, reviewerID, revieweeId, Rating, Comment } = req.body;

    try {
        const review = new Review({
            taskID,
            reviewerID: req.user.id, 
            revieweeID,
            rating,
            comment
        });

        await review.save();
        res.status(201).json(review);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


router.get('/', async (req, res) => {
    try {
        const reviews = await Review.find()
            .populate('taskID', 'title')
            .populate('reviewerID', 'name')
            .populate('revieweeID', 'name');
        res.json(reviews);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


router.get('/task/:taskID', async (req, res) => {
    try {
        const reviews = await Review.find({ taskID: req.params.taskID })
            .populate('taskID', 'title')
            .populate('reviewerID', 'name')
            .populate('revieweeID', 'name');
        if (!reviews.length) {
            return res.status(404).json({ msg: 'No reviews found for this task' });
        }
        res.json(reviews);
    } catch (err) {
        res.status(500).send('Server Error');
    }
});


router.get('/user/:userID', async (req, res) => {
    try {
        const reviewsGiven = await Review.find({ reviewerID: req.params.userID })
            .populate('taskID', 'title')
            .populate('revieweeID', 'name');

        const reviewsReceived = await Review.find({ revieweeID: req.params.userID })
            .populate('taskID', 'title')
            .populate('reviewerID', 'name');

        if (!reviewsGiven.length && !reviewsReceived.length) {
            return res.status(404).json({ msg: 'No reviews found for this user' });
        }

        res.json({ reviewsGiven, reviewsReceived });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

router.delete('/:id', async (req, res) => {
    try {
        let review = await Review.findById(req.params.id);
        if (!review) return res.status(404).json({ msg: 'Review not found' });

        if (review.reviewerID.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        await Review.findByIdAndRemove(req.params.id);
        res.json({ msg: 'Review removed' });
    } catch (err) {
        res.status(500).send('Server Error');
    }
});

module.exports = router;
