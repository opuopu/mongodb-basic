const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const ObjectId = require("mongodb").ObjectId;

const app = express();
const port = 5000;
// appleuser
// cjZl6KcuxM4Upvmr
app.use(cors());
app.use(express.json());
// 
const uri = "mongodb+srv://appleuser:cjZl6KcuxM4Upvmr@cluster0.dgoei.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect((err)=>{
    const userCollection = client.db('appleuser').collection("info")
    console.log("hitting");
// 1--------------------------  post-----------------------
app.post('/adduser',(req,res)=>{
    const info = req.body
const result=    userCollection.insertOne(info)
    .then(()=>{
       res.json(result)
            })
        })
// 2------------------post end-----------------

// ----------------get----------------
app.get('/users', async(req,res)=>{
    const result = await userCollection.find({}).toArray();
    res.send(result)
})
// 3------------get end----------------

// 4------------------delete----------------
app.delete('/users/:id' , async(req,res)=>{
   const query = req.params.id
   const result = await userCollection.deleteOne({_id:ObjectId(query)})
   res.send(result)
  
})
// 5-----------------delete end--------------------------

// -------------------signle user-------------------
app.get('/single/:id', async (req,res)=>{
    const result = await userCollection.findOne({_id:ObjectId(req.params.id)})
    res.send(result)
})
      
     
    })


  

app.get("/",(req,res)=>{
    res.send('server is working')
})
















app.listen(port, ()=>{
    console.log("running server on port");
})