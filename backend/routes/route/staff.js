let express=require("express");
let router=express.Router();
let {staff}=require("../../model/staff");


router.post("/register",(req,res)=>{
    console.log("Staff registered");
})
router.post("/login",(req,res)=>{
    console.log("Staff login");
})
router.put("/updateprofile",(req,res)=>{
    console.log("staff profileUpdated");
})
router.get("/viewstudents",(req,res)=>{
    console.log("Staff viewed student");
})
router.post("/viewODs",(req,res)=>{
    console.log("staff viewed ODs");
})
router.post("/approveODs",(req,res)=>{
    console.log("Staff will approve ODs");
})



module.exports=router;