let count=0;

function addTask() {
    var taskname = document.getElementById("taskname");
    var tvalue = taskname.value.trim(); 
    if(tvalue!=="") {
        var ul = document.getElementById("tasks");
        addlist(taskname,ul,);
    } else alert("Enter task Name");
    
}

function addlist(taskname,ul){
    var editbtn=document.createElement("button");
    var delbtn=document.createElement("button");
    var li = document.createElement("li");
    var checkbox = document.createElement('input');
    var task = document.createElement("label");
    task.innerHTML=taskname.value
    checkbox.type = "checkbox";
    checkbox.name = taskname.value; 
    checkbox.value = taskname.value;
    checkbox.className = 'id' + addcount();
    checkbox.id = 'id' + count;
    checkbox.onclick = function () {
            markDone(checkbox.id);
    };
   
    li.setAttribute('id', taskname.value);
    li.appendChild(checkbox);
    li.appendChild(task);
    editbtn.innerHTML="Edit";
    editbtn.className="edit "+taskname.value;
    editbtn.onclick=function () {
        editButton(this.parentNode);
    };
    delbtn.innerHTML="Delete";
    delbtn.onclick=function () {
        this.parentNode.remove();
    };
    li.appendChild(editbtn);
    li.appendChild(delbtn);
    ul.appendChild(li);
    taskname.value = "";
}

function addcount() {
    count += 1;
    return count;
}

function markDone(idd) {
    var checkBox = document.getElementById(idd);
    var ulTasks = document.getElementById("tasks");
    var ulCompleted = document.getElementById("completed");
    var liTask = document.getElementById(checkBox.name);

    if (checkBox.checked) {
        ulTasks.removeChild(liTask);
        ulCompleted.appendChild(liTask);
        liTask.children[2].disabled=true;
    } else {
        ulCompleted.removeChild(liTask);
        ulTasks.appendChild(liTask);
        liTask.children[2].disabled=false;
    }
}

function editButton(li){
    var label = li.querySelector('label');
    label.style.display = 'none';
    document.getElementById(li.id).children[2].disabled=true;
    var input = document.createElement("input");
    input.setAttribute("type", "text");
    input.setAttribute("value", li.id);
    li.appendChild(input);

    input.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            var tvalue = input.value.trim();
            if (tvalue !== "") {
                label.innerHTML = tvalue;
                label.style.display = 'inline';
                input.remove();
                document.getElementById(li.id).children[2].disabled=false;
            } else {
                alert("Enter task Name");
            }
        }
    });

    // Make sure the input field is displayed
    input.style.display = 'inline';
}

    
