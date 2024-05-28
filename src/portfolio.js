import { mobileMenu } from "./js/mobile-menu";
import { openModal } from "./js/modal";
mobileMenu();
const openModalBtn = document.querySelector("[data-modal-open]");
const mobileMenCon = document.querySelector(".mobile-contacts-js");
openModalBtn.addEventListener('click', openModal);
mobileMenCon.addEventListener('click', openModal);
