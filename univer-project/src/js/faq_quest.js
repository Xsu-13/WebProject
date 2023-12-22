// Получаем все элементы аккордеона
const questionItems = document.querySelectorAll('.question-item');

// Добавляем обработчик события клика на каждый элемент аккордеона
questionItems.forEach(item => {
    const header = item.querySelector('.question-header');
    const title = item.querySelector('.question-title');

    header.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Переключаем класс 'active' для активации/деактивации раздела аккордеона
        item.classList.toggle('active');

        // Если элемент был активен, удаляем стиль границы и меняем цвет текста вопроса, иначе добавляем
        if (isActive) {
            item.classList.remove('active-border');
            title.style.color = ''; // Возвращаем стандартный цвет текста
        } else {
            // Убираем стиль границы у всех элементов
            questionItems.forEach(element => {
                element.classList.remove('active-border');
                const elementTitle = element.querySelector('.question-title');
                elementTitle.style.color = ''; // Возвращаем стандартный цвет текста для других вопросов
            });

            // Добавляем стиль границы только к активному элементу .question-item
            item.classList.add('active-border');
            title.style.color = '#f14d34'; // Устанавливаем цвет текста при активации

            // Закрываем другие открытые вопросы, если они не являются текущим вопросом
            questionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    const otherTitle = otherItem.querySelector('.question-title');
                    otherTitle.style.color = ''; // Возвращаем стандартный цвет текста для других открытых вопросов
                }
            });
        }
    });
});