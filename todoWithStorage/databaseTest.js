
import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/todoDB");
const todoSchema = new mongoose.Schema({
    checked: Boolean,
    task: String
})

const todos = mongoose.model("todoList",todoSchema);
const searchJob = new todos({
    checked:false,
    task:"search for Jobs"
})
// searchJob.save();
const buyGrocery = new todos({
    checked:true,
    task:"buy grocery before evening"
})
const payEb = new todos({
    checked:false,
    task: "pay eb bill before 2nd week"
})
// await todos.insertMany([buyGrocery,payEb]);
await todos.deleteOne({task:"pay eb bill before 2nd week"});
const savedList = await todos.find({});
mongoose.connection.close();

savedList.forEach(e=>console.log(e.task));