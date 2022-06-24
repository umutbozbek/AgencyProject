const express=require('express')
const portfolioController=require('../contollers/portfolioController')


const router=express.Router()

router.route('/add').post(portfolioController.createPortfolio)
router.route('/edit/:id').put(portfolioController.updatePortfolio)
router.route('/edit/:id').delete(portfolioController.deletePortfolio)



module.exports=router