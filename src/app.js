import  Express  from "express";
import  cors  from "cors";
import { Db, MongoClient } from "mongodb";
import Joi from "joi";
import dotenv from "dotenv";
import bcrypt from "bcrypt";


//hiddin the urls 
dotenv.config()

// 
const app = Express()
app.use(cors())
app.use(Express.json())

// Server mongo reading and editing by api
const mongoClient = new MongoClient(process.env.DATABASE_URL);
let db ;
mongoClient.connect()
.then(() => {db = mongoClient.db();console.log("server is working")})
.catch((err) => console.log(err.message,"server offline"));
//


app.listen(5000,()=>console.log("api is working"))
