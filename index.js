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
// 1--------------------------  post method     -----------------------
app.post('/adduser', async(req,res)=>{
    const info = req.body
const result=   await userCollection.insertOne(info)
   
       res.json(result)
           
        })
// 2------------------post method end-----------------

// 3----------------get method----------------
app.get('/users', async(req,res)=>{
    const result = await userCollection.find({}).toArray();
    res.send(result)
})
// 4------------get method end----------------

// 5------------------delete----------------
app.delete('/users/:id' , async(req,res)=>{
   const query = req.params.id
   const result = await userCollection.deleteOne({_id:ObjectId(query)})
   res.send(result)
  
})
// 6--------------------delete method end-------------------

// 7--------------------update database put method-----------------
app.put('/update/:id',async(req,res)=>{
    const options = { upsert: true };
    const updateuser = req.body
    console.log(req.body);
    const id= req.params.id
    const filter = {_id:ObjectId(id)}
    
    const updateDoc = {
        $set: {
         name: updateuser.name,
         email: updateuser.email
        },
      };
      const result = await userCollection.updateOne(filter,updateDoc,options)
   console.log("updating",id);
    res.send(result)
})
// 8--------------put method end-----------------


// 9-------------------signle user-------------------
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
