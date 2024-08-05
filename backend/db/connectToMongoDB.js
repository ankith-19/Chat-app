import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_DB_URI).then(()=> console.log("DB Connected"));
    } catch (error) {
        console.log("Error connecting to MongoDB",error.message);
    }
}

export default connectDB;