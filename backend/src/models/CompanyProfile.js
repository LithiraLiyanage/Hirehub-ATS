const mongoose=require('mongoose');
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,unique:true},companyName:{type:String,required:true},logo:String,website:String,location:String,industry:String,companySize:String,description:String,contactEmail:String},{timestamps:true});
module.exports=mongoose.model('CompanyProfile',schema);
