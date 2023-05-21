const d = document;

/* HTML reference - Aside */
const $Number1 = d.querySelector('.number1');
const $Number2 = d.querySelector('.number2');
const $Number3 = d.querySelector('.number3');
const $Number4 = d.querySelector('.number4');

/* HTML reference - Personal Info Section */
const $SectionPersonalInfo = d.querySelector('.personal-info');
const $Inputs = d.querySelectorAll('.input');
const $InputsHeaders = d.querySelectorAll('.input-header');
const $ErrorsP = d.querySelectorAll('.error');
const $ButtonNextInfo = d.querySelector('.button-next-info');

/*  HTML reference - Select Plan Section */
const $SectionSelectPlan = d.querySelector('.select-plan');
const $PlansOptions = d.querySelectorAll('.plan-option');
const $DivsTextOptions = d.querySelectorAll('.text-options');
const $ButtonBackPlan = d.querySelector('.button-back-plan');
const $Selector = d.querySelector('.selector');
const $Circle = d.querySelector('.circle');
const $Montlhy = d.querySelector('.montlhy');
const $Yearly = d.querySelector('.yearly');
const $ButtonNextPlan = d.querySelector('.button-next-plan');

/* HTML reference - Pick add-ons Section */
const $SectionAddons = d.querySelector('.add-ons');

/* Personal Info  */
const validateInputs = () => {
	let validateInputs;
	for (let i = 0; i < $InputsHeaders.length; i++) {
		if ($Inputs[i].value === '') {
			$ErrorsP[i].classList.remove('invisible');
			$Inputs[i].classList.add('border-error');
			validateInputs = false;
		} else {
			$ErrorsP[i].classList.add('invisible');
			$Inputs[i].classList.remove('border-error');
			validateInputs = true;
		}
	}
	return validateInputs;
};

$ButtonNextInfo.addEventListener('click', () => {
	if (validateInputs()) {
		$SectionPersonalInfo.classList.add('invisible');
		$SectionSelectPlan.classList.remove('invisible');

		$Number1.classList.remove('number-selected');
		$Number2.classList.add('number-selected');
	}
});

/* Select plan */

const planOptionSelected = (element) => {
	$PlansOptions.forEach((div) => {
		div.classList.remove('plan-option-selected');
	});
	element.classList.add('plan-option-selected');
};

const yearlyText = () => {
	$DivsTextOptions.forEach((div) => {
		if (div.childElementCount < 3) {
			const p = document.createElement('p');
			p.classList.add('yearly-text');
			p.innerText = '2 months free';
			div.appendChild(p);
		}
	});
};

const removeYearlyText = () => {
	$DivsTextOptions.forEach((div) => {
		const childRemove = div.querySelector('.yearly-text');
		if (childRemove) {
			childRemove.remove();
		}
	});
};

$PlansOptions.forEach((element) => {
	element.addEventListener('click', () => {
		planOptionSelected(element);
	});
});

$Montlhy.addEventListener('click', () => {
	$Circle.classList.add('circleLeft');
	$Circle.classList.remove('circleRight');

	$Montlhy.classList.add('radio-option-selected');
	$Yearly.classList.remove('radio-option-selected');
	removeYearlyText();
});

$Yearly.addEventListener('click', () => {
	$Circle.classList.add('circleRight');
	$Circle.classList.remove('circleLeft');

	$Yearly.classList.add('radio-option-selected');
	$Montlhy.classList.remove('radio-option-selected');
	yearlyText();
});

$ButtonBackPlan.addEventListener('click', () => {
	$SectionSelectPlan.classList.add('invisible');
	$SectionPersonalInfo.classList.remove('invisible');

	$Number2.classList.remove('number-selected');
	$Number1.classList.add('number-selected');
});

$ButtonNextPlan.addEventListener('click', () => {
	$SectionSelectPlan.classList.add('invisible');
	$SectionAddons.classList.remove('invisible');

	$Number2.classList.remove('number-selected');
	$Number3.classList.add('number-selected');
});
