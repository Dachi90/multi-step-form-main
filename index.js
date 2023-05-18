/* 
  HTML reference
  Aside
*/
const $Number1 = document.querySelector('.number1');
const $Number2 = document.querySelector('.number2');
const $Number3 = document.querySelector('.number3');
const $Number4 = document.querySelector('.number4');

/* 
  HTML reference
  Personal Info Section
*/
const $SectionPersonalInfo = document.querySelector('.personal-info');
const $ButtonNextInfo = document.querySelector('.button-next-info');

/* 
  HTML reference
  Select Plan Section
*/
const $SectionSelectPlan = document.querySelector('.select-plan');

$ButtonNextInfo.addEventListener('click', () => {
	$SectionPersonalInfo.classList.add('invisible');
	$SectionSelectPlan.classList.remove('invisible');

	$Number1.classList.remove('number-selected');
	$Number2.classList.add('number-selected');
});
