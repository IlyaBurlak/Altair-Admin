# Altair-Admin

Приложение для управления данными с аналитикой, календарем и задачами

## 🚀 Особенности
- Интерактивная доска задач с использованием React Kanban.
- Календарь событий с интеграцией FullCalendar.
- Динамические графики и диаграммы (ECharts).
- Адаптивная таблица данных (Material React Table).
- Управление состоянием через Zustand для простоты и производительности.
- Оптимизация сборки с помощью Vite.
- Готовые UI-компоненты из MUI и React Icons.

## 🛠 Технологии
- **React 18** — базовая библиотека для интерфейса.
- **Zustand** — управление состоянием приложения.
- **React Router v6** — навигация между страницами.
- **MUI (Material-UI)** — стилизация и компоненты.
- **FullCalendar** — календарь событий.
- **ECharts** — визуализация данных.
- **React Kanban** — доска задач.
- **Vite** — сборка и разработка.
- **Moment.js** — работа с датами.

## 🗂 Структура проекта
```plaintext
src/
├── components/         
│   ├── AddCardModal/     # Модальное окно добавления задач
│   ├── OrdersPieChart/   # Круговая диаграмма заказов
│   ├── StatisticsChart/  # Графики статистики
│   └── ...               # Другие UI-компоненты
├── pages/               
│   ├── Dashboard/        # Главная страница с аналитикой
│   ├── Calendar/         # Страница календаря
│   ├── Board/            # Доска задач (Kanban)
│   └── DataGrid/         # Таблица данных
├── store/               
│   └── (Zustand store)   # Хранилища Zustand
├── data/                 # Вспомогательные данные
├── public/               # Статические ресурсы
│   ├── logo.png         
│   └── profile.png      
├── App.jsx              # Корневой компонент
├── main.jsx             # Точка входа
└── index.css            # Глобальные стили

```

## 🌐 Деплой

[![Live Demo](https://img.shields.io/badge/Live_Demo-Altair_Posts-61777F?style=for-the-badge&logo=vercel)](altair-admin.vercel.app
)
