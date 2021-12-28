const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const PORT = 5000;


app.use(bodyParser.json());
app.use(cors());

app.listen(PORT,()=>{
    console.log(`app is listening on port ${PORT}`);
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    setTimeout(()=>res.json("visited login..."),1000);
})