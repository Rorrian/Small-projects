window.addEventListener("load", handlerWindowLoad);

function handlerWindowLoad() {
  // Инициализация
  function initDigitsCounters(digitsCountersItems) {
    let digitsCounters = digitsCountersItems
      ? digitsCountersItems
      : document.querySelectorAll("[data-digits-counter]");

    if (digitsCounters) {
      digitsCounters.forEach((digitsCounter) => {
        animateDigitsCounter(digitsCounter);
      });
    }
  }

  // Анимация
  function animateDigitsCounter(digitsCounter) {
    // Начальная отметка времени для отсчета длительности анимации
    let startTimestamp = null;
    // Длительность анимации
    const duration = parseInt(digitsCounter.dataset.digitsCounter)
      ? parseInt(digitsCounter.dataset.digitsCounter)
      : 1000;

    // Начальное значение для отсчета
    const startPosition = 0;
    // Конечное значение для отсчета
    const startValue = parseInt(digitsCounter.innerHTML);

    // Этап анимации смены значения счетчика
    const step = (timestamp) => {
      // Если это первый запуск, приравниваем значения
      if (!startTimestamp) {
        startTimestamp = timestamp;
      }
      // Значение(от 0 до 1) для отслеживания прогресса выполнения анимации
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      // Выводим результат этапа
      digitsCounter.innerHTML = Math.floor(
        progress * (startPosition + startValue)
      );

      // Если анимация не завершена, запускаем повторно
      if (progress < 1) {
        // Метод для выполнения операций перед вычислением стилей  и формированием документа браузером
        // Он сообщает браузеру, что необходимо выполнить анимацию
        // и вызывает заданную ф-ю "step" для обновления анимации перед следующей перерисовкой
        window.requestAnimationFrame(step);
      }
    };

    // Запуск начала анимации
    window.requestAnimationFrame(step);
  }

  // 1. Запуск счетчика при загрузке страницы
  // initDigitsCounters();

  // 2. Запуск счетчика при скролле
  let options = {
    threhold: 0.3,
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const targetElement = entry.target;
        const digitsCountersItems = targetElement.querySelectorAll(
          "[data-digits-counter]"
        );

        if (digitsCountersItems) {
          initDigitsCounters(digitsCountersItems);
        }

        observer.unobserve(targetElement);
      }
    });
  }, options);

  let sections = document.querySelectorAll(".page__section");
  if (sections) {
    sections.forEach((section) => {
      observer.observe(section);
    });
  }
}
