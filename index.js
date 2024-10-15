const buttonElement = document.querySelector('#button1');
const listElement = document.getElementById('sidebar');

buttonElement.addEventListener('click', () => {
    console.log("it's alive!!");
    if (listElement.style.display === 'none') {
        listElement.style.display = 'block'
    }
    else {
        listElement.style.display = 'none'
    }
});