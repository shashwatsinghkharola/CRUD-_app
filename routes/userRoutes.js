const express = require('express')
const {home , createUser , getUsers , deleteUsers , updateUser} = require("../controllers/userControllers.js")


const router = express.Router()

router.get('/', home)
router.post('/create', createUser) 
router.get('/getusers',getUsers)
router.delete('/deleteuser/:id',deleteUsers)
router.put('/updatuser/:id' , updateUser)

module.exports = router