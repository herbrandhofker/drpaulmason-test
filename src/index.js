import './index.css'

import bloodPressure from './images/blood-pressure.jpg';
import spine from './images/spine.jpg';
import sport from './images/sport.jpg';
import paulmason from './images/paul-mason-profile-picuture-2021_2.jpg';

const imagesDiv = document.getElementById("images");
function addImg(parent, img,title) {
    const div = document.createElement("div");
    div.classList.add("img-container")
    const titleEl = document.createElement("div");
    titleEl.classList.add("img-title")
    titleEl.innerText=title;
    const imgEl = new Image();
    imgEl.src = img;
    imgEl.classList.add("img-item")
    div.appendChild(imgEl); 
    div.appendChild(titleEl); 
    parent.appendChild(div); 
}

addImg(imagesDiv, bloodPressure,"METABOLIC MEDICINE​");
addImg(imagesDiv, spine,"SPINAL PAIN");
addImg(imagesDiv, sport,"SPORTS & PERFORMANCE");


const paul = document.getElementById("paulmason");

addImg(paul, paulmason,"SPORTS & PERFORMANCE");