const {Schema, model} = require('mongoose')

const schema = new Schema({
  name: {
    type: String,
    required: true
  },
  color: {
    type: String
  }
}, {
  timestamps: true
})

module.exports = model('Quality', schema)