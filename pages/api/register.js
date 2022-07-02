import bcrypt from "bcrypt";
import Users from "../../model/userSchema";

export default function handler(req, res) {
  const body = req.body;
  const user  = await Users.findOne({email:body.email});
  if (user) {
    res.status(200).json({ message: 'Already registered' }) 
  }

  const users = new Users(body);

  const salt  =await bcrypt.genSalt(10)

  users.password = await bcrypt.hash(user.password,salt);

  await users.save()

  res.status(200).json({ message: 'Register successfully'}) 
}
