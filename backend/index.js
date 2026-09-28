let express=require("express");
let app=express();
let student_route=require("./routes/student_router");
let staff_route=require("./routes/staff_router");
let admin_route=require("./routes/admin_router");
let mongoose=require("mongoose");



mongoose.connect("mongodb://localhost:27017/club_event")
.then(()=>{
    console.log("connected to mongodb");
}).catch((err)=>{
    console.log(err);
})

// app.use(express.json);
app.use("/vig/student",student_route);
app.use("/vig/staff",staff_route);
app.use("/vig/admin",admin_route);

app.listen(3000,()=>{
    console.log("server running on port no.3000");
});
