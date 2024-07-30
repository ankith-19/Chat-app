import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://ankithr012:cPIcHRTu1CYAkHdd@cluster0.vbilqtt.mongodb.net/chat-app-db').then(()=> console.log("DB Connected"));
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectDB;