"use strict";
const slider = document.querySelector('.slider');
const sliderr = document.querySelector('.slider2');
const newsSlider = document.querySelector('.news__slider');
const leftArrow = document.querySelector('.left');
const rightArrow = document.querySelector('.right');
let sectionIndex = 0;
let sectionIndexSecond = 0;
let sectionIndexThird = 0;
document.querySelector('.header__burger').addEventListener('click', function () {
	document.querySelector('.header__nav').classList.toggle('active');
	document.querySelector('.header__burger').classList.toggle('active');
})


document.querySelectorAll('.controls li').forEach(function (indicator, index) {
	indicator.addEventListener('click', function () {
		sectionIndex = index;
		document.querySelector('.controls .selected').classList.remove('selected');
		indicator.classList.add('selected');
		sliderr.style.transform = 'translate(' + (index) * -33.33333 + '%)'
	})
})

document.querySelectorAll('.news__controls li').forEach(function (indicator, index) {
	indicator.addEventListener('click', function () {
		sectionIndexThird = index;
		document.querySelector('.news__controls .selected').classList.remove('selected');
		indicator.classList.add('selected');
		newsSlider.style.transform = 'translateY(' + (index) * -33.33333 + '%)'
		for (let elem of document.querySelector('.news__slider').childNodes) {
			elem.hidden = false;
			if (elem.clienHeight === 0) {
				elem.hidden = true;
			}
		}
	})
})
document.querySelectorAll('.feedcontrols li').forEach(function (indicatorr, indexx) {
	indicatorr.addEventListener('click', function () {
		sectionIndexSecond = indexx;
		document.querySelector('.feedcontrols .selected').classList.remove('selected');
		indicatorr.classList.add('selected');
		slider.style.transform = 'translate(' + (indexx) * -33.33333 + '%)'
	})
})

rightArrow.addEventListener('click', function () {
	sectionIndex = (sectionIndex < 2) ? sectionIndex + 1 : 2;
	slider.style.transform = 'translate(' + (sectionIndex) * -33.33333 + '%)'
})
leftArrow.addEventListener('click', function () {
	sectionIndex = (sectionIndex > 0) ? sectionIndex - 1 : 0;
	slider.style.transform = 'translate(' + (sectionIndex) * -33.33333 + '%)'
})