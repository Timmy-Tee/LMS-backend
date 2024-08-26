const express = require('express')
const router = express.Router()
const fellowLogin = require('../controllers/fellow/login')
const {fellowRegister, upload} = require('../controllers/fellow/register')
const createPassword = require("../controllers/fellow/create-password")
const resetPassword = require("../controllers/fellow/reset-password")
const updatePassword = require("../controllers/fellow/update-password")
const resetToken = require("../controllers/fellow/confirmResetToken")
const {saveAssessment, getAssessment }= require("../controllers/fellow/saveAssessment")
const {
    getAssignedProjects,
    getCompletedProjects,
    getInProgressProjects,
    getAvailableProjects
} = require("../controllers/fellow/getProject")
const authenticate = require("../middleware/fellow-auth")
const notification = require('../controllers/fellow/notification')
const cors = require('cors')


//fellow
router.post('/fellow/login', cors() ,fellowLogin) 
router.post('/fellow/signup', cors() , fellowRegister) 
router.post('/fellow/create-password', cors() ,createPassword)
router.post('/fellow/reset-password', cors() ,resetPassword);
router.post('/fellow/update-password', cors() ,updatePassword);
router.post('/fellow/confirm-token', cors() ,resetToken);
router.post('/fellow/assessment', cors() ,authenticate, saveAssessment)
router.get('/fellow/assigned-project', cors() ,getAssignedProjects);
router.get('/fellow/completed-project', cors() ,getCompletedProjects);
router.get('/fellow/in-progress-project', cors() ,getInProgressProjects);
router.get('/fellow/available-project', cors() ,getAvailableProjects);
router.get('/fellow/assessment', cors() ,authenticate, getAssessment)
router.get('/fellow/notification', cors() ,notification);


module.exports = router;