import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      unique: true,
      trim: true,
      lowercase: true,
      match: [/.+\@.+\..+/, "Please enter a valid email"],
      required: true,
    },
    password: {
      type: String,
      minLength: [6, "Should be greater than 6"],
    },
    role: {
      type: String,
      enum: ["customer", "admin"],
      default: "customer",
    },
    provider: { type: String, enum: ["local", "google"], default: "local" },
    providerId: { type: String, index: true, sparse: true }, // Google id
    avatar: { type: String },
    isVerified: { type: Boolean, default: false },
    tokens: { type: mongoose.Schema.Types.Mixed }, // store refresh/access tokens if needed
    meta: { type: mongoose.Schema.Types.Mixed }, // raw provider profile or other data
  },
  { timestamps: true },
);

export const User = mongoose.model("User", userSchema);
