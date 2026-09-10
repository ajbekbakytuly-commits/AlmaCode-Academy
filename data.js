// AlmaCode Academy — course catalog data
const COURSES = [
  {
    id: "fullstack-web",
    title: "Full Stack Web Development",
    category: "web",
    level: "Кәсіби",
    price: 42000,
    rating: 4.9,
    reviews: 120,
    duration: "3 ай",
    lessons: 48,
    tag: "HTML · CSS · JS",
    summary: "HTML, CSS, JavaScript, Node.js және MongoDB негізінде нөлден бастап веб-қосымша жасауды үйренесіз.",
    program: [
      { title: "1-модуль. Frontend негіздері", text: "HTML5 семантикасы, CSS Grid/Flexbox, реактивті layout құру." },
      { title: "2-модуль. JavaScript", text: "ES6+, DOM, асинхронды сұраныстар, fetch API." },
      { title: "3-модуль. Backend", text: "Node.js, Express, REST API жобалау." },
      { title: "4-модуль. Дерекқор", text: "MongoDB, Mongoose, авторизация және деплой." }
    ]
  },
  {
    id: "uiux-design",
    title: "UI/UX Design",
    category: "design",
    level: "Бастаушы",
    price: 35000,
    rating: 4.8,
    reviews: 98,
    duration: "2 ай",
    lessons: 32,
    tag: "Figma · UX",
    summary: "Пайдаланушыға ыңғайлы интерфейс жобалау принциптерін және Figma-да прототип жасауды меңгересіз.",
    program: [
      { title: "1-модуль. UX негіздері", text: "Пайдаланушыны зерттеу, персонажалар, user flow." },
      { title: "2-модуль. UI компоненттері", text: "Түс, типографика, компонент жүйесі." },
      { title: "3-модуль. Figma", text: "Wireframe, прототиптеу, auto-layout." },
      { title: "4-модуль. Портфолио", text: "Дайын жобаны рәсімдеу және таныстыру." }
    ]
  },
  {
    id: "data-analytics",
    title: "Data Analytics",
    category: "data",
    level: "Орта деңгей",
    price: 38000,
    rating: 4.7,
    reviews: 76,
    duration: "3 ай",
    lessons: 40,
    tag: "SQL · Python",
    summary: "SQL, Python және Excel арқылы деректерді талдап, бизнеске арналған есептер құруды үйренесіз.",
    program: [
      { title: "1-модуль. SQL негіздері", text: "Сұраныстар, JOIN, агрегация функциялары." },
      { title: "2-модуль. Python", text: "Pandas, NumPy көмегімен деректерді өңдеу." },
      { title: "3-модуль. Визуализация", text: "Matplotlib, дашборд құру." },
      { title: "4-модуль. Кейс жоба", text: "Нақты деректер жиынтығымен жұмыс." }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    category: "marketing",
    level: "Бастаушы",
    price: 30000,
    rating: 4.8,
    reviews: 104,
    duration: "6 апта",
    lessons: 24,
    tag: "SMM · SEO",
    summary: "SMM, SEO және контент-стратегия негіздерін меңгеріп, брендті онлайн ілгерілетуді үйренесіз.",
    program: [
      { title: "1-модуль. Маркетинг негіздері", text: "Мақсатты аудиторияны анықтау." },
      { title: "2-модуль. SMM", text: "Instagram, TikTok платформаларында жылжыту." },
      { title: "3-модуль. SEO", text: "Іздеу жүйелерінде топ орындарға шығу." },
      { title: "4-модуль. Аналитика", text: "Науқанның нәтижесін өлшеу." }
    ]
  },
  {
    id: "python-beginners",
    title: "Python for Beginners",
    category: "web",
    level: "Бастаушы",
    price: 25000,
    rating: 4.6,
    reviews: 106,
    duration: "6 апта",
    lessons: 20,
    tag: "Python",
    summary: "Бағдарламалаудың негізгі логикасын Python тілінің мысалында нөлден меңгересіз.",
    program: [
      { title: "1-модуль. Синтаксис", text: "Айнымалылар, шарттар, циклдар." },
      { title: "2-модуль. Функциялар", text: "Модульдік ойлау, кітапханалар." },
      { title: "3-модуль. Жобалар", text: "Шағын консольдік қосымшалар." },
      { title: "4-модуль. Келесі қадам", text: "Frontend/Data бағыттарына дайындық." }
    ]
  },
  {
    id: "project-management",
    title: "Project Management",
    category: "business",
    level: "Кәсіби",
    price: 28000,
    rating: 4.7,
    reviews: 200,
    duration: "2 ай",
    lessons: 28,
    tag: "Agile · Scrum",
    summary: "Agile және Scrum әдістемелерін қолданып IT жобаларды басқаруды үйренесіз.",
    program: [
      { title: "1-модуль. Негіздер", text: "Жоба өмірлік циклі, рөлдер." },
      { title: "2-модуль. Agile/Scrum", text: "Спринт жоспарлау, backlog." },
      { title: "3-модуль. Құралдар", text: "Jira, Trello, Notion." },
      { title: "4-модуль. Практика", text: "Нақты команда жобасын жүргізу." }
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    category: "web",
    level: "Орта деңгей",
    price: 40000,
    rating: 4.6,
    reviews: 58,
    duration: "3 ай",
    lessons: 36,
    tag: "React Native",
    summary: "React Native негізінде iOS пен Android-қа арналған қосымша жасауды үйренесіз.",
    program: [
      { title: "1-модуль. Негіздер", text: "React Native компоненттері, навигация." },
      { title: "2-модуль. State", text: "Күй басқару, API интеграциясы." },
      { title: "3-модуль. Дизайн", text: "Мобильді интерфейс құру." },
      { title: "4-модуль. Жариялау", text: "App Store/Play Market-ке шығару." }
    ]
  },
  {
    id: "graphic-design-basics",
    title: "Graphic Design Basics",
    category: "design",
    level: "Бастаушы",
    price: 26000,
    rating: 4.6,
    reviews: 54,
    duration: "5 апта",
    lessons: 18,
    tag: "Adobe · Canva",
    summary: "Композиция, түс теориясы және Adobe Illustrator/Canva құралдарын меңгересіз.",
    program: [
      { title: "1-модуль. Негіздер", text: "Композиция, түс, шрифт." },
      { title: "2-модуль. Құралдар", text: "Illustrator, Canva." },
      { title: "3-модуль. Брендинг", text: "Логотип, фирмалық стиль." },
      { title: "4-модуль. Портфолио", text: "Жобаларды жинақтау." }
    ]
  }
];

function formatPrice(v){
  return new Intl.NumberFormat("ru-RU").format(v) + " ₸";
}
