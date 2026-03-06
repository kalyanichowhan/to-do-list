const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

function addTask(){
    if(inputBox.value === ''){
      alert("You must write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
       
        //Edit icon
        let edit = document.createElement("img");
          edit.src = "edit.png";
          edit.className = "edit";
          li.appendChild(edit);

          //Delete icon
          let del = document.createElement("img");
          del.src = "dustbin.png";
          del.className = "delete";
          li.appendChild(del);
    
    }
    inputBox.value = "";
     saveData();
}
listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
         saveData();
    }
    else if(e.target.classList.contains("delete")){
        e.target.parentElement.remove();
         saveData();
    }
    else if(e.target.classList.contains("edit")){
        let li = e.target.parentElement;
        let newText = prompt("Edit your task:", li.firstChild.textContent);
        if(newText !== null && newText !==""){
            li.firstChild.textContent = newText;
            saveData();
        }
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}
function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
 showTask();
