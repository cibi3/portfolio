import express from "express";
import { dirname} from "path";
import {fileURLToPath} from 'url';

const _dirName = dirname(fileURLToPath(import.meta.url));
const app = express();
const port = 3000;
app.use(express.static("public"));
app.get("/",(req,res)=>{
    console.log("before html call")                               
    res.sendFile(_dirName+"/index.html");
    
})
app.listen(port,()=> console.log(`Listening on port ${port}`));