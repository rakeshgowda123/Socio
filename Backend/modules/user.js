
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{type:String,required:true},
    email:{type:String,required:true,unique:true},
    isRegistered: { type: Boolean, default: true } ,
    password:{type:String,required:true},
    number: { type: String, required: true }
});

const UserModel = mongoose.model('author',UserSchema);

module.exports= UserModel;