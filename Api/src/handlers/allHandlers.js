const getAllJobs = require("../controllers/getServices");
const deleteJobById = require("../controllers/deleteServices");
const createPost = require("../controllers/postServices")
const createTypeJob = require ('../controllers/typeJob')
const getAllType = require ('../controllers/getAllType')



const allTypes = async (req, res) => {
  try {
    const allTypesJob = await getAllType();

    res.status(200).json(allTypesJob);
    
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


const allJobsHandler = async (req, res) => {
  try {
    const {_id, title} = req.query;
    const all = await getAllJobs(_id, title);
    res.status(200).json(all);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteJob = async (req, res) => {
  const { id } = req.params
  try {
    const job = await deleteJobById(id);
    job ? res.status(200).json(job) : res.status(400).json({ error: 'Job not found' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}

const postJob = async (req, res) => {
  const { title, image, phone, ability, description, address } = req.body

  const { id } = req.params

  try {
    const newPost = await createPost(title, id, image, phone, ability, description, address)
   
    res.status(201).json(newPost)
   
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};
const postTypeJob = async (req, res) => {
  console.log('entro al handler')
  
   const {title} = req.body;
   try {
    const result = await createTypeJob(title)
    if(!result){return console.log('udefined')}
    
    res.status(231).json(result);
  } catch(error) {
    console.log('estoy en el error')
   res.status(409).json({error: error.message})
  }
}

module.exports = {
  allTypes,
  postTypeJob,
  allJobsHandler,
  deleteJob,
  postJob
};
