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
	const telephoneErrorElement = document.querySelector('.errors__telephone');

	if (isNaN(telephone.value) || telephone.value.length !== 9) {
		telephoneErrorElement.classList.add('errors__item--visible');
	} else {
		telephoneErrorElement.classList.remove('errors__item--visible');
	}
});

code.addEventListener('change', () => {
	const codeErrorElement = document.querySelector('.errors__code');
	if (isNaN(code.value) || code.value.length !== 4) {
		codeErrorElement.classList.add('errors__item--visible');
	} else {
		codeErrorElement.classList.remove('errors__item--visible');
	}
});

// form.addEventListener('change', (e) => {
// 	e.preventDefault();
// 	console.log('change');
// });
