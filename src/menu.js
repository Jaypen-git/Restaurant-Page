const content = document.querySelector('#content');
// List of items
const items = [
    {name: 'Koro-nets', desc: 'Chocolate cornets. Koro Cafe\'s signature item', img: 'images/item-imgs/cornet.jpeg'},
    {name: 'Bubble Tea', desc: 'Milk Tea with black tapioca pearls', img: 'images/item-imgs/bubble-tea.jpg'}
]
// start with child elements then create parent elements
const menu = () => {
    // Create elements for item name, description, and image
    let createItemName = (name) => {
        let p = document.createElement('p');
        p.innerText = name;
        p.classList.add('item-name');
        return p;
    }
    let createItemDesc = (desc) => {
        let p = document.createElement('p');
        p.innerText = desc;
        p.classList.add('item-desc');
        return p;
    }
    let createItemImg = (src) => {
        let img = document.createElement('img');
        img.setAttribute('src', src);
        img.classList.add('item-img');
        return img;
    }
    // Individual menu items with name, description, and image
    let createMenuItems = (element) => {
        for (let i = 0; i < items.length; i++){
            let div = document.createElement('div');
            div.classList.add('item');
            div.appendChild(createItemImg(items[i].img));
            div.appendChild(createItemName(items[i].name));
            div.appendChild(createItemDesc(items[i].desc));
            element.appendChild(div);
        }
    }
    let createItemCont = () => {
        let div = document.createElement('div');
        div.classList.add('item-container');
        createMenuItems(div);
        content.appendChild(div);
    }
    createItemCont()
}

export default menu;