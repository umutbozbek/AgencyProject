const mongoose=require('mongoose')
const Schema=mongoose.Schema

//Şema oluşturma

const PortfolioSchema=new Schema ({
    name:String,
    category:String,
    image:String
})

const Portfolio =mongoose.model('Portfolio',PortfolioSchema)

module.exports=Portfolio