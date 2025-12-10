const mongoose = require("mongoose");
const detailSchema = new mongoose.Schema({
    name: String,
    admissionNumber: Number,
    grade: String,
    studentClass: String,
    dob: Number,
    gender:String,
    religion:String,
    admissionDate: Number,
    fatherName: String,
    fatherOccupation: String,
    motherName: String
})
module.exports = mongoose.model("Detail", detailchema);