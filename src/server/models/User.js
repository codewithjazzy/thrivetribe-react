import mongoose from "mongoose";
import bcrypt from "bcrypt"


const userSchema = new mongoose.Schema({
  email: { type: String, unique: true },
  password: String,
  googleId: {
    type: String,
    unique: true,
    sparse: true,
  },
  needsProfileCompletion: {
    type: Boolean,
    default: true,
  },
});

// Password hash middleware.

userSchema.pre("save", function save(next) {
  const user = this;
  if (!user.isModified("password")) {
    return next();
  }
  bcrypt.genSalt(10, (err, salt) => {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, (err, hash) => {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});


// Helper method for validating user's password.
userSchema.methods.comparePassword = function comparePassword(candidatePassword) {
  return new Promise((resolve,reject) => {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
      if(err) return reject(err);
      resolve(isMatch)
    })
  });
};

const User = mongoose.model("User", userSchema);

export default User
