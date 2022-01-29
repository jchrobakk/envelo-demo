const stepZero = document.querySelector('.step-0');
const btnZero = stepZero.querySelector('.box__cta');
const stepOne = document.querySelector('.step-1');

btnZero.addEventListener('click', () => {
	stepZero.classList.remove('box--visible');
	stepOne.classList.add('box--visible');
});

const isTelephoneValid = (telephone) => {
	if (telephone.length === 9 && !isNaN(telephone)) {
		return true;
	}
	return false;
};

const isCodeValid = (code) => {
	if (code.length === 4 && !isNaN(code)) {
		return true;
	}
	return false;
};

const form = document.querySelector('form');

form.addEventListener('change', () => {
	const errorsListEl = document.querySelector('.errors');
	errorsListEl.innerHTML = '';
	const errors = [];

	const { telephone, code } = form.elements;

	if (!isTelephoneValid(telephone.value)) {
		errors.push('Please enter a valid telephone number');
	}

	if (!isCodeValid(code.value)) {
		errors.push('Please enter a valid code');
	}

	if (errors.length !== 0) {
		errors.forEach((error) => {
			const errorLi = document.createElement('li');
			errorLi.textContent = error;
			errorLi.classList.add('errors__item');
			errorsListEl.appendChild(errorLi);
		});
	} else {
		const submitBtn = document.querySelector('.box__submit');
		submitBtn.disabled = false;
	}
});

form.addEventListener('submit', (e) => {
	e.preventDefault();
});
