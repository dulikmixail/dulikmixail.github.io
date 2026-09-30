# Сайт-резюме Михаила Дулика

Одностраничный сайт-визитка на Angular 22. В проекте есть адаптивная вёрстка, светлая и тёмная темы, а также готовое PDF-резюме.

## Данные и файлы резюме

Данные об опыте и навыках находятся в `src/app/app.ts`, остальные разделы — в `src/app/app.html`.

Аватар `src/imgs/avatar.png` автоматически копируется в сборку через `angular.json`. Кнопка скачивания PDF использует `public/Mikhail-Dulik-Frontend-Developer-Angular.pdf`. При следующем обновлении резюме нужно также актуализировать содержание сайта и PDF.

## Локальный запуск

```bash
npm install
npm start
```

Сайт откроется по адресу `http://localhost:4200`.

## Production-сборка

```bash
npm run build
```

Готовые статические файлы появятся в каталоге `dist`.

## GitHub Pages

В репозитории уже настроен GitHub Actions workflow. После публикации кода на GitHub:

1. Откройте **Settings → Pages**.
2. В разделе **Build and deployment** выберите **GitHub Actions**.
3. Запустите workflow **Deploy Angular resume to GitHub Pages** или отправьте изменения в ветку `main`.

Приложение использует относительный `base href`, поэтому работает как на корневом домене, так и в подпапке GitHub Pages.
