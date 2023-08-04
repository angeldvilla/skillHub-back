const {Router} = require ('express');
const {allJobsHandler, deleteJob } = require ('../handlers/allHandlers');

const jobRoute = Router();

jobRoute.get('/', allJobsHandler);
jobRoute.delete('/:id', deleteJob);



module.exports = jobRoute;