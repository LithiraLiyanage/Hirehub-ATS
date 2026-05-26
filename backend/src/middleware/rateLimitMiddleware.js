const rateLimit=require('express-rate-limit');
module.exports={authLimiter:rateLimit({windowMs:15*60*1000,limit:50,message:{message:'Too many auth requests'}}),applicationLimiter:rateLimit({windowMs:15*60*1000,limit:80,message:{message:'Too many requests'}})};
