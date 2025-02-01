import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    diagonsedWith: {
        type: String,
        require: true
    },
    address: {
        type: String,
        require: true
    },
    age: {
        type: Number,
        require: true
    },
    bloodGroup:{
        type: String,
        require: true,
        enum:["A","B","AB+","O","O+","O-","A-","B-","AB-"]
    },
    gender:{
        type:String,
        enum: ["M","F","O"],
        require: true
    },
    addmittedIn:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        require: true
    },
    medicalRecords:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "MedicalRecord",
            require: true
        }
    ]
    
},{timestamps:true})

export const Patient = mongoose.model("Patient", patientSchema)