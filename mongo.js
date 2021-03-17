const mongoose = require('mongoose')

module.exports = async() =>{

  await mongoose.connect("mongodb+srv://Kazuo:6g47ije7@cluster0.j3osb.mongodb.net/test",{
    
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  return mongoose
}