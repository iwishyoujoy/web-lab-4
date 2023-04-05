# Лабораторная работа №4 по Веб-программированию

## [Посмотреть приложение](https://isaev-top.org/studs/dasha/lab-4/)

## Содержание проекта

Приложение с использованием следующих технологий:
- Уровень back-end основан на Spring
- Уровень front-end построен на React + Redux c использованием набора компонентов Belle
- Взаимодействие между уровнями back-end и front-end организовано посредством REST API

Приложение включает в себя две страницы - стартовую страницу и основную страницу приложения. Обе страницы адаптированы для отображения в 3 режимах: десктопный, планшетный и мобильный.

### Стартовая страница содержит следующие элементы:

- Форму для ввода логина и пароля. Информация о зарегистрированных в системе пользователях хранится в отдельной таблицу БД. Доступ неавторизованных пользователей к основной странице приложения запрещен.

### Основная страница приложения содержит следующие элементы:

- Набор компонентов для задания координат точки и радиуса области. Приложение осуществляет валидацию данных, если компонент допускает ввод заведомо некорректных данных (таких, например, как буквы в координатах точки).
- Динамически обновляемую картинку, изображающую область на координатной плоскости в соответствии с номером варианта и точки, координаты которых были заданы пользователем. Клик по картинке иницилаизирует сценарий, осуществляющий определение координат новой точки и отправку их на сервер для проверки её попадания в область. Цвет точек зависит от факта попадания / непопадания в область. Смена радиуса также инициализирует перерисовку картинки.
- Таблицу со списком результатов предыдущих проверок.
- Кнопку, по которой аутентифицированный пользователь может закрыть свою сессию и вернуться на стартовую страницу приложения.

### Дополнительные свойства приложения:

- Все результаты проверки сохраняются в базе данных под управлением СУБД PostgreSQL.
- Для доступа к БД используется Spring Data.
