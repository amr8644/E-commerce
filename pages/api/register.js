import bcrypt from "bcrypt";
import User from "../../model/userSchema";
import jwt from "jsonwebtoken";

export default function handler(req, res) {
  const {username,email,password} = req.body;


  if (!username || !email || !password) {
    res.status(400);
    throw new Error("Please add something...");
 }

   //   Check if User exists
   const userExist = await User.findOne({ email });
   if (userExist) {
      res.status(400);
      throw new Error("User already exists");
   }

  //  Hash Passowrd

  const salt  = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password,salt);

  const user = await User.create({
    name: username,
    email: email,
    password: hashedPassword,
 });

 await user.save()
 res.status(200).json({message:"Success"});

}


const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET,{
     expiresIn: "30d",
  });
};
