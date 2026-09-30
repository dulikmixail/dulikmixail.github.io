import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';

type Theme = 'light' | 'dark';

interface Achievement {
  readonly value: string;
  readonly label: string;
  readonly detail: string;
}

interface Experience {
  readonly period: string;
  readonly duration: string;
  readonly company: string;
  readonly companyUrl?: string;
  readonly location?: string;
  readonly role: string;
  readonly summary: string;
  readonly highlights: readonly string[];
  readonly technologies?: readonly string[];
}

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.html',
  styleUrl: './app.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class.dark-theme]': "theme() === 'dark'" },
})
export class App {
  readonly theme = signal<Theme>(this.initialTheme());

  readonly achievements: readonly Achievement[] = [
    {
      value: '10 с',
      label: 'переключение провайдера',
      detail: 'Готовые конфигурации платёжных провайдеров сократили операцию с 5 минут до 10 секунд.',
    },
    {
      value: '1,1 с',
      label: 'первое отображение страницы',
      detail: 'FCP Control Center снизился с 3,4 до 1,1 секунды после перехода с SSR на клиентский рендеринг.',
    },
    {
      value: '138+',
      label: 'релизов без простоев',
      detail: 'GitLab CI/CD, сборка и публикация Docker-образов; устранены 11 критических production-инцидентов.',
    },
  ];

  readonly experiences: readonly Experience[] = [
    {
      period: 'Апрель 2025 — Август 2026',
      duration: '1 год 5 месяцев',
      company: 'ВЭББАНКИР',
      companyUrl: 'https://webbankir.com',
      location: 'Москва · Финтех',
      role: 'Frontend-разработчик (Angular, TypeScript)',
      summary:
        'Control Center — единый центр операционного управления финансовыми продуктами: тарифы, платёжные провайдеры, выплаты, клиентские коммуникации, проверки клиентов и аудит операций.',
      highlights: [
        'Переработал архитектуру SPA, организовал управление состоянием через NGXS и RxJS и перевёл 23 раздела на lazy loading.',
        'Обновил Angular с 19-й до 21-й версии, усилил типизацию TypeScript и автоматизировал проверки через ESLint, Prettier и Husky.',
        'Внедрил мультитенантную архитектуру для 3 финансовых продуктов и общий редактор шаблонов для 7 каналов коммуникации с объёмом до 2 млн сообщений в месяц.',
        'Спроектировал переключение платёжных провайдеров через HTTP API: готовые конфигурации сократили время операции с 5 минут до 10 секунд.',
        'Разработал динамические формы тарифов для 3 типов кредитных продуктов и интегрировал GrowthBook с состоянием, меню и маршрутизацией для управления функциями без hotfix-релизов.',
        'Переработал сервер на Node.js/Express и перевёл Control Center с SSR на клиентский рендеринг: FCP снизился с 3,4 до 1,1 секунды.',
        'Унифицировал ошибки форм в 19 компонентах из 12 разделов и выбор дат в 24 формах; покрыл общие компоненты модульными тестами на Jasmine/Karma.',
        'Объединил поиск клиентов, блокировки и историю изменений в едином интерфейсе чёрных списков: среднее время принятия решения по займу сократилось с 3 минут 50 секунд до 2 минут.',
        'Провёл более 138 релизов без простоев через GitLab CI/CD и Docker, устранил 11 критических production-инцидентов и внедрил кросс-проектное code review.',
        'Сформировал регламенты frontend-разработки и критерии DoR/DoD, декомпозировал и оценивал задачи, документировал архитектуру, модули и UI-киты.',
      ],
      technologies: ['Angular 19–21', 'TypeScript', 'NGXS', 'RxJS', 'Reactive Forms', 'GrowthBook', 'Node.js / Express', 'Jasmine / Karma', 'GitLab CI/CD', 'Docker'],
    },
    {
      period: 'Декабрь 2020 — Ноябрь 2024',
      duration: '4 года',
      company: 'ZubrSoft',
      role: 'Frontend-разработчик (Angular, TypeScript)',
      summary:
        'Международная платформа ставок на спорт и киберспорт: live-матчи и коэффициенты, купон ставок, личный кабинет, платежи и бонусы. Две лицензированные версии с общим ядром и B2B-интеграция через LiveStream SDK.',
      highlights: [
        'Перестроил архитектуру Angular/TypeScript-приложения для 2 лицензированных версий с общим ядром и переиспользуемой бизнес-логикой.',
        'Развил UI-кит из 31 Angular-компонента, используемый в 163 шаблонах, для централизованной поддержки интерфейса и редизайна.',
        'Объединил 137 классов HTTP-запросов во внутренней npm-библиотеке на TypeScript/RxJS и внедрил runtime-валидацию ответов 81 REST API-запроса.',
        'Реализовал LiveStream SDK для встраивания таблицы матчей, купона и истории ставок в сайты партнёров с настройкой авторизации, языка, валюты и коэффициентов.',
        'Обновил Angular с 14-й до 18-й версии и TypeScript с 4.6 до 5.5 вместе с NgRx, SSR, PWA и конфигурацией сборки.',
        'Централизовал 5 срезов состояния и обновления из 3 WebSocket-каналов через NgRx/RxJS.',
        'Оптимизировал начальный бандл, доставку ресурсов с CDN и повторное использование SSR-данных: FCP главной страницы снизился с 3,8 до 1,2 секунды.',
        'Настроил кастомную сборку Webpack с CDN и конфигурациями окружения; переработал обновление PWA через WebSocket, Service Worker и версионирование кеша.',
        'Развил модульное тестирование на Jasmine/Karma и Jest до 640 сценариев, стандартизировал заглушки и проверку асинхронной логики через RxJS TestScheduler.',
        'Унифицировал пополнение и вывод средств: динамические Reactive Forms с 5 типами полей и правилами валидации из API; выполнил SEO-оптимизацию и адаптивную вёрстку Mobile First.',
      ],
      technologies: ['Angular 14–18', 'TypeScript', 'NgRx', 'RxJS', 'REST API', 'WebSocket', 'SSR', 'PWA', 'Webpack', 'Jasmine / Karma', 'Jest', 'LiveStream SDK'],
    },
    {
      period: 'Август 2019 — Декабрь 2020',
      duration: '1 год 5 месяцев',
      company: 'PST Labs LLC',
      role: 'Frontend-разработчик (Angular, TypeScript)',
      summary:
        'Два банковских продукта: система раннего предупреждения о кредитных рисках корпоративных клиентов и система управления просроченной задолженностью для операторов и руководителей.',
      highlights: [
        'Разработал ключевые модули системы кредитных рисков и довёл их до сдачи заказчику; развил карточку корпоративного клиента из 7 разделов.',
        'Унифицировал таблицы на Angular CDK Virtual Scroll и OnPush в 15 шаблонах, связал поиск, сортировку и постраничную загрузку с NgRx/RxJS.',
        'Развил динамическую ролевую модель с 64 точками проверки прав в 36 шаблонах: доступные действия обновлялись по WebSocket без перезагрузки страницы.',
        'Развил UI-библиотеку из 31 компонента для 95 шаблонов и составные Reactive Forms с ControlValueAccessor; доработал конструктор и готовые отчёты.',
        'Покрыл выбор строк 42 модульными тестами на Jasmine/Karma для проверки массовых операций и восстановления выбора.',
        'В системе просроченной задолженности доработал передачу портфелей коллекторским агентствам с контролем 4 этапов и блокировкой недоступных действий.',
        'Расширил встроенный предпросмотр до PDF, JPG, PNG и DOCX; реализовал обработку DOCX в браузере через Mammoth.',
        'Интегрировал трейсинг HTTP-запросов через Zipkin и HttpInterceptor, режим одной активной вкладки через SharedWorker и контроль выездных сотрудников через Yandex Maps API.',
      ],
      technologies: ['Angular', 'TypeScript', 'NgRx', 'RxJS', 'Angular Material / CDK', 'Reactive Forms', 'WebSocket', 'SharedWorker', 'Zipkin', 'Mammoth', 'Jasmine / Karma'],
    },
  ];

  readonly skillGroups = [
    {
      index: '01',
      title: 'Angular core',
      skills: ['Angular', 'TypeScript', 'JavaScript', 'RxJS', 'NgRx', 'NGXS', 'Reactive Forms'],
    },
    {
      index: '02',
      title: 'Architecture',
      skills: ['SPA / SSR / PWA', 'Node.js / Express', 'REST API', 'WebSocket', 'Webpack', 'SharedWorker', 'npm packages / SDK'],
    },
    {
      index: '03',
      title: 'Delivery & quality',
      skills: ['Jasmine / Karma / Jest', 'RxJS TestScheduler', 'Code Review', 'Git / GitLab CI/CD', 'Docker', 'ESLint / Prettier / Husky'],
    },
    {
      index: '04',
      title: 'Interface engineering',
      skills: ['HTML5 / CSS3 / SCSS', 'Angular Material / CDK', 'UI kits', 'Mobile First', 'Кроссбраузерная вёрстка', 'SEO', 'Оптимизация производительности'],
    },
  ] as const;

  constructor() {
    effect(() => {
      const theme = this.theme();
      document.documentElement.dataset['theme'] = theme;
      document.documentElement.style.colorScheme = theme;
      document.querySelector('meta[name="theme-color"]')?.setAttribute(
        'content',
        theme === 'dark' ? '#0b1020' : '#f6f8fc',
      );
      try {
        localStorage.setItem('resume-theme', theme);
      } catch {
        // The selected theme still applies when storage is unavailable.
      }
    });
  }

  toggleTheme(): void {
    this.theme.update((theme) => (theme === 'light' ? 'dark' : 'light'));
  }

  private initialTheme(): Theme {
    try {
      const saved = localStorage.getItem('resume-theme');
      if (saved === 'light' || saved === 'dark') {
        return saved;
      }
    } catch {
      // Fall through to the system preference.
    }
    return matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }
}
