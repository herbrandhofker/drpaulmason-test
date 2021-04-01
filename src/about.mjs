import { LitElement, html, css } from 'lit-element';

import paulmason from './images/paul-mason-profile-picuture-2021_2.jpg';

class About extends LitElement {


    render() {
        return html`
        <section id="about">
        <h1>MEET DR PAUL MASON</h1>
        ${this.addImg()}
        </div>
        <div>
            <p> Dr Paul Mason is a Fellowship trained Sports and Exercise Medicine Physician with degrees in Medicine,
                Physiotherapy and Occupational Health. Dr Mason is an internationally recognised authority on low
                carbohydrate diets and regularly lectures both nationally and internationally.
            </p>
            <p>
                Dr Mason is a believer of the scientific process and is happy to both challenge medical orthodoxy when
                supported by evidence. In his clinic, Dr Mason takes a holistic approach to managing complex medical
                conditions, informed by evidence rather than conventional thinking. His special clinical interests in
                metabolic and autoimmune diseases, inflammatory tendon pain and spinal pain (neck and lower back).
            </p>
            <p>
                This comprehensive approach to medicine is well suited not only to treating disease, but also optimising
                function and performance. His patients range from the general public to world class athletes, including
                household names. He has worked with AFL, NRL and A-League athletes, as well as numerous Olympians. Of
                course, Dr Mason is equally happy treating both athletes and non athletes.
            </p>
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
}
customElements.define("my-about", About);

