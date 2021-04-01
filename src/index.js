import './index.css'
import './home.mjs'
import './about.mjs'
import './nyi.mjs'

const menus = document.getElementsByClassName("menu-item"); 

for (let menu of menus) {    
    menu.addEventListener("click",()=>{  activate(menu.id);})
}

const tabs = document.getElementsByClassName("tab-content"); 

function activate(id){
    for (let tab of tabs) {    
        tab.style.display = "none";    
    }
    for (let tab of tabs) {    
        if (tab.id==id) { tab.style.display = "block"; return; }  
    }
    for (let tab of tabs) {    
        if (tab.id=="nyi") { tab.style.display = "block"; return; }  
    }
}

activate("home")
