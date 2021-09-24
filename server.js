const express=require("express");
const bodyParser=require("body-parser");
const path=require("path");
const app=express();

//router object
// var router = express.Router();

// router.get('/', function (req, res) {
//  res.sendFile(path.join(__dirname, '..', '/public/index.html'));
// });

//  module.exports = router;
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));
 app.get("/",function (req,res) {
    res.sendFile(__dirname, '..', '\\public\\index.html');
 })
 app.get("/success",function(req,res){
    res.sendFile(__dirname, '..', '\\public\\success.html');
 })
 app.get("/failure",function(req,res){
    res.sendFile(__dirname, '..', '\\public\\failure.html');
 })
 app.get("/covid",function(req,res){
    res.sendFile(__dirname, '..', '\\public\\covid.html');
 })

app.post("/",function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var college=req.body.college;
    var dose=req.body.dose;
    var favour=req.body.favour;
    console.log(name);
    console.log(email);
    console.log(college);
    console.log(dose);
    console.log(favour);
    if (college===""||dose===""||favour===""||name===""||email==="") {
        res.sendFile(__dirname+"\\public\\failure.html");
    }
    else{
        res.sendFile(__dirname+"\\public\\success.html");
    }    
})

app.listen(3010,function () {
    console.log("Server running at port 3020");
})

