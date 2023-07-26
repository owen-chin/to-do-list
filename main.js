const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

function handleKeyPress(event) {
    // if enter key is pressed
    if (event.keyCode === 13) {
        addNewTask()
    };
}

function addNewTask() {
    const inputValue = input.value;
    if (inputValue.trim() === "") {
        alert("Theres nothing here");
    } else {
        console.log("there is something here", inputValue);
        input.value = "";

        const newLi = document.createElement("li");
        newLi.textContent = inputValue;

        const removeButton = document.createElement("button");
        removeButton.textContent = "\u00D7";
        removeButton.className = "removeButton"
        newLi.appendChild(removeButton);

        list.appendChild(newLi);
    };
    saveData();
}

list.addEventListener("click", function(x) {
    if (x.target.tagName === "LI") {
        x.target.classList.toggle("checked");
        saveData();
    } else if (x.target.tagName === "BUTTON") {
        x.target.parentElement.remove();
        saveData();
    }
});

function saveData() {
    localStorage.setItem("data", list.innerHTML);    
}

function loadData() {
    list.innerHTML = localStorage.getItem("data");
}
loadData();