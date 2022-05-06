let content = document.querySelector('#content');
const switchTab = (page) => {
    content.innerHTML = '';
    content.innerHTML = `${page}`;
}

export default switchTab;