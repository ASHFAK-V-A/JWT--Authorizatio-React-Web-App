import User from "../models/UserSchema.js";
import validateRegisterInput from '../validatioin/register.js'
import bcrypt from 'bcrypt'
export const LoginUser=(req,res)=>{
const data = req.body
console.log(data);
console.log("oinside");
   
}   


export const Signup= async(req,res)=>{
    try{

const { errors, isValid } = validateRegisterInput(req.body);
const {name,email,password}= req.body
console.log(name,email,password);

const UserData= await User.findOne({email:email})
if(!isValid) {
    return res.status(400).json(errors);
}

if(UserData){
 return res.status(400).json({email:'Email already exists'}).console.log('userfound');;
 
}else{
    const hash = await bcrypt.hash(password, 10)
     const newUser = new User({
        name,
        email,
        password:hash
    })

     newUser.save().then(user=>{
    return res.json(user)
  })

}
    }catch(err){
        console.log(err.message);
    }

}