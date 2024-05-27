export function modalWindow() {
	const refs = {
		openModalBtn: document.querySelector("[data-modal-open]"),
		closeModalBtn: document.querySelector("[data-modal-close]"),
		modal: document.querySelector("[data-modal]"),
		form: document.querySelector('.js-speaker-form'),
	};
	const { openModalBtn, closeModalBtn, modal, form } = refs;
	openModalBtn.addEventListener("click", toggleModal);
	closeModalBtn.addEventListener("click", toggleModal);
	function toggleModal() {
		document.body.classList.toggle("modal-open");
		modal.classList.toggle("is-hidden");
	}

	form.addEventListener('submit', e => {
		e.preventDefault();
		new FormData(e.currentTarget).forEach((value, name) =>
			console.log(`${name}: ${value}`),
		);
	});
}