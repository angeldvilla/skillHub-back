
const { Router } = require("express");
const router = Router();


const Job = require ("../models/Job")
router.get("/empleador");
router.post("/create-service", async (req, res) => {
    const {name, address, description, ability, phone, image} = req.body;
    try {
const service = await postJobs(name, address, description, ability, phone, image);
res.json({error: null, service})
    } catch (error) {
res.status(400).json({error: error.message})
    }
})

module.exports = router;

