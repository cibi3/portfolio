
import { connect, connection } from 'mongoose';
const taskNameInput = document.querySelector("#newTask");
const addBtn = document.querySelector("#addTask");
const todoList = document.querySelector("#displayList");
addBtn.onclick = addTask;

displaySavedList();

async function displaySavedList(){
    connect("mongodb://127.0.0.1:27017/todoDB");
// const todoSchema = new mongoose.Schema({
//     checked: Boolean,
//     task: String
// })
// const todos = mongoose.model("todoList",todoSchema);
/* const searchJob = new todos({
    checked:false,
    task:"search for Jobs"
})
searchJob.save();
const buyGrocery = new todos({
    checked:true,
    task:"buy grocery before evening"
})
const payEb = new todos({
    checked:false,
    task: "pay eb bill before 2nd week"
})
await todos.insertMany([buyGrocery,payEb]);
await todos.deleteOne({task:"pay eb bill before 2nd week"});*/
const savedList = await todos.find({});
    connection.close();

savedList.forEach(e=>{
    listElementWithChkbxParaDeleteButton(e.checked,e.task);       
})
}

function listElementWithChkbxParaDeleteButton(taskStatus, taskText ){
    const liDiv = document.createElement("div");
    const listElement = document.createElement("li");
    const completionChk = document.createElement("input");
    const taskName = document.createElement("p");
    const dltBtn   = document.createElement("button");

    listElement.appendChild(completionChk);    
    listElement.appendChild(taskName);    
    listElement.appendChild(dltBtn);    
    liDiv.appendChild(listElement);
    todoList.appendChild(liDiv);
    
    taskName.textContent = taskText;
    completionChk.type = "checkbox";
    completionChk.checked = taskStatus;
    dltBtn.textContent = "Delete";
    dltBtn.onclick = deleteTask;
    liDiv.setAttribute("class","list");
    
    function deleteTask(event){
        event.target.parentNode.remove();        
    }
}

function addTask(){    
listElementWithChkbxParaDeleteButton(false,taskNameInput);    
  
}

