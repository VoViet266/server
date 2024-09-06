import mongoose from "mongoose";
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://voviet266:viet2004@cluster-main.k5kue.mongodb.net/", {
    tls: true,
    tlsAllowInvalidCertificates: true,
    
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.log("MongoDB connection failed");
  }
};
export default connectDB;
