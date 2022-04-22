let content = document.querySelector('#content');
// create the child elements, then append them to the parent elements
const hero = () => {
    // The CTA (Call to Action) button is on the same level as the menu
    let createButton = () => {
        let button = document.createElement('button');
        button.innerText = 'Order Now';
        return button;
    }
    // The hero container, which houses everything we need for the hero section
    let createHero = () => {
        let div = document.createElement('div');
        div.classList.add('hero-container');
        div.appendChild(createButton());
        content.appendChild(div);
    }
    createHero();
}

export default hero;