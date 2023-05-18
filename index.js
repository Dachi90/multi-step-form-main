/* HTML reference - Aside */
const $Number1 = document.querySelector('.number1');
const $Number2 = document.querySelector('.number2');
const $Number3 = document.querySelector('.number3');
const $Number4 = document.querySelector('.number4');

/* HTML reference - Personal Info Section */
const $SectionPersonalInfo = document.querySelector('.personal-info');
const $ButtonNextInfo = document.querySelector('.button-next-info');

/*  HTML reference - Select Plan Section */
const $SectionSelectPlan = document.querySelector('.select-plan');
const $ButtonBackPlan = document.querySelector('.button-back-plan');
const $Selector = document.querySelector('.selector');
const $Circle = document.querySelector('.circle');
const $Montlhy = document.querySelector('.montlhy');
const $Yearly = document.querySelector('.yearly');

/* Personal Info  */
$ButtonNextInfo.addEventListener('click', () => {
	$SectionPersonalInfo.classList.add('invisible');
	$SectionSelectPlan.classList.remove('invisible');

	$Number1.classList.remove('number-selected');
	$Number2.classList.add('number-selected');
});

/* Select plan */
$ButtonBackPlan.addEventListener('click', () => {
	$SectionSelectPlan.classList.add('invisible');
	$SectionPersonalInfo.classList.remove('invisible');
});

$Montlhy.addEventListener('click', () => {
	$Circle.classList.add('circleLeft');
	$Circle.classList.remove('circleRight');

	$Montlhy.classList.add('radio-option-selected');
	$Yearly.classList.remove('radio-option-selected');
});

$Yearly.addEventListener('click', () => {
	$Circle.classList.add('circleRight');
	$Circle.classList.remove('circleLeft');

	$Yearly.classList.add('radio-option-selected');
	$Montlhy.classList.remove('radio-option-selected');
});
