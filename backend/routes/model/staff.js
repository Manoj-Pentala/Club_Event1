let mongoose=require('mongoose');
let staffSchema=mongoose.Schema({
    "name":String,
    "Id":String,
    "email":String,
    "password":String,
    "approveODs":{
        type:String,
        enum:["pending","completed","Cancelled"],
        default:"pending"
    }
    
})
const staff=mongoose.model('staff',staffSchema);
module.exports={staff}