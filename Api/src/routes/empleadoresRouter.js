const {Router} = require ('express');
const {allJobsHandler, deleteJob, postJob,postTypeJob,allTypes, deleteType, putJobHandler} = require ('../handlers/allHandlers');
const {searchJobHandller} = require ("../handlers/searchJobHandller")

const jobRoute = Router();

jobRoute.get("/job" , searchJobHandller)
jobRoute.get('/', allJobsHandler);
jobRoute.get('/allType', allTypes);
jobRoute.delete('/:id', deleteJob);
jobRoute.post('/allType/:id', postTypeJob);
jobRoute.delete('/allType/:id', deleteType);
jobRoute.post('/:id', postJob);
jobRoute.put('/:id', putJobHandler);




 



module.exports = jobRoute;