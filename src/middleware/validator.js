'use strict';

module.exports = (req,res,next)=>{
const name=req.query.name;
if(name){
next();
}
else{

  next('not valid');  
}
}