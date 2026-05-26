const mongoose=require('mongoose');
const schema=new mongoose.Schema({user:{type:mongoose.Schema.Types.ObjectId,ref:'User',required:true,unique:true},phone:String,location:String,bio:String,skills:[String],education:[{institution:String,degree:String,field:String,startYear:Number,endYear:Number}],experience:[{company:String,role:String,startDate:Date,endDate:Date,currentlyWorking:Boolean,description:String}],resumeUrl:String,resumeFileName:String,linkedin:String,github:String,portfolio:String},{timestamps:true});
module.exports=mongoose.model('CandidateProfile',schema);
