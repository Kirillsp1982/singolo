const MENU = document.getElementById('menu');
const GALARY = document.getElementById('galary');
const TAB = document.getElementById('portfolio__buttons');
const LEFTPHONE = document.getElementById('left-phone');
const RIGHTPHONE = document.getElementById('right-phone');
const SLIDER = document.getElementById('main__slider');
const LEFTARROW = document.getElementById('controls__left');
const RIGHARROW = document.getElementById('controls__right');
const QUOTEBTN = document.getElementById('quote___btn');
const POPUPBTN = document.getElementById('popup__btn');
const POPUP = document.getElementById('popup');
const POPUPSUBJECT = document.getElementById('popup__subject');
const POPUPDESCRIBE = document.getElementById('popup__description');
const DESCRIBETEXTAREA = document.getElementById('describe');	
const IMAGES = GALARY.querySelectorAll('img');

let i = 0;

MENU.addEventListener('click', (event) => {
	MENU.querySelectorAll('li a').forEach(el => el.classList.remove('menu_active'));
	event.target.classList.add('menu_active');
});

GALARY.addEventListener('click', (event) => {
	IMAGES.forEach(el => el.classList.remove('galary_active'));
	event.target.classList.add('galary_active');
});

TAB.addEventListener('click', (event) => {
	TAB.querySelectorAll('button.portfolio__button').forEach(el => el.classList.remove('button_active'));
	event.target.classList.add('button_active');
	GALARY.removeChild(IMAGES[i]);
	GALARY.appendChild(IMAGES[i]);
	i++;
	if (i > 11) i = 0;
});

LEFTPHONE.addEventListener('click', (event) => {
	const IMAGE = LEFTPHONE.querySelectorAll('img');
	IMAGE[0].classList.toggle('hidden');
	IMAGE[1].classList.toggle('hidden');
});

RIGHTPHONE.addEventListener('click', (event) => {
	const IMAGE = RIGHTPHONE.querySelectorAll('img');
	IMAGE[0].classList.toggle('hidden');
	IMAGE[1].classList.toggle('hidden');
});

LEFTARROW.addEventListener('click', (event) => {
	const IMAGE = SLIDER.querySelectorAll('.slide');
	IMAGE[0].classList.toggle('hidden');
	IMAGE[1].classList.toggle('hidden');
});

RIGHARROW.addEventListener('click', (event) => {
	const IMAGE = SLIDER.querySelectorAll('.slide');
	IMAGE[0].classList.toggle('hidden');
	IMAGE[1].classList.toggle('hidden');
});

DESCRIBETEXTAREA.addEventListener('click', (event) => {
	DESCRIBETEXTAREA.value = '';
});

QUOTEBTN.addEventListener('click', (event) => {
	event.preventDefault();
	const SUBJECT = document.getElementById('subject').value;
	const DESCRIBE = DESCRIBETEXTAREA.value;		
	POPUP.classList.remove('hidden');
	if (SUBJECT) POPUPSUBJECT.innerText = `Subject: ${SUBJECT}`;
	if (DESCRIBE && DESCRIBE !== 'Describe your project in detail...') POPUPDESCRIBE.innerText = `Description: ${DESCRIBE}`;
});

POPUPBTN.addEventListener('click', (event) => {
	event.preventDefault();
	POPUP.classList.add('hidden');
	document.getElementById('quote___form').reset();
});