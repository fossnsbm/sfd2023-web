import mongoose, { models } from "mongoose";

const userSchema = new mongoose.Schema({
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
      /^[a-zA-Z0-9._%+-]+@students\.nsbm\.ac\.lk$/,
      "Please enter a valid university email with the '@students.nsbm.ac.lk' postfix",
    ],
    trim: true,
    lowercase: true,
  },
  contactNumber: {
    type: Number,
    required: [true, "Please enter your contact number"],
    unique: true,
    match: [/^[0-9]{10}$/, "Please enter a valid contact number"],
    trim: true,
  },

  studentId: {
    type: Number,
  },
  batch: {
    type: String,
  },
});

const UserModel = models.User || mongoose.model("User", userSchema);
export default UserModel;
