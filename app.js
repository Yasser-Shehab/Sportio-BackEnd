const express = require('express');
const connectDb  = require('./db/connect');
const app = express();
require('dotenv').config();


app.use(express.json());
const port = process.env.PORT;
const startService =  async () =>{
    try{
        await connectDb(process.env.MONGO_URL);
        app.listen(port,()=>{ 
        console.log(`Listing On ${port}`)
  })
    }catch(err){
        console.log(err.message); 
    }
}
startService();