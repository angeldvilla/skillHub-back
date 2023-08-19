const { putStatus } = require("../controllers/putStatus")

const statusHandler = async (req, res) => {
    const { _id, habilitar } = req.body

    try {
        const newStatus = await putStatus(_id, habilitar)
        res.status(202).json(newStatus)
    } catch (error) {
        res.status(404).json({ error: error.message })
    }
}


module.exports = { statusHandler }