import {User} from "../models/user.models.js"
import {ApiError} from "../utils/ApiError.js"
import {asyncHandler } from "../utils/ayncHandler.js"
import jwt from "jsonwebtoken"

export const verifyJWT = asyncHandler(async (req , res,next)=>{
    try {
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer"," "); // find access token from the cookie 
        

        if(!token) //if  not find then return the error
        {
            throw new ApiError(401 , "Unauthorization request , token not found");

        }

        //decode the token and  find user
        const decodedToken = jwt.verify(token,process.env.ACCESS_TOKEN_SECRET);
        const user = await User.findById(decodedToken?._id).select("-password -refreshToken"); 
        if(!user)
        {
            throw new ApiError(401, "Invalid access token , user not found")
        }

        req.user=user; // create custom property into req called user and inject the user data now we can access the data of the user  by  req.user  if use this middleware
        next(); 
    } catch (error) {
         console.error("JWT Verification Error:", error.message);
    throw new ApiError(401, "Invalid or expired access token");
        
    }
})