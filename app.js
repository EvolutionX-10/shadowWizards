const t1 = anime.timeline({
	easing: 'easeOutExpo',
})

t1.add({
	targets: '.n1',
	translateX: [-1000, 0]
}).add({
	targets: '.n2',
	translateX: [-1000, 0]
}, '-=400').add({
	targets: '.n3',
	translateX: [-1000, 0]
}, '-=400').add({
	targets: '.n4',
	translateX: [-1000, 0]
}, '-=400').add({
	targets: '.bt1',
	translateX: [-1000, 0]
}).add({
	targets: '.bt2',
	translateY: [+1000, 0]
}, '-=500').add({
	targets: '.bt3',
	translateY: [-1000, 0]
}, '-=500').add({
	targets: '.bt4',
	translateX: [+1000, 0]
}, '-=500')

const small_text = document.querySelector('.small-text');
const text = small_text.textContent.split('');

small_text.textContent = '';
text.forEach((letter) => {
	letter === ' ' && (letter = '&nbsp;');
	small_text.innerHTML += `<span class='letter' style='display: inline-block'>${letter}</span>`;
})

t1.add({
	targets: '.letter',
	translateY: [-1000, 0],
	delay: anime.stagger(10, {easing: 'steps'}),
}, '-=100')


const drop_down = document.querySelectorAll('.drop-down');
drop_down.forEach(dd => {
	dd.addEventListener('click', (e) => {
		/** @type {HTMLImageElement} */
		const img = e.target;
		const open = !img.style.transform;
		img.style.transform = img.style.transform ? '' : img.style.transform = 'rotate(180deg) translateY(5%)';

		if (open) {
			img.parentElement.parentElement.lastElementChild.classList.remove('hidden');
		} else {
			img.parentElement.parentElement.lastElementChild.classList.add('hidden')
		}
	})
})