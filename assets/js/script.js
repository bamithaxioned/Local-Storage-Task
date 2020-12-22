/* Author: Amith Bhaskaran*/

// Grabbing Elements
let saveBtn = document.getElementsByClassName("save-btn")[0];
let itemName = document.getElementsByClassName("item-name")[0];
let itemCount = document.getElementsByClassName("item-count")[0];
let displayBlock = document.querySelector(".display-block");

// calling display function so that it will display even after browser is reloaded
display();


// function to display in dom
function display() {
    let itemsList = localStorage.getItem("items");
    let items ="";
    if (itemsList == null) {
        items = [];
    } else {
        items = JSON.parse(itemsList);
    }

    // Display
    let displayList = `<li class="display-list">
                            <h2 class="item-heading">Name</h2>
                            <span class="item-count">Counts</span>
                            <span class="edit-btn">Edit</span>
                            <span class="delete-btn">Delete</span>
                        </li>`;
    items.forEach((element, index) => {
        displayList += `<li class="display-list">
                        <h2 class="item-heading">${element.name}</h2>
                        <span class="item-count">${element.count}</span>
                        <a href="#FIXME" onclick="edit(this.id)" id="${element}" class="edit-btn">Edit</a>
                        <a href="#FIXME" onclick="deleteItems(this.id)" id="${index}" class="delete-btn">Delete</a>
                    </li>`
    });

    if (items.length != 0) displayBlock.innerHTML = displayList;
    else displayBlock.innerHTML = `<li>Oops..! Nothing to Display. Use Above Field to Add Items to the List</li>`
};

//FUNCTION TO EDIT LIST
function edit(index) {
    
}


// FUNCTION TO DELETE LIST
function deleteItems(index) {
    let itemsList = localStorage.getItem("items");
    let items ="";
    if (itemsList == null) {
        items = [];
    } else {
        items = JSON.parse(itemsList);
    }

    items.splice(index, 1);
    localStorage.setItem("items", JSON.stringify(items));
    display();

}

// add Event Listener on btn
saveBtn.addEventListener("click", (e) => {
    e.preventDefault();
    let itemsList = localStorage.getItem("items");
    if (itemName.value != "" && itemCount.value != "") {
        // check if local storage is empty or not
        let items ="";
        if (itemsList == null) {
            items = [];
        } else {
            items = JSON.parse(itemsList);
        }

        // object to store values entered by users
        let userInputs = {
            name: itemName.value,
            count: itemCount.value,
        }

        // push value entered by users in item arr
        items.push(userInputs);

        // updating local storage
        localStorage.setItem("items", JSON.stringify(items));

        itemName.value = "";
        itemCount.value = "";
        display();
    } else {
        console.log("Name cannot be Empty");
    }
});