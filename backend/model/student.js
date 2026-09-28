let mongoose=require('mongoose');
let studentSchema=mongoose.Schema({
    "name":String,
    "rollno":String,
    "email":String,
    "password":String,
    "searchevents":String,
    
})

const student=mongoose.model('student',studentSchema);
module.exports={student}