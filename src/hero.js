let content = document.querySelector('#content');
// create the child elements, then append them to the parent elements
const hero = () => {
    // Start with creating the links
    let createLink = (page) => {
        let a = document.createElement('a');
        a.innerText = page;
        a.setAttribute('href', '#');
        a.classList.add('links');
        return a;
    }
    // Then create the link container
    let createSubheader = () => {
        let pages = ['Home', 'Menu', 'About Us'];
        let div = document.createElement('div');
        div.classList.add('sub-header');
        for(let i = 0; i < pages.length; i++){
            let a = createLink(pages[i]);
            div.appendChild(a);
        }
        return div;
    }
    // The header is one the same level as the link container
    let createNavHeader = () => {
        let h1 = document.createElement('h1');
        h1.innerText = 'Korocafe';
        return h1;
    }
    // Create the nav element that houses the links and header
    let createNav = () => {
        let nav = document.createElement('nav');
        nav.appendChild(createNavHeader());
        nav.appendChild(createSubheader());
        return nav;
    }
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
        div.appendChild(createNav());
        div.appendChild(createButton());
        content.appendChild(div);
    }
    createHero();
}

export default hero;