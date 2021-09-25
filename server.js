const https=require('https');
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
var filename = 'public/failure.html'
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
      var failurepath = 'public/failure.html'  
      res.sendFile(__dirname + '/'+failurepath);
     
    }
    else{
       var successpath = 'public/success.html'
       res.sendFile(__dirname+'/'+successpath);
    }    
})

// app.listen(3020,function () {
//     console.log("Server running at port 3020");
// })

// start the server listening for requests
app.listen(process.env.PORT || 3000, 
	() => console.log("Server is running..."));
