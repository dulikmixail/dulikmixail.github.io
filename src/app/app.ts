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
      value: '96%',
      label: 'быстрее операции',
      detail: 'Переключение платёжных провайдеров сократилось с 5 минут до 10 секунд.',
    },
    {
      value: '90%',
      label: 'меньше критических багов',
      detail: 'После аудита, обновления Angular, strict typing и инженерных стандартов.',
    },
    {
      value: '138+',
      label: 'релизов без простоев',
      detail: 'Непрерывная поставка функционала и оперативная production-поддержка.',
    },
  ];

  readonly experiences: readonly Experience[] = [
    {
      period: 'Апрель 2025 — Август 2026',
      duration: '1 год 5 месяцев',
      company: 'МФК ВЭББАНКИР',
      companyUrl: 'https://webbankir.com',
      location: 'Москва · Финтех',
      role: 'Frontend-разработчик',
      summary:
        'Архитектурное руководство и разработка сложных frontend-сценариев для маркетинга, риск-менеджмента, платёжных систем и бэкофиса.',
      highlights: [
        'Спроектировал модуль переключения платёжных провайдеров: время операции снизилось с 5 минут до 10 секунд, а риск человеческой ошибки — до нуля.',
        'Разработал динамическое управление тарифами: зависимость бизнеса от ИТ снизилась на 80%, а выдачи займов выросли на 40% год к году.',
        'Внедрил мультитенантную архитектуру без дублирования кода; объём маркетинговых коммуникаций вырос на 20% — до ~2 млн сообщений в месяц.',
        'Интегрировал GrowthBook: реакция на инциденты ускорилась на 75%, проблемный функционал стало возможно отключать без hotfix-релизов.',
        'Провёл аудит и рефакторинг legacy-кода, обновил приложение до Angular 21, включил строгую типизацию и снизил критические баги на 90%.',
        'Провёл 138+ релизов без простоев, устранил 11 критичных production-инцидентов и выстроил кросс-проектное code review.',
      ],
      technologies: ['Angular 21', 'TypeScript', 'Signals', 'GrowthBook', 'CI/CD', 'UI kit'],
    },
    {
      period: 'Декабрь 2020 — Ноябрь 2024',
      duration: '4 года',
      company: 'ZubrSoft',
      companyUrl: 'https://loot.bet',
      role: 'Frontend Developer',
      summary:
        'Разработка Angular-приложения с PWA и SSR, развитие компонентной библиотеки, тестирование, интеграции и оптимизация производительности.',
      highlights: [
        'Обновил Angular с версии 14 до 17 и модернизировал все зависимые библиотеки.',
        'Перестроил архитектуру для масштабирования продукта и разделения на подпроекты.',
        'Внедрил реактивный подход к state management и единый стиль тестирования.',
        'Спроектировал переиспользуемые npm-модули и компонентную базу с нуля.',
        'Провёл редизайн, рефакторинг legacy-кода и оптимизацию главной страницы и турнирной таблицы.',
      ],
      technologies: ['Angular 14–17', 'RxJS', 'PWA', 'SSR', 'Unit testing', 'npm modules'],
    },
    {
      period: 'Август 2019 — Декабрь 2020',
      duration: '1 год 5 месяцев',
      company: 'PST Labs LLC',
      role: 'Frontend Developer',
      summary:
        'Два банковских продукта: система раннего предупреждения BGPB и интерфейс управления активами по сбору задолженности LICA.',
      highlights: [
        'Разработал BGPB с нуля: сложные формы, фильтры, динамические таблицы и ролевая модель с ограничениями в реальном времени.',
        'Оптимизировал интерфейс операторов LICA, интегрировал Yandex Maps API и Zipkin.',
        'Реализовал offline-предпросмотр популярных форматов документов.',
      ],
      technologies: ['Angular 6–9', 'NgRx', 'WebSocket', 'Angular Material', 'Shared Worker', 'SCSS'],
    },
  ];

  readonly skillGroups = [
    {
      index: '01',
      title: 'Angular core',
      skills: ['Angular', 'TypeScript', 'Angular Signals', 'RxJS', 'NgRx'],
    },
    {
      index: '02',
      title: 'Architecture',
      skills: ['SSR', 'PWA', 'Nx', 'Webpack', 'Shared Worker', 'WebSockets'],
    },
    {
      index: '03',
      title: 'Delivery & quality',
      skills: ['Unit Testing', 'Code Review', 'CI/CD', 'Docker', 'ESLint', 'Prettier'],
    },
    {
      index: '04',
      title: 'Interface engineering',
      skills: ['HTML5', 'SCSS', 'Design systems', 'Responsive UI', 'Angular Material'],
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
