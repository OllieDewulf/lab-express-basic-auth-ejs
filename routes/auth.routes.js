const express = require('express')
const User = require('../models/User.model')
const router = express.Router()


// I wanna diyplay a sign-up form
router.get('/signup', (req, res, next) => {
    res.render('auth/signup')
  })

router.post('/signup', async (req, res, next) => {
    try {
        const newUser = await User.create({username: req.body.username, passwordHash: req.body.password})
        console.log(newUser)
        res.redirect('auth/login')
    } catch(error) {
        console.log(error)
    }
    
    
  });
  
// I wanna display a login form
router.get('/login', (req, res, next) => {
    res.render('auth/login')
  })

router.post('/login', async (req, res, next) => {
    const newUser = await User.create(req.body)
    res.redirect('auth/login')
    console.log('The form data: ', newUser);
  });
  

module.exports = router