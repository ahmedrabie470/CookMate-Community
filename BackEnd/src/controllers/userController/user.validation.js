import joi  from "joi"


const registerSchema = joi.object({
    username:joi.string().min(2).max(12).required(),
    email:joi.string().email().required(),
    password:joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).required(),
    Repassword:joi.valid(joi.ref('password')).required(),
    age:joi.number().integer().min(18).max(60).required(),
  })

  const loginSchema = joi.object({
    email:joi.string().email().required(),
    password:joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).required(),
  })


  const changePasswordSchema = joi.object({
    password:joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).required(),
    rePassword:joi.valid(joi.ref('password')).required(),
    newPassword:joi.string().pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/).required(),
  })
  export {
    loginSchema , registerSchema, changePasswordSchema
  }