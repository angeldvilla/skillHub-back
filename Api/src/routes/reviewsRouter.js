const {Router} = require ('express');
const { getReviewsHandler, postReviewHandler } = require('../handlers/reviewHandler')
const reviewsRouter = Router()


reviewsRouter.get("/", getReviewsHandler)

reviewsRouter.post("/", postReviewHandler )



module.exports = reviewsRouter