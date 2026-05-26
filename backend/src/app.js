require('dotenv').config();
const express=require('express'),cors=require('cors'),helmet=require('helmet'),morgan=require('morgan'),path=require('path');
const app=express();
app.use(helmet());app.use(cors({origin:process.env.CLIENT_URL||'http://localhost:5173',credentials:true}));app.use(morgan('dev'));app.use(express.json({limit:'1mb'}));app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.get('/',(req,res)=>res.json({message:'HireHub ATS API is running'}));
app.use('/api/auth',require('./routes/authRoutes'));app.use('/api/candidate',require('./routes/candidateRoutes'));app.use('/api/recruiter',require('./routes/recruiterRoutes'));app.use('/api/jobs',require('./routes/jobRoutes'));app.use('/api/admin',require('./routes/adminRoutes'));
app.use((req,res)=>res.status(404).json({message:'Route not found'}));app.use((err,req,res,next)=>{console.error(err);res.status(err.status||500).json({message:err.message||'Server error'});});
module.exports=app;
