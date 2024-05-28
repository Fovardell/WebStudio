export function openModal(event) {
	event.preventDefault();
	const refs = {
		modal: document.querySelector("[data-modal]"),
		form: document.querySelector('.js-speaker-form'),
		closeBtn: document.querySelector("[data-modal-close]")
	};
	const { modal, closeBtn, form } = refs;

	document.body.classList.add("modal-open");
	modal.classList.remove("is-hidden");

	form.addEventListener('submit', onFormSubmit);
	closeBtn.addEventListener('click', closeModal);

	modal.addEventListener('click', onBackdropClick);

	function onBackdropClick(e) {
		if (e.target !== e.currentTarget) {
			e.stopPropagation();
			return;
		}
		closeModal();
	}

	function closeModal() {
		document.body.classList.remove("modal-open");
		modal.classList.add("is-hidden");

		closeBtn.removeEventListener("click", closeModal);
		form.removeEventListener("submit", onFormSubmit);
		modal.removeEventListener('click', onBackdropClick);
	}

	function onFormSubmit(e) {
		e.preventDefault();
		new FormData(e.currentTarget).forEach((value, name) =>
			console.log(`${name}: ${value}`),
		);
		form.reset();
		closeModal();
	};

}