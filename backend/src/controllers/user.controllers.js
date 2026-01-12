import { asyncHandler } from "../utils/ayncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { User } from "../models/user.models.js";
import { sendOtp } from "../utils/smsSender.js";
import jwt from "jsonwebtoken"
const generateAccessAndRefreshTokens = async (userId) => {
  try {
    const user = await User.findById(userId);
    const refreshToken = user.generateRefreshToken();
    const accessToken = user.generateAccessToken();

    user.refreshToken = refreshToken;
    await user.save({ validateBeforeSave: false });

    return { accessToken, refreshToken };
  } catch (error) {
    throw new ApiError(500, "Error generating tokens");
  }
};

const sendingSms = async (phoneNumber , otp)=>{
  try {
  return await sendOtp(phoneNumber , otp);   // no +
   
  } catch (error) {
    throw new ApiError(400 , "sending sms error :: ",error.message);
  }
}

export const registerUser = asyncHandler(async (req, res)=>{
    const { phoneNumber, address } = req.body;

  console.log("Data from request:", phoneNumber, address);
  if(!phoneNumber)
  {
    throw new ApiError(400 , "Phone number is required");
  }
  if(phoneNumber.length !== 12)
  {
    throw new ApiError(400 , "Invalid phone number");
  }
  const existedUser = await User.findOne({phoneNumber});
  if(existedUser){
    throw new ApiError(400,"User Already exists");
  }


 const otp =  Math.floor(1000 + Math.random() * 9000).toString(); 

  const result = await sendingSms(phoneNumber ,otp);
  //console.log("informaton about the sending sms" ,result)
  if(result.success===false)
  {
    throw new ApiError(400 , `failed sent sms ${result.error.Details} `)
  }

 

  const user = await User.create({
    phoneNumber:phoneNumber,
    address:address,
    otp,
    otpExpiry: new Date(Date.now() + 5 * 60 * 1000), // 5 min expiry
    isVerify: false,

  })
  const tempToken = jwt.sign(
    { userId: user._id },
    process.env.ACCESS_TOKEN_SECRET,
    { expiresIn: "5m" }
  );


  const data ={
    user,
    tempToken


  }
  
return res
    .status(201)
    .json(new ApiResponse(201,data, "User created successfully"));


})

export const verifyOtp = asyncHandler(async (req,res)=>{
  const {phoneNumber, otp}=req.body;
  if (!phoneNumber || !otp) throw new ApiError(400, "Phone number and OTP are required");

  const user = await User.findOne({ phoneNumber }).select("+otp +otpExpiry");

 if (!user) throw new ApiError(404, "User not found");
 if (user.isVerify) throw new ApiError(400, "User already verified");
if (user.otp !== otp) throw new ApiError(400, "Invalid OTP");
  if (user.otpExpiry < Date.now()) throw new ApiError(400, "OTP expired");
 user.isVerify = true;
  user.otp = undefined;
  user.otpExpiry = undefined;
  await user.save();
 return res
    .status(200)
    .json(new ApiResponse(200, {}, "OTP verified successfully"));
})


