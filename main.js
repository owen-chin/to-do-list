

const input = document.getElementById("input");
const add = document.getElementById("add");


function addNewTask() {
    const inputValue = input.value;
    if (inputValue == 0) {
        console.log("Theres nothing here");
    } else {
        console.log("there is something here");
    };
}
