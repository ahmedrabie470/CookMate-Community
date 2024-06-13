import jwt from 'jsonwebtoken'
import { catchError } from './catchError.js'
import { AppError } from '../utilits/AppError.js'

const auth = catchError (async(req,res ,next )=>{
    jwt.verify(req.header('token') ,'secretKey',(err, decoded) => {
    if(err) return next(new AppError('Error verifying token' , 409))
        req.user = decoded
    next()
    })
    }
    
   ) 
export {
    auth
}