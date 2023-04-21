const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

//The button task(Add button)
function addTask() {
    if (inputBox.value === '') {
        alert("Please Write something!");
    } else {
        // The entered element should display in list container(html)
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);

        // creating cross icon X for removing the particular task from the list 
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = ""; //For clear the input field after click on add button
    saveData(); //whenever we will add task this fun will be called and save data in your browser

}

//for click function(checked unchecked and remove)
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData(); //whenever we will add task this fun will be called and save data in your browser


    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData(); //whenever we will add task this fun will be called and save data in your browser

    }
}, false);

//for display your tasks as it is when you close your browser(save data)
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}
//Display Data
function shoeTask() {
    listContainer.innerHTML = localStorage.getItem("data");

}
shoeTask();