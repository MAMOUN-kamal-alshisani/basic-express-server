'use strict';

const express =require('express');
const app = express();
app.use(express.json());

const notFoundHandler =require('./error-handlers/404');
const errorHandler =require('./error-handlers/500');
const loggerMeddleware =require('./middleware/logger');
const Validator= require('./middleware/validator');


app.use(errorHandler);

app.get('/person',(req,res)=>{

res.send(`hey this is from query, ${req.query.name}`)

})

app.get("/person", Validator, (req, res) => {
    const name = req.query.name;
    res.json({
      name:name
    });
  });
  

app.get('/person/:name',(req,res)=>{

    res.send(`hey this is from the params, ${req.params.name}`)
    
    })


app.post('/person',(req,res)=>{
console.log('aaaaaaaaaaaaa',req.body);
res.send(`hello just post body, ${req.body.name}`);


})


app.use(loggerMeddleware);
app.use(Validator);


module.exports={
server: app,
start: port=>{

app.listen(port, ()=>{console.log(`server is listening on port ${port}`);})


}

}

app.use('*',notFoundHandler);