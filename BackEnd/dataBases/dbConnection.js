import mongoose from "mongoose";


export function dbConnection ( req ,res ){
    
    mongoose.connect('mongodb://localhost:27017/CookMate').then(()=>{
        console.log('database connection established');
    }).catch((err)=>{
        console.log('database connection error',err);
    })
}