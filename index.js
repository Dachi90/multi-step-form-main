const d = document;

/* HTML reference - Aside */
const $Number1 = d.querySelector('.number1');
const $Number2 = d.querySelector('.number2');
const $Number3 = d.querySelector('.number3');
const $Number4 = d.querySelector('.number4');

/* HTML reference - Personal Info Section */
const $SectionPersonalInfo = d.querySelector('.personal-info');
const $Inputs = d.querySelectorAll('.input');
const $ErrorsP = d.querySelectorAll('.error');
const $ButtonNextInfo = d.querySelector('.button-next-info');

/*  HTML reference - Select Plan Section */
const $SectionSelectPlan = d.querySelector('.select-plan');
const $PlanOptionSection = d.querySelector('.plans-options');
const $PlansOptions = d.querySelectorAll('.plan-option');
const $DivsTextOptions = d.querySelectorAll('.text-options');
const $TextOptionsPrice = d.querySelectorAll('.text-options-price');
const $Selector = d.querySelector('.selector');
const $Circle = d.querySelector('.circle');
const $Montlhy = d.querySelector('.montlhy');
const $Yearly = d.querySelector('.yearly');
const $ButtonBackPlan = d.querySelector('.button-back-plan');
const $ButtonNextPlan = d.querySelector('.button-next-plan');

/* HTML reference - Pick add-ons Section */
const $SectionAddons = d.querySelector('.add-ons');
const $ButtonBackAddons = d.querySelector('.button-back-add-on');
const $ButtonNextAddons = d.querySelector('.button-next-add-on');

/* HMTL reference - Summary */
const $SectionSummary = d.querySelector('.summary');
const $PlanSelectedText = d.querySelector('.plan-selected-text');
const $PlanSelectedChange = d.querySelector('.plan-selected-change');
const $PlanSelectedPrice = d.querySelector('.plan-selected-price');
const $AddonsSelected = d.querySelector('.add-ons-selected');
const $AddonsText = d.querySelector('.add-on-text');
const $AddonsPrice = d.querySelector('.add-on-price');
const $TotalPriceText = d.querySelector('.total-price-text');
const $TotalPriceNumber = d.querySelector('.total-price-number');
const $ButtonBackSummary = d.querySelector('.button-back-summary');
const $ButtonNextSummary = d.querySelector('.button-next-summary');

/* Personal Info  */
const validateInputs = () => {
	const validateInputs = [];
	for (let i = 0; i < $Inputs.length; i++) {
		if ($Inputs[i].value === '') {
			$ErrorsP[i].classList.remove('invisible');
			$Inputs[i].classList.add('border-error');
			validateInputs.push(false);
		} else {
			$ErrorsP[i].classList.add('invisible');
			$Inputs[i].classList.remove('border-error');
			validateInputs.push(true);
		}
	}
	const allTrue = validateInputs.every((element) => {
		return element === true;
	});
	return allTrue;
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

const planOptionCheck = () => {
	for (let i = 0; i < $PlansOptions.length; i++) {
		if ($PlansOptions[i].classList.contains('plan-option-selected')) {
			$PlanOptionSection.classList.remove('plans-options-error');
			return true;
		} else {
			$PlanOptionSection.classList.add('plans-options-error');
		}
	}
};

const monthlyPrice = () => {
	$TextOptionsPrice[0].innerHTML = '$9/mo';
	$TextOptionsPrice[1].innerHTML = '$12/mo';
	$TextOptionsPrice[2].innerHTML = '$15/mo';
};

const yearlyPrice = () => {
	$TextOptionsPrice[0].innerHTML = '$90/mo';
	$TextOptionsPrice[1].innerHTML = '$120/mo';
	$TextOptionsPrice[2].innerHTML = '$150/mo';
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
	monthlyPrice();
	removeYearlyText();
});

$Yearly.addEventListener('click', () => {
	$Circle.classList.add('circleRight');
	$Circle.classList.remove('circleLeft');

	$Yearly.classList.add('radio-option-selected');
	$Montlhy.classList.remove('radio-option-selected');
	yearlyPrice();
	yearlyText();
});

$ButtonBackPlan.addEventListener('click', () => {
	$SectionSelectPlan.classList.add('invisible');
	$SectionPersonalInfo.classList.remove('invisible');

	$Number2.classList.remove('number-selected');
	$Number1.classList.add('number-selected');
});

$ButtonNextPlan.addEventListener('click', () => {
	if (planOptionCheck()) {
		$SectionSelectPlan.classList.add('invisible');
		$SectionAddons.classList.remove('invisible');

		$Number2.classList.remove('number-selected');
		$Number3.classList.add('number-selected');
	} else {
		console.log(planOptionCheck());
		console.log('eliga una opción');
	}
});

/* Add-on Section */

const savePlanOptionsValues = () => {
	const planOptionValues = {
		type: '',
		mode: '',
		price: '',
	};
	$PlansOptions.forEach((planOption) => {
		if (planOption.classList.contains('plan-option-selected')) {
			planOptionValues.type = planOption.querySelector('.type-plan').textContent;
			planOptionValues.price = planOption.querySelector('.text-options-price').textContent;
		}
	});
	if ($Montlhy.classList.contains('radio-option-selected')) {
		console.log('hola1');
		planOptionValues.mode = $Montlhy.textContent;
	}
	if ($Yearly.classList.contains('radio-option-selected')) {
		console.log('hola2');
		planOptionValues.mode = $Yearly.textContent;
	}
	return planOptionValues;
};

$ButtonBackAddons.addEventListener('click', () => {
	$SectionAddons.classList.add('invisible');
	$SectionSelectPlan.classList.remove('invisible');

	$Number3.classList.remove('number-selected');
	$Number2.classList.add('number-selected');
});

$ButtonNextAddons.addEventListener('click', () => {
	const planValues = savePlanOptionsValues();
	$PlanSelectedText.textContent = `${planValues.type} (${planValues.mode})`;
	$PlanSelectedPrice.textContent = `${planValues.price}`;

	$SectionAddons.classList.add('invisible');
	$SectionSummary.classList.remove('invisible');

	$Number3.classList.remove('number-selected');
	$Number4.classList.add('number-selected');
});

/* Summary Section */

$ButtonBackSummary.addEventListener('click', () => {
	$SectionSummary.classList.add('invisible');
	$SectionAddons.classList.remove('invisible');

	$Number4.classList.remove('number-selected');
	$Number3.classList.add('number-selected');
});
