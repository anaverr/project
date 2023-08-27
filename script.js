"use strict"

const taskItems = document.querySelectorAll(".board__item") // array
const addItemButtom = document.querySelector(".board__add-item")


// for (let i = 0; i < taskItems.length; i++) {
//     taskItems[i].addEventListener("click", toggleItem(i));
// }

// function toggleItem(i) {
//     if (taskItems[i].classList.contains("item-delete")) {
//         taskItems[i].classList.remove("item-delete")
//     }
//     else {
//         taskItems[i].classList.add("item-delete")
//     }
// }

for (let item of taskItems) {
    item.addEventListener("click", function toggleItem() {
        if (item.classList.contains("item-delete")) {
            item.classList.remove("item-delete")
        }
        else {
            item.classList.add("item-delete")
        }
    });
}

addItemButtom.addEventListener("click", function addItem() {
    const newItem = document.createElement("li")
    newItem.innerText = "dasds"

    document.getElementById("board__ul").appendChild(newItem)

    newItem.addEventListener("click", () => {
        if (newItem.classList.contains("item-delete")) {
            newItem.classList.remove("item-delete")
        }
        else {
            newItem.classList.add("item-delete")
        }
    })
    
})

