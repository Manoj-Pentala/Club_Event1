let express=require("express");
let router=express.Router();
let {student}=require("../../model/student");


router.post("/register",(req,res)=>{
   res.send("register called")
})
router.post("/login",(req,res)=>{
    console.log("student login");
})
router.put("/updateprofile",(req,res)=>{
    console.log("student profileUpdated");
})
router.get("/searchevent",(req,res)=>{
    console.log("student searched for event");
})
router.post("/applyingevent",(req,res)=>{
    console.log("student applied for event");
})
router.post("/applyingOD",(req,res)=>{
    console.log("student applied for OD");
})

router.get("/ODstatus",(req,res)=>{
    console.log("student viewed OD status");
})
router.post("/report",(req,res)=>{
    console.log("student reported sucessfully");
})

module.exports=router;