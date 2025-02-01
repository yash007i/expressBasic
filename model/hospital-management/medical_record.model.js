import mongoose, { mongo } from "mongoose";

const medicalRecordSchema = new mongoose.Schema({
    name:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient",
        require: true
    },
    hospitalData: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital",
        require: true
    },
    illnessType:[
        {
            name:{
                type: String,
                require: true
            },
            dateOf: {
                type: Date,
                require: true
            }
        }
    ]
},{timestamps:true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)