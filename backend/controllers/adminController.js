import validator from "validator";
import bcrypt from "bcrypt"
import {v2 as cloudinary} from 'cloudinary'
import doctorModel from './../models/doctorModel.js'
import jwt from "jsonwebtoken"
import appointmentModel from "../models/appointmentModel.js";

const addDoctor = async (req,res)=>{
    try {
        const {name,email,password,speciality,degree,experiece, about,fees,address} = req.body;
        const imageFile = req.file

        if(!name || !email || !password || !speciality || !degree || !experiece || !about || !fees || !address){
            res.json ({success:false,messag:"Missing Details"})

        }

        if(!validator.isEmail(email)){
            res.json ({success:false,messag:"Invalid email"})

        }

        if(password.length < 8){
            res.json ({success:false,messag:"please enter a strong password"})
        }

        const salt  = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt) 

        const imageUpload = await cloudinary.uploader.upload(imageFile.path,{resource_type:"image"})
        const imageUrl = imageUpload.secure_url;

        const doctorData = {
            name,
            email,
            image:imageUrl,
            password:hashedPassword,
            speciality,
            degree,
            experiece,
            about,
            fees,
            address:JSON.parse(address),
            date:Date.now()
        }

        const newDoctor = new doctorModel(doctorData);
        await newDoctor.save();

        res.json({success:true,message: 'Doctor Added'})

    } catch (error) {

        console.log(error)
        
    }
}



const loginAdmin = async(req,res)=>{

    try {
        const {email,password} = req.body
        console.log({email,password})

        if(email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD){
            const token = jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token})
        }else{
            res.json({success:false,message:"invalid cradentials"})
        }

            
    } catch (error) {
        console.log(error);
        res.json({success:false,message:error.message})
        
    }

}


//api to get the all doctors/////

const allDoctors = async(req,res)=>{
    try {
        const doctors = await doctorModel.find({}).select('-password')
        res.json({success:true,doctors})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
    }
}

//api to get all the appointments
const appointmentAdmin = async (req,res)=>{
    try {
        const appointments = await appointmentModel.find({});
        res.json({success:true,appointments})
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
        
        
    }
}

 
export  {addDoctor,loginAdmin,allDoctors,appointmentAdmin}