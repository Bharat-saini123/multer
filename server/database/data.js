const mongoose=require("mongoose");
const SchemaData=new mongoose.Schema({
    
        image:{
            type:String,
            required:true
        }
    
})

const User=new mongoose.model("User",SchemaData);
module.exports=User