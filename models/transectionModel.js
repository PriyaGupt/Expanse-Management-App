  const mongoose = require ('mongoose')

  const transectionSchema = new mongoose.Schema({
     
    userid:{
        
        type:String,
        required:true,
    },
    amount:{
        
        type:Number,
        required:[true,'amount is required']
    },
    type:{
        
        type:String,
        requird:[true,'type is required']
    },
    category:{
        
        type:String,
        reuired:[true,'category is required']
    },
    reference:{
        type:String,
    },
    description:{
        type:String,
        required:[true,'description is required']
    },
    date:{
        type:Date,
        required:[true,'date is required']
    },
  },
  { timestamps:true}
  );

  const transectionModel = mongoose.model("transections",transectionSchema);
  module.exports = transectionModel;