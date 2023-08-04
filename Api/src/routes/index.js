
const { Router } = require("express");
const router = Router();
const postJobs = require ("../controllers/postServices")

router.get("/empleador");
router.post("/create", async (req, res) => {
    const {name, address, description, ability, phone, image} = req.body;
    try {
const service = await postJobs(name, address, description, ability, phone, image);
res.json({error: null, service})
    } catch (error) {
res.status(400).json({error: error.message})
    }
})

module.exports = router;

