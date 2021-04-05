import './index.css'
import './home.mjs'
import './about.mjs'
import './nyi.mjs'

const tabs =document.getElementsByClassName("tab-content");
const body = document.getElementsByTagName("body")[0];

const navBar = document.getElementById("navbar");
navBar.id = "navbar"
navBar.classList.add("navbar")

//addObject(body,"home");
//addObject(body,"about");
//addObject(body,"nyi");

addItem(navBar, "home", null);
addItem(navBar, "about", null);
addItem(navBar, "appointments", ["online", "concord clinic"]);
addItem(navBar, "contact", ["clinic", "interview & lecture requests"]);
addItem(navBar, "resources", ["blog", "videos", "podcasts"]);
addItem(navBar, "spinal pain", ["parko's corner"]);
addItem(navBar, "upcoming conferences", ["link1"]);

function addItem(parent, item, subItems) {
    const itemEl = parent.appendChild(document.createElement("div"));
    itemEl.id = item;
    if (subItems) {
        itemEl.classList.add("dropdown");
        const dropBtn = itemEl.appendChild(document.createElement("div"));
        dropBtn.classList.add("dropbtn");
        dropBtn.innerText = item.toUpperCase();
        const dropDownContent = itemEl.appendChild(document.createElement("div"));
        dropDownContent.classList.add("dropdown-content");

        subItems.forEach((item) => { addItem(dropDownContent, item) })
    } else {
        itemEl.innerText = item.toUpperCase();
        itemEl.classList.add("menu-item");
    } return itemEl;
}

const menus = document.getElementsByClassName("menu-item");

for (let menu of menus) {
    menu.addEventListener("click", () => { activate(menu.id); })
}

function activate(id) {
    for (let tab of tabs) {
        tab.style.display = "none";
    }
    for (let tab of tabs) {
        if (tab.id == id) { tab.style.display = "block"; return; }
    }
    for (let tab of tabs) {
        if (tab.id == "nyi") { tab.style.display = "block"; tab.text = id; return; }
    }
}

function addObject(parent,id,label) {
    const home = parent.appendChild(document.createElement("my_"+label));
    home.id = id;
    home.classList.add("tab-content");
    tabs.push(home);
}

activate("home")
