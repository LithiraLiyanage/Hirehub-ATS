const mongoose=require('mongoose'),bcrypt=require('bcryptjs');
const schema=new mongoose.Schema({name:{type:String,required:true,trim:true,minlength:2},email:{type:String,required:true,unique:true,lowercase:true,trim:true},password:{type:String,required:true,minlength:6},role:{type:String,enum:['candidate','recruiter','admin'],required:true},avatar:String,isActive:{type:Boolean,default:true},lastLogin:Date},{timestamps:true});
schema.pre('save',async function(next){if(!this.isModified('password'))return next();this.password=await bcrypt.hash(this.password,await bcrypt.genSalt(10));next();});
schema.methods.matchPassword=function(p){return bcrypt.compare(p,this.password)};module.exports=mongoose.model('User',schema);
