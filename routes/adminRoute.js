const express = require('express')
const router = express.Router()
const adminRegister = require("../controllers/admin/register")
const adminLogin = require("../controllers/admin/login")
const adminPassword = require("../controllers/admin/admin-password")
const { getProject,  updateProject, createProject} = require("../controllers/admin/newProject")
const cors = require('cors')

//admin
router.post('/admin/login', cors() ,adminLogin) 
router.post('/admin/signup', cors() , adminRegister) 
router.post('/admin/create-password', cors() ,adminPassword)
/* New Project*/ 
router.post('/admin/new-project/create', cors() ,createProject)
router.get('/admin/new-project/getproject', cors() ,getProject)
router.put('/admin/new-project/edit/:id', cors() ,updateProject)

module.exports = router;

