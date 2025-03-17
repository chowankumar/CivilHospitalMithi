import mongoose from 'mongoose'

const connectDB = async()=>{
    mongoose.connection.on('connected',()=> console.log('datasbse connected'));

    await mongoose.connect( `${process.env.MONGODB_URI}/civilhospitalmithi`)
}


export default connectDB;