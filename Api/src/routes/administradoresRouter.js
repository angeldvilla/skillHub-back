const Router = require("express")
const {getAdministradorHandler, postAdministradorHandler, deleteAdministradorHandler, putAdministradorHandler} = require("../handlers/administradorHandler")

adminRouter = Router();

adminRouter.get('/', getAdministradorHandler);
adminRouter.delete('/:id', deleteAdministradorHandler);
adminRouter.post('/', postAdministradorHandler);
adminRouter.put('/:id', putAdministradorHandler);



module.exports = adminRouter;