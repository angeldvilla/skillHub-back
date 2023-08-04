
const { Router } = require("express");
const router = Router();
<<<<<<< Updated upstream
=======
<<<<<<< HEAD


>>>>>>> Stashed changes
const Job = require ("../models/Job")
=======
const postJobs = require ("../controllers/postServices")
>>>>>>> fcecba949b9d6abbb6157ed772887ddce65993a1
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

