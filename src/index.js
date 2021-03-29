import './index.css'

import bloodPressure from './images/blood-pressure.jpg';
import spine from './images/spine.jpg';
import sport from './images/sport.jpg';

const imagesDiv = document.getElementById("images");
function addImg(parent, img) {
    const bloodPressureImg = new Image();
    bloodPressureImg.src = img;

    parent.appendChild(bloodPressureImg);
}

addImg(imagesDiv, bloodPressure);

addImg(imagesDiv, spine);
addImg(imagesDiv, sport);