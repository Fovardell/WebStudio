export function mobileMenu() {
	const mobileMenuSelectors = {
		mobileMenu: document.querySelector('.js-menu-container'),
		openMenuBtn: document.querySelector('.js-open-menu'),
		closeMenuBtn: document.querySelector('.js-close-menu'),
		mobileMenCon: document.querySelector(".mobile-contacts-js"),
	};
	const { mobileMenu, openMenuBtn, closeMenuBtn, mobileMenCon } = mobileMenuSelectors;

	const toggleMenu = () => {
		const isMenuOpen =
			openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
		openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
		mobileMenu.classList.toggle('is-open');

		const scrollLockMethod = !isMenuOpen
			? 'disableBodyScroll'
			: 'enableBodyScroll';
		bodyScrollLock[scrollLockMethod](document.body);
	};

	openMenuBtn.addEventListener('click', toggleMenu);
	closeMenuBtn.addEventListener('click', toggleMenu);
	mobileMenCon.addEventListener('click', toggleMenu);

	window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
		if (!e.matches) return;
		mobileMenu.classList.remove('is-open');
		openMenuBtn.setAttribute('aria-expanded', false);
		bodyScrollLock.enableBodyScroll(document.body);
	});
}