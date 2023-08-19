const getAdministrador = require("../controllers/getAdministrador");
const postAdministrador = require("../controllers/postAdmin");
const deleteAdministrador = require("../controllers/deleteAdministrador");
const putAdministrador = require("../controllers/putAdministrador");


const getAdministradorHandler = async (req, res) => {
    try {
res.status(200).json(await getAdministrador());
    } catch (error) {
res.status(400).json({error: error.message})
    }
}

const postAdministradorHandler = async (req, res) => {
    const {uid, name, surname, email, phone, admin} = req.body;
    try {
res.status(200).json(await postAdministrador(uid, name, surname, email, phone, admin))
    } catch (error) {
 res.status(400).json({error: error.message})       
    }
}

const deleteAdministradorHandler = async (req, res) => {
    const {id} = req.params;
    try {
        res.status(200).json(await deleteAdministrador(id))
    } catch (error) {
 res.status(400).json({error: error.message})       
        
    }
}

const putAdministradorHandler = async (req, res) => {
    const { uid, name, surname, email, phone, admin } = req.body;
    const {id} = req.params;
    try {
        res.status(200).json(await putAdministrador(uid, name, surname, email, phone, admin, id))
    } catch (error) {
 res.status(400).json({error: error.message})       
        
    }
}

module.exports = {
    getAdministradorHandler,
    postAdministradorHandler,
    deleteAdministradorHandler,
    putAdministradorHandler
}


