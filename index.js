const buttonElement = document.querySelector('#button1');
const listElement = document.querySelector('.sidebar');

buttonElement.addEventListener('click', () => {
    console.log("it's alive!!");
    listElement.classList.toggle('show');
});

