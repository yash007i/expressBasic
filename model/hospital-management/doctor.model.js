import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    salary:{
        type: String,
        require: true
    },
    qualification: {
        type: String,
        require: true
    },
    exeperienceInYear:{
        type: Number,
        default: 0
    },
    worksInHospitals:[{
        type: mongoose.Schema.Types.Schema,
        ref: "Hospital"
    },]
},{timestamps:true})

export const Doctor = mongoose.model("Doctor", doctorSchema)