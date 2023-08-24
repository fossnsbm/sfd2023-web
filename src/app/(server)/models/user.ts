import mongoose, { models } from "mongoose";
import { UserRole, FoodPreference } from "@/enums/user";

const role = [UserRole.User, UserRole.Admin];
const foodPreference = [FoodPreference.Veg, FoodPreference.NonVeg];

const userSchema = new mongoose.Schema({
  userRole: {
    type: String,
    enum: role,
    default: UserRole.User,
  },
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid email",
    ],
    trim: true,
    lowercase: true,
  },
  universityMail: {
    type: String,
    unique: true,
    match: [
      /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/,
      "Please enter a valid university email",
    ],
    trim: true,
    lowercase: true,
  },
  nic: {
    type: String,
    required: [true, "Please enter your NIC"],
    unique: true,
    match: [/^[0-9]{9}[vVxX]$/, "Please enter a valid NIC"],
  },
  profileImgUrl: {
    type: String,
    default: "https://robohash.org/mail@ashallendesign.co.uk",
  },
  contactNumber: {
    type: Number,
    required: [true, "Please enter your contact number"],
    unique: true,
    match: [/^[0-9]{10}$/, "Please enter a valid contact number"],
    trim: true,
  },
  whatsAppNumber: {
    type: Number,
    required: [true, "Please enter your whatsapp number"],
    unique: true,
    match: [/^[0-9]{10}$/, "Please enter a valid whatsapp number"],
    trim: true,
  },
  foodPreference: {
    type: String,
    required: [true, "Please select your food preference"],
    enum: foodPreference,
  },
  isNsbmStudent: {
    type: Boolean,
    required: [true, "Please select whether you are a NSBM student"],
    default: true,
  },
  universityName: {
    type: String,
  },
  studentId: {
    type: Number,
  },
  batch: {
    type: String,
  },
  isAttended: {
    type: Boolean,
    required: [true, "Please select whether you have attended the event"],
    default: false,
  },
});

const UserModel = models.User || mongoose.model("User", userSchema);
export default UserModel;
