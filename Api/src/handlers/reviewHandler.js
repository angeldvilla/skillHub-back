const Review = require("../models/Reviews")


const getReviewsHandler = async (req, res) => {

    const getAllReviews = await Review.find()

    try {
        res.status(200).json(getAllReviews)
    } catch (error) {
        res.status(400).json({ error: error.message })

    }

}


const postReviewHandler = async (req, res) => {

    const { score } = req.body

    try {
        const newScore = new Review({
            score
        })
        await newScore.save()

        res.status(201).json({ creado: newScore })
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


module.exports = { getReviewsHandler, postReviewHandler }