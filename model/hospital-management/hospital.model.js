import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
    name:{
        type:String,
        require: true
    },
    address:{
        type:String,
        require: true
    },
    hospitalType:{
        type:String,
        enum:["Private","Government","Co-Operative"],
        require: true,
    },
    specializedIn:[{
        type: String,
        require: true
    },]
},{timestamps:true})

export const Hospital = mongoose.model("Hospital", hospitalSchema)