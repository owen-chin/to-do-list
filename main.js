const input = document.getElementById("input");
const add = document.getElementById("add");
const list = document.getElementById("list");

const handleKeyPress = (event) => {
    if (event.keyCode === 13) addNewTask();
};

const addNewTask = () => {
    const inputValue = input.value;
    if (inputValue.trim() === "") {
        alert("There's nothing here");
    } else {
        console.log("There is something here", inputValue);
        input.value = "";

        const newLi = document.createElement("li");
        newLi.textContent = inputValue;

        const removeButton = document.createElement("button");
        removeButton.textContent = "\u00D7";
        removeButton.className = "removeButton";
        newLi.appendChild(removeButton);

        list.appendChild(newLi);
    }
    saveData();
};

list.addEventListener("click", (x) => {
    if (x.target.tagName === "LI") {
        x.target.classList.toggle("checked");
        saveData();
    } else if (x.target.tagName === "BUTTON") {
        x.target.parentElement.remove();
        saveData();
    }
});

const saveData = () => {
    localStorage.setItem("data", list.innerHTML);    
};

const loadData = () => {
    list.innerHTML = localStorage.getItem("data");
};
loadData();