const getAllJobs = require("../controllers/getServices");
const deleteJobById = require("../controllers/deleteServices");
const createPost = require("../controllers/postServices")
const {createTypeJob} = require ('../controllers/postTypeJob')
const getAllType = require ('../controllers/getAllType')
const deleteTypeById = require ('../controllers/deleteTypeJob');
const putJob = require("../controllers/putJob");


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
  const { title, image, price, ability, description, address } = req.body

  const { id } = req.params

  try {
    const newPost = await createPost(title, id, image, price, ability, description, address)
   
    res.status(201).json(newPost)
   
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
};
const postTypeJob = async (req, res) => {
  
   const {category} = req.body
  const { id } = req.params

   try {
    const result = await createTypeJob(category, id)
    
    res.status(201).json(result);
  } catch(error) {
   res.status(409).json({error: error.message})
  }
}
const deleteType = async (req, res) => {
  const { id } = req.params
  try {
    const category = await deleteTypeById(id);
    category ? res.status(200).json(category) : res.status(400).json({ error: 'Category not found' })
  } catch (error) {
    res.status(400).json({ error: error.message })
  }
}
const putJobHandler = async (req, res) => {
  const { address, description, price, image, ability} = req.body;
  const {id} = req.params;
  try {
      res.status(200).json(await putJob(address, description, price, image, ability, id))
  } catch (error) {
res.status(400).json({error: error.message})       
      
  }
}

module.exports = {
  allTypes,
  postTypeJob,
  allJobsHandler,
  deleteJob,
  postJob,
  deleteType,
  putJobHandler
};
