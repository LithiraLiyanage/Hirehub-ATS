const multer=require('multer');
const storage=multer.diskStorage({destination:(req,file,cb)=>cb(null,'src/uploads'),filename:(req,file,cb)=>cb(null,`${Date.now()}-${file.originalname.replace(/\s+/g,'-')}`)});
const fileFilter=(req,file,cb)=>file.mimetype==='application/pdf'?cb(null,true):cb(new Error('Only PDF resumes are allowed'));
module.exports=multer({storage,fileFilter,limits:{fileSize:Number(process.env.MAX_FILE_SIZE||5242880)}});
