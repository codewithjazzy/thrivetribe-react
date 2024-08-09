import { email, website, phone } from "../config/validation";
import mongoose from "mongoose";



// Profile Schema
const profileSchema = new mongoose.Schema({
  image: {
    type: String,
  },
  cloudinaryId: {
    type: String,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  title: {
    type: String,
  },
  bio: {
    type: String,
  },
  journey: {
    type: String,
  },
  heritage: {
    type: String,
  },
  email: {
    type: String,
    validate: {
      validator: (value) => email.isValidSync(value),
      message: "Please enter a valid email address",
    }
  },
  phone: {
    type: String,
    validate: {
      validator: (value) => phone.isValidSync(value),
      message: "Please enter a valid US phone number",
    }
  },
  website: {
    type: String,
    validate: {
      validator: (value) => website.isValidSync(value),
      message: "Please enter a valid URL",
    }
  },
  expertise: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Expertise",
  }],
  treatments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Treatment",
  }],
  languages: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Language",
  }],
  dialects: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Dialect",
  }],
  location: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Location",
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  }
});

const Profile = mongoose.model("Profile", profileSchema);

export default Profile