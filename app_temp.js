var express=require("express");
var bodyParser=require("body-parser");
const path = require("path");
 

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/tours&travels');
var db=mongoose.connection;
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function(callback){
	console.log("connection succeeded");
})


var app=express()

const static_path=path.join(__dirname,"../public");
app.use(bodyParser.json());
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({
	extended: true
}));


app.get("/",function(req,res){
    res.sendFile(__dirname+ "/Aboutus.html")
    
})
app.get("/index",function(req,res){
    res.sendFile(__dirname+ "/index.html")
})
app.get("/logreact",function(req,res){
    res.sendFile(__dirname+ "/logreact.html")
})
app.get("/contact",function(req,res){
    res.sendFile(__dirname+ "/contact.html")
})
app.get("/Aboutus",function(req,res){
    res.sendFile(__dirname+ "/Aboutus.html")
})
app.get("/registration",function(req,res){
    res.sendFile(__dirname+ "/registration.html")
})
app.get("/places",function(req,res){
    res.sendFile(__dirname+ "/places.html")
})
app.get("/cities",function(req,res){
    res.sendFile(__dirname+ "/cities.html")
})
app.get("/meghhotel",function(req,res){
    res.sendFile(__dirname+ "/meghhotel.html")
})
app.get("/karnahotel",function(req,res){
    res.sendFile(__dirname+ "/karnahotel.html")
})
app.get("/jkhotel",function(req,res){
    res.sendFile(__dirname+ "/jkhotel.html")
})
app.get("/goahotel",function(req,res){
    res.sendFile(__dirname+ "/goahotel.html")
})
app.get("/uphotel",function(req,res){
    res.sendFile(__dirname+ "/uphotel.html")
})
app.get("/hphotel",function(req,res){
    res.sendFile(__dirname+ "/hphotel.html")
})
app.get("/packages",function(req,res){
    res.sendFile(__dirname+ "/packages.html")
})
app.get("/main",function(req,res){
    res.sendFile(__dirname+ "/main.html")
})
app.get("/success",function(req,res){
    res.sendFile(__dirname+ "/success.html")
})



const modelSchema1={
    fName:String,
	lName:String,
    email:String,
    phone:Number,
    password:String
}

const model1 = mongoose.model("model1",modelSchema1)
app.post("/sign_up",function(req,res){
    let newModel1=new model1({
		fName:req.body.value1,
		lName : req.body.value2,
		phone :req.body.value3,
		email :req.body.value4,
		password :req.body.value5,
    })
    newModel1.save()
    res.redirect('logreact')
})
app.post("/login", async (req, res) => {

	const email = req.body.email;
	const password = req.body.password;
	const useremail = await model1.findOne({ email: email });
	try{
        if (useremail.password === password) {
		res.redirect('main');
	    } else {
		    res.send("password are not matching");
	    }
    }

	
	catch (error) {
		res.status(400).send("invalid Email")
	}
})
app.post('/regis', function (req, res) {
    var name = req.body.value1;
    var email = req.body.value2;
    var nopp = req.body.value3;
    var noroom = req.body.value4;
    var sdate = req.body.value5;
    var edate = req.body.value6;
    var place = req.body.place;
    var hotel = req.body.hotel;
    var tour = req.body.tour;

    var data = {
        "name": name,
        "email": email,
        "no. of people": nopp,
        "no. of rooms": noroom,
        "Start Date": sdate,
        "End Date": edate,
        "place": place,
        "Hotel": hotel,
        "Tour Package": tour
    }
    db.collection('details').insertOne(data, function (err, collection) {
        if (err) throw err;
        console.log("Record inserted Successfully");
    });
    return res.redirect('success');
})

app.listen(3000,function(){
		console.log("server is running on 3000");
	})
