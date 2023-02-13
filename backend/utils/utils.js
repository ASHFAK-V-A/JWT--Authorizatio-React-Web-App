import jwt from 'jsonwebtoken'

const generateToken=(id)=>{
    console.log("create tokem");
return jwt.sign(({id:id}),process.env.JWT_SECRECT,{
     expiresIn:'30d'
})
}

export default generateToken