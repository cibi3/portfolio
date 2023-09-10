
const taskNameInput = document.querySelector("#newTask");
const addBtn = document.querySelector("#addTask");
addBtn.onclick = addTask;


function addTask(){
    const todoList = document.querySelector("#displayList");
    const liDiv = document.createElement("div");
    const listElement = document.createElement("li");
    const completionChk = document.createElement("input");
    // const taskName = document.createTextNode(taskNameInput.value);
    const taskName = document.createElement("p");
    const dltBtn   = document.createElement("button");

    listElement.appendChild(completionChk);    
    listElement.appendChild(taskName);    
    listElement.appendChild(dltBtn);    
    liDiv.appendChild(listElement);
    todoList.appendChild(liDiv);
    
    taskName.textContent = taskNameInput.value;
    completionChk.type = "checkbox";
    completionChk.checked = false;
    dltBtn.textContent = "Delete";
    dltBtn.onclick = deleteTask;
    liDiv.setAttribute("class","list");
    
    function deleteTask(event){
        event.target.parentNode.remove();        
    }
}

