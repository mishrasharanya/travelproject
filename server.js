const express=require("express")
const app= express();
const mongoose = require("mongoose")
const bodyParser=require("body-parser")


app.use(express.urlencoded({extended: true}))

mongoose.connect("mongodb+srv://sss:sss@cluster0.oyqux.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{     
    useNewUrlParser:true,
    useUnifiedTopology:true,
}).then(()=>{
    console.log("successful connection")
}).catch((err)=>console.log(err))


app.get("/",function(req,res){
    res.sendFile(__dirname+ "/homepage.html")
})

app.get("/join",function(req,res){
    res.sendFile(__dirname+ "/join.html")
})

app.get("/found_react",function(req,res){
    res.sendFile(__dirname+ "/found_react.html")
})

app.get("/awareness",function(req,res){
    res.sendFile(__dirname+ "/awareness.html")
})

app.get("/qna",function(req,res){
    res.sendFile(__dirname+ "/qna.html")
})

app.get("/lost_react",function(req,res){
    res.sendFile(__dirname+ "/lost_react.html")
})

app.get("/reviews_mongo1",function(req,res){
    res.sendFile(__dirname+ "/reviews_mongo1.html")
})

app.get("/donation_shub",function(req,res){
    res.sendFile(__dirname+ "/donation_shub.html")
})

app.get("/adoption",function(req,res){
    res.sendFile(__dirname+ "/adoption.html")
})

const modelSchema1={
    name:String,
    email:String,
    number:Number,
    address: String,
    Amount:Number,
    payment: String,
    comment:String,
    feedback: String,
    area:String,
    star:String, possibleValues: ['1','2','3','4','5'],
    animal:String,
    reason: String,
    date:Date,
}

const model1 = mongoose.model("model1",modelSchema1)



app.post("/",function(req,res){
    let newModel1=new model1({
        name:req.body.name,
        email:req.body.email,
        number:req.body.number,
        address:req.body.address,
        Amount:req.body.Amount,
        payment:req.body.payment,
        comment:req.body.comment,
        feedback:req.body.feedback,
        area:req.body.area,
        star:req.body.star,
        animal:req.body.animal,
        reason:req.body.reason,
        date:req.body.date,
    })
    newModel1.save()
    res.redirect('/')
})


app.listen(3000,function(){
    console.log("server is running on 3000");
})

