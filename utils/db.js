import mongoose from 'mongoose'


const connectDB = async()=>{
    await mongoose.connect("mongodb+srv://ksr:ksr@cluster0.yzqr6.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
}

export default connectDB
