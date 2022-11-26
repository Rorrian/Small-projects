// Создаем элемент класса из библиотеки Typed.js
// Аргументы: 1 - блок для печати строк, 2 - список настроек
const typed = new Typed("#typed", {
  typeSpeed: 100, // скорость печати
  backSpeed: 50, // скорость удаления текста
  startDelay: 500, // задержка перед началом печати
  loop: true,
  stringsElement: "#typed-strings", // блок для печати строк
});
