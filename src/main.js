import { mobileMenu } from "./js/mobile-menu";
import { openModal } from "./js/modal";
const openModalBtn = document.querySelector("[data-modal-open]");
const orderServicebtn = document.querySelector('.button-hero');
const mobileMenCon = document.querySelector(".mobile-contacts-js");

mobileMenu();

orderServicebtn.addEventListener('click', openModal);
openModalBtn.addEventListener('click', openModal);
mobileMenCon.addEventListener('click', openModal);

