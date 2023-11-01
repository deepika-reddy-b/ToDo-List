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
        //console.log(task);
        //task.hidden=true;
        editButton(this.parentNode);
    };
    li.appendChild(editbtn);
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
    } else {
        ulCompleted.removeChild(liTask);
        ulTasks.appendChild(liTask);
    }
}

function editButton(li){
    //console.log(taskname);
    var label = li.querySelector('label');
    label.style.display = 'none';
    console.log(document.getElementById(li.id).children[2]);
    document.getElementById(li.id).children[2].style.disable=true;
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
            } else {
                alert("Enter task Name");
            }
        }
    });

    // Make sure the input field is displayed
    input.style.display = 'inline';
}
//     var input="";
//     var li = document.getElementById(taskname);
//     //li.children[0].hidden = true; // checkbox
//     li.children[1].hidden = true; // edit button
//     var inp=document.createElement("input");
//     inp.setAttribute("type", "text");
//     inp.setAttribute("value", taskname);
//     li.appendChild(inp);
//     inp.addEventListener("keypress", function(event) {         // If the user presses the "Enter" key on the keyboard
//         if (event.key === "Enter") {           // Cancel the default action, if needed
//           event.preventDefault();
//           var tvalue = inp.value.trim(); 
//             if(tvalue!=="") {
                
//                 input=inp.value;
//                 console.log(input);
//             } else alert("Enter task Name");            // Trigger the button element with a click
//                 //document.getElementById("myBtn").click();
//         } }
//     )
//     if (input!=="") return input;
    
// }
