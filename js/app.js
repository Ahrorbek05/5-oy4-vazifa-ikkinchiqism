const button1 = document.querySelector('.header__button button:nth-child(1)');
const button2 = document.querySelector('.header__button button:nth-child(2)');
const button3 = document.querySelector('.header__button button:nth-child(3)');
const kurslar = document.querySelector('.section__button__container button:nth-child(1)');
const online = document.querySelector('.section__button__container button:nth-child(2)');
const header = document.querySelector('header');
const h1 = document.querySelector('h1');
const logo = document.querySelector('.logo a');
const p = document.querySelector('p');
const thumnail = document.querySelectorAll('.cards__container p');
const thumbnail = document.querySelectorAll('.thumnail img'); 
button1.addEventListener('click', function () {
    kurslar.style.backgroundColor = 'red';
    online.style.backgroundColor = 'red';
    header.style.backgroundColor = 'red';
    h1.style.color = 'red';
    logo.style.color = 'blue'
    p.style.color = 'red'
    thumnail[0].style.color = 'red';
    thumnail[1].style.color = 'red';
    thumnail[2].style.color = 'red';
    thumbnail[0].style.src = 'https://telegra.ph/file/afc38ebb32b632681871e.jpg';
})
button2.addEventListener('click', function () {
    kurslar.style.backgroundColor = 'blue';
    online.style.backgroundColor = 'blue';
    header.style.backgroundColor = 'blue';
    h1.style.color = 'blue'
    logo.style.color = 'red'
    p.style.color = 'blue';
    thumnail[0].style.color = 'blue';
    thumnail[1].style.color = 'blue';
    thumnail[2].style.color = 'blue';
})
button3.addEventListener('click', function () {
    kurslar.style.backgroundColor = 'green';
    online.style.backgroundColor = 'green';
    header.style.backgroundColor = 'green';
    h1.style.color = 'green';
    logo.style.color = 'yellow';
    p.style.color = 'green';
    thumnail[0].style.color = 'green';
    thumnail[1].style.color = 'green';
    thumnail[2].style.color = 'green';
})
