const express=require("express");
const port=5000;
require("../connection/connection.js");
const User=require("../database/data.js")
const cors=require("cors");
const path=require('path');
const corsOption={
    origin: true, 
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,get,head,put,patch,post,delete',
    credentials: true,
}
const App=express();

App.use(cors(corsOption))
App.use(express.json());
App.use(express.static("../public"))
App.get("/",(request,response)=>{
    response.send("home page")
})


const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '../public/images')
    },
    filename: function (req, file, cb) {
      const uniqueSuffix = Date.now() 
      cb(null,  file.fieldname+uniqueSuffix+path.extname(file.originalname));
    }
  })
  
  const upload = multer({ storage: storage })



App.post('/getImage', upload.single('image'), async function (req, res) {
const imageData=req.file.filename;
const user=await new User({
    image:imageData
})
await user.save()
console.log(user)

})

App.get("/myImage",async (request,response)=>{
    const findImage=await User.find({});
response.status(200).send(findImage);

})


App.listen(port,()=>{
    console.log(`server start at the port of  ${port}`)
})