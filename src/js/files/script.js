// Подключение функционала "Чертогов Фрилансера"
import { isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";


// Считываем поле ввода
let phoneInput = document.querySelector(".input-tel");
// Считываем кнопку
let btn = document.querySelector(".tabs-form__submit");

// Создаем маску в инпуте
const phoneMask = new IMask(phoneInput, {
  mask: "+{7} (000) 000-00-00",
});

// Обработчик события для инпута
phoneInput.addEventListener("input", phoneInputHandler);

// Если ввели правлильно - кнопка активна
function phoneInputHandler() {
  if (phoneMask.masked.isComplete) {
    btn.classList.add("btn--active");
  } else {
    btn.classList.remove("btn--active");
  }
}


