const mongoose = require('mongoose')

const reqString = {
  type: String,
  required: true
}

const profileSchema = new mongoose.Schema({
  
  coins: {
    type: Number,
    required: true
  },
  guildId: reqString,
  userId: reqString,
  
  
  
  
})

const name = 'profileSchema'
module.exports = mongoose.model[name] || mongoose.model(name, profileSchema, name)