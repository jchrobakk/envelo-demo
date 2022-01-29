const stepZero = document.querySelector('.step-0');
const btnZero = stepZero.querySelector('.box__cta');
const stepOne = document.querySelector('.step-1');

btnZero.addEventListener('click', () => {
	stepZero.classList.remove('box--visible');
	stepOne.classList.add('box--visible');
});

const form = document.querySelector('form');
const telephone = document.querySelector('#telephone');
const code = document.querySelector('#code');

telephone.addEventListener('change', () => {
	// check if telephone is number and length is 9

	if (isNaN(telephone.value) || telephone.value.length !== 9) {
		console.log('please enter a valid telephone number');
	}
});

// form.addEventListener('change', (e) => {
// 	e.preventDefault();
// 	console.log('change');
// });
