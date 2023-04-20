const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container")

//The button task(Add button)
function addTask() {
    if (inputBox.value === '') {
        alert("Please Write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        // The entered element should display in list container(html)
    }
}