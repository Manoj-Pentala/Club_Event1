let expresss=require("express");
let app=expresss();
let mongoose=require("mongoose");
let student=require('./routes/route/student');
mongoose.connect("mongodb://localhost:27017//club_event")
.then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})
app.use(expresss.json)

app.listen(3000,()=>{
    console.log("server running on port no.5000")
})
