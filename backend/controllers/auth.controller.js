import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import generateTokenAndSetCookie from "../utils/generateToken.js";

export const signup = async (req, res) => {
  try {
    const { firstName, lastName, email, password, confirmPassword, admin } =
      req.body;

    if (password !== confirmPassword) {
      return res.status(400).json({ error: "Passwords do not match" });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({ error: "Email already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      admin,
    });

    if (newUser) {
      generateTokenAndSetCookie(newUser._id, res);

      await newUser.save();

      res.status(201).json({
        _id: newUser._id,
        firstName: newUser.firstName,
        lastName: newUser.lastName,
        email: newUser.email,
        admin: newUser.admin,
        editor: newUser.editor,
      });
    } else {
      res.status(400).json({ error: "Failed to create user" });
    }
  } catch (error) {
    console.log("Error in signup controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isPasswordCorrect = await bcrypt.compare(
      password,
      user?.password || ""
    );

    if (!user || !isPasswordCorrect) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    generateTokenAndSetCookie(user._id, res);

    res.status(200).json({
      _id: user._id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      admin: user.admin,
      editor: user.editor,
    });
  } catch (error) {
    console.log("Error in login controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const logout = (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAuth = async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const updateUserRoleHandler = async (req, res) => {
  const { userId } = req.params;
  const { role, value } = req.body;

  const validRoles = ["admin", "editor", "viewer"];
  if (!validRoles.includes(role)) {
    return res.status(400).json({ error: "Invalid role type" });
  }
  if (typeof value !== "boolean") {
    return res.status(400).json({ error: "Value must be a boolean" });
  }

  try {
    const update = { [role]: value };
    const updatedUser = await User.findByIdAndUpdate(userId, update, {
      new: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    return res
      .status(200)
      .json({ message: "Role updated successfully", user: updatedUser });
  } catch (error) {
    console.error("Error updating user role:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
