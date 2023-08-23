import mongoose, { models } from "mongoose";
import { UserRole } from "@/enums/user";

const userSchema = new mongoose.Schema({
  userRole: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    required: true,
  },
});

const UserModel = models.User || mongoose.model("User", userSchema);
export default UserModel;
