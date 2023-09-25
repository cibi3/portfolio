import express from "express";
import { dirname} from "path";
import {fileURLToPath} from 'url';

const _dirName = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;

app.get("/",(req,res)=>{
    res.sendFile(_dirName+"/htmlFileResponse.html");
})
app.listen(port,()=> console.log(`Listening on port ${port}`));