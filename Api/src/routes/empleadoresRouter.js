const {Router} = require ('express');
const {allJobsHandler, deleteJob, postJob,postTypeJob,allTypes, deleteType} = require ('../handlers/allHandlers');
const {searchJobHandller} = require ("../handlers/searchJobHandller")

const jobRoute = Router();

jobRoute.get("/job" , searchJobHandller)

jobRoute.get('/', allJobsHandler);

jobRoute.get('/allType', allTypes);

jobRoute.delete('/:id', deleteJob);

jobRoute.post('/allType/:id', postTypeJob);

jobRoute.delete('/allType/:id', deleteType);

jobRoute.post('/:id', postJob);



 



module.exports = jobRoute;