const Portfolio = require("../models/Portfolio");
const fs = require("fs");

exports.createPortfolio = async (req, res) => {
  const uploadDir = "public/uploads";

  if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
  }

  let uploadImage=req.files.image
  let uploadPath=__dirname +'/../public/uploads/'+ uploadImage.name

  uploadImage.mv(uploadPath,async()=>{
    await Portfolio.create({
        ...req.body,
        image:'/uploads/'+uploadImage.name
    })
    res.redirect('/')
  })
};

exports.updatePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ _id: req.params.id });
  portfolio.name = req.body.name;
  portfolio.category = req.body.category;
  portfolio.image = req.body.image;
  portfolio.save();

  res.redirect("/");
};

exports.deletePortfolio = async (req, res) => {
  const portfolio = await Portfolio.findOne({ _id: req.params.id });
  await Portfolio.findByIdAndRemove(req.params.id);
  res.redirect("/");
};
