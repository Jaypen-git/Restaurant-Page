import deleteContent from "./deleteContent";
import hero from "./hero";
import menu from "./menu";

const nav = () => {
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
            // store page names in an array
            let pages = [
                {
                    name: 'Home',
                    // write a function to call other functions
                    page: function(){
                        // clear the content div first
                        deleteContent();
                        // then fill the div with the desired content
                        hero();
                    }
                },
                {
                    name: 'Menu',
                    page: function(){
                        deleteContent();
                        menu();
                    }
                },
            ];
            let div = document.createElement('div');
            div.classList.add('sub-header');
            for(let i = 0; i < pages.length; i++){
                let a = createLink(pages[i].name);
                a.id = pages[i].name;
                a.addEventListener('click', pages[i].page);
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
        document.body.appendChild(createNav());
}

export default nav;