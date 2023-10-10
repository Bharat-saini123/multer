const mongoose=require("mongoose");

const ConnectionFunction=async()=>{
await mongoose.connect("mongodb://127.0.0.1:27017/newMulterData")
}

ConnectionFunction().then(()=>{
    console.log("server start hai bhai")
}).catch(()=>{
    console.log("tumse na ho payega beta")
});
