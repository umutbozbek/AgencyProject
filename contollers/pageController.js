const Portfolio=require('../models/Portfolio')

exports.getIndexPage=async(req,res)=>{
    const portfolios= await Portfolio.find()
    res.render('index',{
        page_name:"index",
        portfolios
    })
    
}

exports.getAboutpage=(req,res)=>{
    res.render('about',{
        page_name:"about"
    })
    
}

exports.getServicespage=(req,res)=>{
    res.render('services',{
        page_name:"services"
    })
    
}

exports.getTeampage=(req,res)=>{
    res.render('team',{
        page_name:"team"
    })
    
}

exports.getAddPage=(req,res)=>{
    res.render('add',{
        page_name:"add"
    })
    
}

exports.getEditPage= async (req,res)=>{
    const portfolio = await Portfolio.findById({_id: req.params.id})

    res.render('edit',{
        page_name:"edit",
        portfolio
    })
    
}
