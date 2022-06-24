const express=require("express")
const mongoose=require("mongoose")
const fileUpload=require("express-fileupload")
const methodOverride=require("method-override")
const pageRoute=require('./routes/pageRoute')
const portfolioRoute=require('./routes/portfolioRoute')

const ejs=require("ejs")

const app = express();

//connect mongoDB
mongoose.connect('mongodb://0.0.0.0:27017/AgencyProject',{
  
}).then(()=>{
  console.log('DB CONNECTED!');
}).catch((err)=>{
  console.log(err);
})

//Tamplate ENGINE
app.set("view engine","ejs")

//MİDDLEWARES

app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(fileUpload())
app.use(methodOverride('_method',{
    methods: ['POST','GET']
}))

//routes
app.use('/',pageRoute)
app.use('/',portfolioRoute)


const port=3000

app.listen(port,()=>{
    console.log(`Sunucu ${port} portunda başlatıldı`);
})



