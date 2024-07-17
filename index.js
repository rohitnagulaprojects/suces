const express = require("express");
const cors = require("cors");
const {MongoClient} = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/save",(req,res)=>{
    let url = "mongodb+srv://rohitkumarnagula:97JmTYUCWuTjgrmv@cluster0.bp3eku9.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
    const client = new MongoClient(url);
    const db = client.db("Student");
    const coll = db.collection("student");
    const record = {"name":req.body.name,"company":req.body.company,"package":req.body.pkg}
    console.log(record);
    coll.insertOne(record)
    .then(result=>{
        res.send(result);
    })
    .catch(err => {
        res.send(err);
    });
});


app.listen(9007,()=>{
    console.log("Server Running AT port 9007");
});
