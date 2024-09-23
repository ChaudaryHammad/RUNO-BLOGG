const mongoose = require('mongoose');
const { Schema } = mongoose;
const blogSchema = new mongoose.Schema({
    title:{ 
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    views:{
        type:Number,
        default:0
    
    },
  
    creator: {
        type: Schema.Types.ObjectId,   // Reference to the User model
        ref: 'User',
        required: true
        
    },
    
    avatar:{
        public_id: {
          type: String,
          
        },
        url: {
          type: String,
         
        },
     },

},{
    timestamps:true
})


module.exports = mongoose.model('Blog',blogSchema)