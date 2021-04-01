import { LitElement, html, css } from 'lit-element';
import bloodPressure from './images/blood-pressure.jpg';
import spine from './images/spine.jpg';
import sport from './images/sport.jpg';

class Home extends LitElement {

    static get styles() {
        return css`

        :root {
            --blue: #1e90ff;
            --white: #ffffff;
            --grey: lightgrey;
            --default-margin: 30px;
            --menutext-size: 0.8em;
        }
        
     
        
        h1 {
            text-align: center;
        }
        
        p {
            margin: var(--default-margin);
        }
        
        button {
            margin: var(--default-margin);
        }
        
        .dropbtn {
            color: black;
            margin: var(--default-margin);
        }
        
        .navbar {
            display: flex;
            flex-direction: row;
            justify-content: center;
            background-color: var(--white);
        }
        
        .navbar .menu-item {
            float: left;
            color: black;
            text-align: center;
            padding: 14px 16px;
            text-decoration: none;
            font-size: var(--menutext-size);
        }
        
        .dropdown {
            float: left;
            overflow: hidden;
        }
        
        .dropdown .dropbtn {
            border: none;
            outline: none;
            font-size: var(--menutext-size);
            padding: 14px 16px;
            margin: 0;
        }
        
        .navbar .menu-item:hover, .dropdown:hover .dropbtn {
            background-color: var(--grey);
        }
        
        .dropdown-content {
            opacity: 0;
            transform-origin: top center;
            position: absolute;
            background-color: var(--white);
            min-width: 160px;
            box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        }
        
        .dropdown-content .menu-item {
            float: none;
            color: black;
            padding: 12px 16px;
            text-decoration: none;
            text-align: left;
        }
        
        .dropdown:hover .dropdown-content {
            animation: animate 450ms ease-in-out forwards;
            animation-delay: 200ms;
        }
        
        @keyframes animate {
            0% {
                opacity: 0;
                transform: rotateX(-90deg)
            }
            50% {
                opacity: 0.5;
                transform: rotateX(20deg)
            }
            100% {
                opacity: 1;
                transform: rotateX(0deg)
            }
        }
        
        .buttonbox {
            display: flex;
            justify-content: center;
        }
        
        .buttonbox button {
            padding: 10px;
            color: var(--white);
            background-color: var(--blue);
            border-color: var(--white);
            font-size: 1.2em;
        }
        
        .buttonbox button:hover {
            background-color: var(--white);
            color: black;
            border-width: 0px;
        }
        
        .specialisations{
            background-color: var(--white);
        }
        
        .specialisations-title{
            color: purple;
        }
        
        
        .images {
            display: flex;
            max-width: 100%;
            justify-content: space-around;
           
        }
        
        .img-container {
            display: flex;
            flex-direction: column; 
            margin: 10px;
        }
        
        .img-title {
            align-self: center;
            margin: 10px;
            color: orange;
        }
        
        .img-item {
            max-width: 400px;
            flex-grow: 1;
        }
   `}
    render() {
        return html`
        <section>
        <h1>WHERE SCIENCE MEETS MEDICINE</h1>
        <p>One might reasonably assume that modern medicine practice would be soundly based on years of accumulated
            evidence. Unfortunately, this is not always the case. In many cases, medical practices do not reflect, and
            sometimes directly contrast with what is shown by hard science. This is particulary so in metabolic
            medicine,
            spinal pain and nutrition for athletic performance. The end result is that patients often do not recieve the
            best quality care. I always strive to ensure that my practice is solidly evidence based, especially where it
            diverges from current practices
        </p>
        <div class="buttonbox"><button>Learn more</button></div>
        <div class="specialisations">
            <h1 class="specialisations-title">SPECIAL INTERESTS</h1>
            <div id="images" class="images">
            ${this.addImg(bloodPressure, "METABOLIC MEDICINE​")}
            ${this.addImg(spine, "SPINAL PAIN")}
            ${this.addImg(sport, "SPORTS & PERFORMANCE")}
            </div>
        </div>
    </section>`;
    }

    addImg() {
        const div = document.createElement("div");
        div.classList.add("img-container")
        const imgEl = new Image();
        imgEl.src = paulmason;
        imgEl.classList.add("img-item")
        div.appendChild(imgEl);
        return div;
    }

    addImg(img, title) {
        const div = document.createElement("div");
        div.classList.add("img-container")
        const titleEl = document.createElement("div");
        titleEl.classList.add("img-title")
        titleEl.innerText = title;
        const imgEl = new Image();
        imgEl.src = img;
        imgEl.classList.add("img-item")
        div.appendChild(imgEl);
        div.appendChild(titleEl);
        return div;
    }
}

customElements.define("my-home", Home);
