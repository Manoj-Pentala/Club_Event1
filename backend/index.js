let expresss=require("express");
let app=expresss();
let student=require("./routes/route/student");
let staff=require("./routes/route/staff");
let mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/club_event")
.then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})
app.use(expresss.json)
app.use("/vig/student",student);
app.use("/vig/staff",staff);

app.listen(3000,()=>{
    console.log("server running on port no.3000");
});
