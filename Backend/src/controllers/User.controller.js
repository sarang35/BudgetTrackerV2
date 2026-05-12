import { asynchandler } from "../utils/Asynchandler.js";
import { User } from "../models/user.models.js";
import { ApiError } from "../utils/Apierror.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser = asynchandler(async (req, res) => {
  const { email, username, password } = req.body;
  if ([email, username, password].some((field) => field?.trim() === "")) {
    throw new ApiError(400, "All fields are required");
  }
  await User.findOne({
    $or: [{ email }, { username }],
  }).then((user) => {
    if (user) {
      throw new ApiError(409, "User with email or username already exists");
    }
  });
  const user = await User.create({
    email,
    username: username.toLowerCase(),
    password,
  });
  const createdUser = await User.findById(user._id).select("-password -refreshToken");  
  if(!createdUser){
    throw new ApiError(500, "Failed to create user");
  }
  return res.status(201).json(new ApiResponse(201, createdUser, "User created successfully"));
});


export { registerUser };
