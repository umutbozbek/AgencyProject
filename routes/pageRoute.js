const express=require('express')
const pageController=require('../contollers/pageController')

const router=express.Router()

router.route('/').get(pageController.getIndexPage)
router.route('/about').get(pageController.getAboutpage)
router.route('/services').get(pageController.getServicespage)
router.route('/team').get(pageController.getTeampage)
router.route('/add').get(pageController.getAddPage)
router.route('/edit/:id').get(pageController.getEditPage)


module.exports=router