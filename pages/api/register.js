import User from "../../model/userSchema";
import bcrypt from "bcryptjs";
import { connectMongo } from "../../lib/connectDB";

/**
 *
 * @param {import("next").NextApiRequest} req
 * @param {import("next").NextApiResponse} res
 */

export const handleRegister = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    await connectMongo();

    if (!username || !email || !password) {
      res.status(400);
      throw new Error("Please add something...");
    }

    //   Check if User exists
    const userExist = await User.find({ email });
    if (userExist) {
      res.status(400);
      throw new Error("User already exists");
    }

    //  Hash Passowrd
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });

    await user.save();
    res.status(200).json({ user: user, message: "Success" });

    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
