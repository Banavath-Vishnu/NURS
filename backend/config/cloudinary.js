import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: "YOUR_CLOUD_NAME",
    api_key: "YOUR_API_KEY",
    api_secret: "YOUR_API_SECRET",
  });
};

export default connectCloudinary;

// CLOUDINARY_URL=cloudinary://592964255553443:bL2fAYCdFOwSE1NJ0LoRAhnq5oM@dl84i0q6a
