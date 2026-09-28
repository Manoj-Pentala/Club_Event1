let express=require("express");
let router=express.Router();
// let {admin}=require("../model/admin");

router.get("/viewall",(req,res)=>{
    res.send("admin view all")
})
router.post("/addevent",(req,res)=>{
    res.send("admin added events")
})
router.put("/updateevent",(req,res)=>{
    res.send("admin updated event")
})
router.delete("/deleteevent",(req,res)=>{
    res.send("admin deleted event")
})

module.exports=router;