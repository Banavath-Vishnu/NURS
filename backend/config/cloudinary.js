import { v2 as cloudinary } from "cloudinary";

const connectCloudinary = async () => {
  cloudinary.config({
    cloud_name: "dl84i0q6a",
    api_key: "592964255553443",
    api_secret: "bL2fAYCdFOwSE1NJ0LoRAhnq5oM",
  });
};

export default connectCloudinary;

// CLOUDINARY_URL=cloudinary://592964255553443:bL2fAYCdFOwSE1NJ0LoRAhnq5oM@dl84i0q6a