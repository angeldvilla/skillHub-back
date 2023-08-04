const {Router} = require ('express');
const {allJobsHandler, deleteJob, postJob } = require ('../handlers/allHandlers');

const jobRoute = Router();

jobRoute.get('/', allJobsHandler);
jobRoute.delete('/:id', deleteJob);
jobRoute.post('/:id', postJob )



module.exports = jobRoute;