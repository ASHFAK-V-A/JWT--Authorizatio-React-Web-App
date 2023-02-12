import User from "../models/UserSchema.js";
import validateRegisterInput from '../validatioin/register.js'
import bcrypt from 'bcrypt'
export const LoginUser=(req,res)=>{
const data = req.body
console.log(data);
console.log("oinside");
   
}   


export const Signup= async(req,res)=>{
const { errors, isValid } = validateRegisterInput(req.body);


if(!isValid) {
    return res.status(400).json(errors);
}

User.findOne({
    email: req.body.email
}).then(user => {
    if(user) {
        return res.status(400).json({
            email: 'Email already exists'
        });
    }
})

const hashpsw = await bcrypt.hash(req.body.password,10)
const newUser= await User.create({
    name: req.body.name,          
  email: req.body.email,
password: hashpsw
});

console.log(newUser);


}