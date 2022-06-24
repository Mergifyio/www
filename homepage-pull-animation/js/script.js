
// ===============================================================
// DOCUMENT READY INIT
// ===============================================================

let amItems = Array.from(document.querySelectorAll('.a-merg__item'));
let amItemsWaiting = Array.from(document.querySelectorAll('.a-merg__item.a-merg__item--waiting'));
const amWrapper = document.querySelector('.a-merg__items-list');
const amRobot = document.querySelector('.a-merg__robot');
const amRobotHead = document.querySelector('.a-merg__robot__head');
const amRobotLoading = document.querySelector('.a-merg__robot__loading');

let amWaitingItem;

window.addEventListener('load', function () {

	setTimeout(function () {
		amWaitingItem = amItems[amItems.length - amItemsWaiting.length];
		amAddItem(amWaitingItem);
	}, 300);
});


function amAddItem(el) {
	el.classList.remove('a-merg__item--waiting');

	setTimeout(function () {
		amRobot.classList.add('a-merg__robot--surprised');

		setTimeout(function () {
			amRobot.classList.remove('a-merg__robot--surprised');
			amScann();

		}, 800);

	}, 200);
};

function amScann() {

	amRobot.classList.add('a-merg__robot--scanning');
	amItems[0].classList.add('a-merg__item--scanning');

	setTimeout(function () {
		amRobot.classList.remove('a-merg__robot--scanning');
		amItems[0].classList.remove('a-merg__item--scanning');
		amValidate();

	}, 3000);

};

function amValidate() {
	amItems[0].classList.add('a-merg__item--merged');
	amWrapper.classList.add('next');

	setTimeout(function () {
		amRobot.classList.add('a-merg__robot--success');
	}, 200);

	setTimeout(function () {
		amRobot.classList.remove('a-merg__robot--success');
		amEnd(amItems[0]);
	}, 800);
};

function amEnd(el) {

	setTimeout(function () {
		el.classList.remove('a-merg__item--merged');
		el.classList.add('a-merg__item--waiting');
		amWrapper.classList.remove('next');

		var dupNode = el.cloneNode(true);
		el.remove();
		amWrapper.appendChild(dupNode);
		amItems = Array.from(document.querySelectorAll('.a-merg__item'));
		setTimeout(function () {
			amAddItem(amItems[amItems.length - amItemsWaiting.length]);
		}, 300);
	}, 1000);
};
