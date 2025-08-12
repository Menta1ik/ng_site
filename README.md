# NextGen Platform Website

Современный корпоративный веб-сайт для демонстрации возможностей платформы NextGen - продвинутой low-code платформы для разработки корпоративных приложений.

## 🚀 Особенности

- **Современный корпоративный дизайн** с градиентными заголовками и интерактивной анимацией частиц
- **Полностью адаптивная верстка** для всех устройств (desktop, tablet, mobile)
- **Интерактивная анимация частиц** с реакцией на движение мыши и оптимизированной производительностью
- **Коллекция интерактивных презентаций** с детальной информацией о платформе
- **Архив технических документов** с PDF файлами для скачивания
- **Информационные страницы** About и Contact с подробной информацией о компании
- **Полная RFP оценка платформы** с детальным анализом 38 критериев
- **Кастомная страница 404** с единым дизайном и навигацией
- **Продвинутая SEO-оптимизация** с мета-тегами, Open Graph, Twitter Cards, JSON-LD разметкой и каноническими URL
- **Серверные редиректы** для HTTPS, www → non-www, /index.html → / через .htaccess
- **Google Analytics** интеграция для отслеживания посетителей
- **PWA поддержка** с манифестом и иконками
- **Единообразная навигация** на всех страницах с активными состояниями
- **Логотип NextGen** с фирменным стилем "nx" и подписью "Advanced lowcode platform"

## 📁 Структура проекта

```
nextgen-platform-website/
├── index.html                              # Главная страница платформы
├── presentations.html                      # Коллекция презентаций
├── about.html                             # О платформе и компании
├── contact.html                           # Контактная информация
├── file_archive.html                      # Архив технических документов
├── evaluation.html                        # RFP оценка платформы (38 критериев)
├── 404.html                               # Кастомная страница ошибки 404
├── common.css                             # Общие стили для всех страниц
├── manifest.json                          # PWA манифест
├── robots.txt                             # Настройки для поисковых роботов
├── sitemap.xml                            # Карта сайта для SEO
├── files/                                 # PDF документы и технические материалы
│   ├── detailed_usecases_for_the_nextgen_in_Banking.en.pdf
│   ├── nextgen_capabilities_analysis_and_references.en.pdf
│   ├── nextgen_platform_cases.en.pdf
│   ├── nextgen_platform_comparison_2025.en.pdf
│   ├── nextgen_platform_modules_for_Banks.en.pdf
│   ├── nextgen_platform_tco_2025.pdf
│   ├── nextgen_security_description_en.pdf
│   ├── rfp_checklist_for_nextgen_platform.en.pdf
│   └── rfp_checklist_for_nextgen_platform_with_competitors.pdf
├── images/                                # Изображения, иконки и логотипы
│   ├── favicon.svg                        # Иконка сайта
│   ├── nextgen-preview.png               # Превью для социальных сетей
│   └── logos/                            # Логотипы клиентов и партнеров
│       ├── asia-finance-group-logo.png
│       ├── credit-agricole-logo.svg
│       ├── enifinance-logo.svg
│       ├── intesa-sanpaolo-logo.svg
│       ├── kredobank-logo.png
│       ├── moneyveo-logo.svg
│       ├── otp-bank-logo.svg
│       ├── pkb-logo.svg
│       ├── pta-bank-logo.svg
│       └── societe-generale-logo.svg
├── *_presentation.html                    # Интерактивные презентации
│   ├── use_cases_presentation.html        # Основные сценарии использования
│   ├── perception_presentation.html       # Восприятие и позиционирование
│   ├── tco_roi_presentation.html         # TCO и ROI анализ
│   ├── digital_authority_presentation.html # Цифровая трансформация
│   ├── rfp_evaluation_presentation.html   # Оценка RFP
│   ├── rfp_checklist_presentation.html    # Чек-лист RFP
│   └── security_presentation.html         # Безопасность платформы
├── *_reference.html                       # Референсы клиентов
│   ├── afg_reference.html                # Asia Finance Group
│   ├── ca_reference.html                 # Credit Agricole
│   ├── ef_reference.html                 # EniFinance
│   └── sg_reference.html                 # Societe Generale
├── .htaccess                             # Настройки Apache сервера
├── .well-known/security.txt              # Политика безопасности
└── README.md                             # Документация проекта
```

## 🎨 Дизайн и технологии

### CSS Features
- Градиентные заголовки с анимацией
- Flexbox и Grid для адаптивной верстки
- Плавные переходы и hover-эффекты
- Backdrop-filter для современных эффектов
- Responsive дизайн с медиа-запросами

### JavaScript
- Canvas анимация частиц
- Интерактивность с мышью
- Плавная анимация появления элементов
- Адаптивная система частиц

## 📄 Страницы

### Главная страница (index.html)
- Приветственное сообщение
- Навигация по разделам
- Анимация частиц на фоне
- Ссылки на основные разделы

### Презентации (presentations.html)
- Коллекция из 9 презентаций
- Карточки с описанием и метаданными
- Информация о типе и количестве слайдов
- Плавная анимация появления

### Архив файлов (file_archive.html)
- PDF документы для скачивания
- Информация о размере файлов
- Организованная структура документов
- Поиск и фильтрация

### Контакты (contact.html)
- Информация о компании
- Контактные данные
- Форма обратной связи

## 🚀 Быстрый старт

### Локальная разработка

1. **Клонируйте репозиторий:**
```bash
git clone https://github.com/Menta1ik/ng_site.git
cd ng_site
```

2. **Запустите локальный сервер:**
```bash
# Python 3 (рекомендуется)
python3 -m http.server 8000

# Node.js
npx serve . -p 8000

# PHP
php -S localhost:8000

# Live Server (VS Code)
# Установите расширение Live Server и откройте index.html
```

3. **Откройте браузер:**
   - Основной сайт: `http://localhost:8000`
   - Презентации: `http://localhost:8000/presentations.html`
   - Архив файлов: `http://localhost:8000/file_archive.html`
   - О компании: `http://localhost:8000/about.html`
   - Контакты: `http://localhost:8000/contact.html`
   - Тест 404: `http://localhost:8000/404.html`

### Развертывание в продакшн

#### GitHub Pages
```bash
# Настройка GitHub Pages
1. Перейдите в Settings → Pages
2. Выберите Source: Deploy from a branch
3. Выберите Branch: main / (root)
4. Сайт будет доступен по адресу: https://username.github.io/ng_site
```

#### Netlify
```bash
# Автоматическое развертывание
1. Подключите репозиторий к Netlify
2. Build command: (оставить пустым)
3. Publish directory: . (корневая папка)
4. Автоматическое развертывание при push в main
```

#### Vercel
```bash
# Развертывание через CLI
npm i -g vercel
vercel --prod

# Или через веб-интерфейс
1. Импортируйте проект с GitHub
2. Framework Preset: Other
3. Root Directory: ./
```

#### Традиционный хостинг
```bash
# Загрузка файлов через FTP/SFTP
1. Скачайте все файлы проекта
2. Загрузите в корневую папку веб-сервера
3. Убедитесь, что .htaccess поддерживается (Apache)
4. Настройте SSL сертификат для HTTPS
```

## 📱 Адаптивность

Сайт оптимизирован для:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (до 767px)

## 🎯 Основные компоненты

### Анимация частиц
- 50 синих частиц
- Зеленые соединительные линии
- Реакция на движение мыши
- Адаптивная система коллизий

### Навигация
- **Активные состояния ссылок** с визуальной обратной связью
- **Hover-эффекты** с плавными переходами
- **Интерактивные логотипы** с переходом на главную страницу
- **Мобильное меню** (при необходимости)
- **Улучшенная доступность** и юзабилити

### Карточки
- **Плавное появление** с задержкой для лучшего UX
- **Hover-эффекты** с трансформацией и тенями
- **Информативные метаданные** с детальной информацией
- **Центрированное выравнивание** текста в статистических блоках
- **Оптимизированная типографика** для лучшей читаемости

## 🔧 Настройка

### Изменение цветовой схемы
Основные цвета определены в CSS переменных в `common.css`:
```css
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
  --accent-color: #28a745;
}
```

### Настройка анимации частиц
Параметры анимации можно изменить в JavaScript коде каждой страницы:
```javascript
const particleCount = 50;  // Количество частиц
const connectionDistance = 100;  // Расстояние соединения
const particleSpeed = 0.5;  // Скорость движения
```

## 📈 Производительность

- Оптимизированные изображения
- Минимальное использование внешних библиотек
- Эффективная анимация через requestAnimationFrame
- Адаптивная загрузка ресурсов

## 📊 Технические характеристики

### Дизайн и UX
- **Корпоративный дизайн**: Единый стиль NextGen с фирменными цветами и типографикой
- **Адаптивная верстка**: Полностью responsive дизайн для всех устройств (desktop, tablet, mobile)
- **Интерактивная анимация**: Оптимизированная система частиц с поддержкой мыши
- **Единая навигация**: Консистентное меню на всех страницах
- **Кастомная 404**: Стилизованная страница ошибки с анимацией

### Производительность
- **Оптимизированная загрузка**: Минимизированные CSS и оптимизированные изображения
- **Canvas анимация**: Эффективный рендеринг частиц с контролем FPS
- **Кэширование**: Настроенное кэширование статических ресурсов
- **Сжатие**: Gzip сжатие для всех текстовых файлов

### SEO и метаданные
- **Open Graph**: Полная поддержка социальных сетей (Facebook, Twitter)
- **JSON-LD**: Структурированные данные для поисковых систем
- **Sitemap.xml**: Автоматическая индексация всех страниц
- **Robots.txt**: Настроенные правила для поисковых роботов
- **Canonical URLs**: Предотвращение дублирования контента
- **Meta теги**: Оптимизированные заголовки и описания

### PWA и современные стандарты
- **Progressive Web App**: Поддержка установки как приложение
- **Manifest.json**: Настроенный манифест для PWA
- **Favicon**: SVG иконки для всех устройств
- **Security.txt**: Политика безопасности

### Аналитика и мониторинг
- **Google Analytics**: Интегрированная система аналитики
- **Отслеживание событий**: Мониторинг взаимодействий пользователей
- **Производительность**: Мониторинг скорости загрузки

### Совместимость
- **Браузеры**: Chrome 60+, Firefox 55+, Safari 12+, Edge 79+
- **Устройства**: Desktop, Tablet, Mobile (iOS, Android)
- **Серверы**: Apache, Nginx, любой статический хостинг

## 🛠️ Разработка

### Структура кода

- **HTML**: Семантическая разметка с поддержкой SEO
- **CSS**: Модульная архитектура стилей в `common.css`
- **JavaScript**: Vanilla JS для анимаций и интерактивности
- **Изображения**: Оптимизированные SVG и PNG файлы
- **Документы**: PDF файлы в папке `files/`

### Стандарты кодирования

```css
/* CSS: BEM методология */
.header__logo { }
.navigation__item { }
.content__section { }
```

```javascript
// JavaScript: ES6+ стандарты
const particleSystem = {
    init() { },
    animate() { },
    handleResize() { }
};
```

### Тестирование

```bash
# Проверка валидности HTML
npx html-validate *.html

# Проверка CSS
npx stylelint common.css

# Проверка производительности
npx lighthouse http://localhost:8000 --output=html

# Проверка доступности
npx pa11y http://localhost:8000
```

### Оптимизация

- **Изображения**: Используйте WebP формат для лучшего сжатия
- **CSS**: Минификация и удаление неиспользуемых стилей
- **JavaScript**: Минификация и tree-shaking
- **Шрифты**: Предзагрузка критических шрифтов

## 🤝 Вклад в проект

### Как внести вклад

1. **Fork репозитория**
2. **Создайте feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Внесите изменения и commit:**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push в branch:**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Создайте Pull Request**

### Правила для Pull Request

- ✅ Описание изменений
- ✅ Тестирование на разных устройствах
- ✅ Проверка валидности HTML/CSS
- ✅ Оптимизация производительности
- ✅ Соответствие дизайн-системе

### Типы изменений

- 🐛 **Bug Fix**: Исправление ошибок
- ✨ **Feature**: Новая функциональность
- 💄 **Style**: Изменения в дизайне
- 📝 **Docs**: Обновление документации
- ⚡ **Performance**: Оптимизация производительности
- ♿ **Accessibility**: Улучшение доступности

## 📞 Поддержка

### Контакты

- **GitHub Issues**: [Создать issue](https://github.com/Menta1ik/ng_site/issues)
- **Email**: support@nextgen-platform.com
- **Документация**: [Wiki](https://github.com/Menta1ik/ng_site/wiki)

### FAQ

**Q: Как обновить логотипы клиентов?**
A: Добавьте SVG файлы в `images/logos/` и обновите `presentations.html`

**Q: Как добавить новую презентацию?**
A: Создайте HTML файл по шаблону и добавьте ссылку в `presentations.html`

**Q: Как настроить Google Analytics?**
A: Замените ID в meta тегах всех HTML файлов

## 📄 Лицензия

Этот проект распространяется под лицензией MIT. См. файл [LICENSE](LICENSE) для подробностей.

```
MIT License

Copyright (c) 2025 NextGen Platform

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

## 📈 Статистика проекта

- **Страниц**: 12+ (включая презентации и референсы)
- **Документов**: 9 PDF файлов с техническими материалами
- **Логотипов клиентов**: 10+ международных банков
- **Языки**: Русский, Английский
- **Размер проекта**: ~15MB (включая все ресурсы)
- **Время загрузки**: <2 секунды на быстром соединении

## 🏆 Достижения

- ✅ **100% адаптивность** на всех устройствах
- ✅ **SEO оптимизация** для поисковых систем
- ✅ **PWA готовность** для установки как приложение
- ✅ **Accessibility** соответствие стандартам WCAG
- ✅ **Performance** оптимизированная загрузка
- ✅ **Security** современные стандарты безопасности

## 🙏 Благодарности

- **NextGen Platform Team** - за предоставленные материалы и дизайн
- **Клиенты и партнеры** - за доверие и референсы
- **Open Source Community** - за инструменты и библиотеки
- **Web Standards** - за современные технологии

## 🔗 Полезные ссылки

- [NextGen Platform](https://nextgen-platform.com) - Официальный сайт
- [GitHub Repository](https://github.com/Menta1ik/ng_site) - Исходный код
- [Live Demo](https://menta1ik.github.io/ng_site) - Демо версия
- [Documentation](https://github.com/Menta1ik/ng_site/wiki) - Подробная документация

---

<div align="center">

### 🚀 NextGen Platform Website

**Современный корпоративный сайт с интерактивными презентациями**

[![GitHub Stars](https://img.shields.io/github/stars/Menta1ik/ng_site?style=social)](https://github.com/Menta1ik/ng_site/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/Menta1ik/ng_site?style=social)](https://github.com/Menta1ik/ng_site/network/members)
[![GitHub Issues](https://img.shields.io/github/issues/Menta1ik/ng_site)](https://github.com/Menta1ik/ng_site/issues)
[![GitHub License](https://img.shields.io/github/license/Menta1ik/ng_site)](https://github.com/Menta1ik/ng_site/blob/main/LICENSE)

*Создано с ❤️ для демонстрации возможностей NextGen Platform*

**[🌐 Посетить сайт](https://menta1ik.github.io/ng_site)** • **[📖 Документация](https://github.com/Menta1ik/ng_site/wiki)** • **[🐛 Сообщить об ошибке](https://github.com/Menta1ik/ng_site/issues)**

</div>