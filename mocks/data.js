const professionals = {
  videotron: {
    order: 1,
    label: 'videotron',
    image: 'videotron-mobility-640-en.jpg',
    url: 'https://www.videotron.com/',
    languages: 'AngularJS (v1.5), jQuery, Java, Oracle Commerce'
  },
  clubillico: {
    order: 2,
    label: 'clubillico',
    image: 'clubillico-640-en.jpg',
    url: 'https://clubillico.videotron.com/',
    languages: 'AngularJS (v1.6), Java, Oracle'
  },
  illicoweb: {
    order: 3,
    label: 'illicoweb',
    image: 'illicoweb-640-en.jpg',
    url: 'https://illicoweb.videotron.com/',
    languages: 'AngularJS (v1.6), jQuery, Java'
  }
};

const personals = {
  pomodoroClock: {
    order: 1,
    label: 'Pomodoro Clock',
    image: 'pomodoro-clock.png',
    url: 'https://pomodoro-clock.chinhle.ca',
    languages: 'React 16, Redux, Bootstrap 4, Material UI, Sass'
  },
  calculator: {
    order: 2,
    label: 'Calculator',
    image: 'calculator.png',
    url: 'https://calculator.chinhle.ca',
    languages: 'React 16, Bootstrap 4, Sass'
  },
  drumMachine: {
    order: 3,
    label: 'Drum Machine',
    image: 'drum-machine.png',
    url: 'https://drum-machine.chinhle.ca',
    languages: 'React 16, Bootstrap 4, Sass'
  },
  markdownPreviewer: {
    order: 4,
    label: 'Markdown Previewer',
    image: 'markdown-previewer.png',
    url: 'https://markdown-previewer.chinhle.ca',
    languages: 'React 16, Bootstrap 4'
  },
  randomQuote: {
    order: 5,
    label: 'Random Quote',
    image: 'random-quote.png',
    url: 'https://random-quote.chinhle.ca',
    languages: 'React 16, Bootstrap 4, FontAwesome, Sass'
  },
  stockTrader: {
    order: 6,
    label: 'Stock Trader',
    image: 'stock-trader-vue-640.png',
    url: 'https://stock-trader-vue-6bd8c.web.app/',
    languages: 'Vue 2, Google Cloud Platform / Firebase, Bootstrap 4'
  },
  burgerBuilder: {
    order: 7,
    label: 'Burger Builder',
    image: 'burger-builder-react-640.png',
    url: 'https://burger-builder-react-8801d.web.app/',
    languages: 'React 16, Google Cloud Platform / Firebase, Bootstrap 4'
  },
  recipeBook: {
    order: 8,
    label: 'Recipe Book',
    image: 'recipe-book-ng-640.png',
    url: 'https://recipe-book-ng-183d5.firebaseapp.com/',
    languages: 'Angular 7, Google Cloud Platform / Firebase, Bootstrap 4'
  },
  /* comingSoon: {
    order: 4,
    image: null,
    url: null,
    label: 'coming-soon' // REM - label value requires to be kebab-case since it is used as key for i18n - see skills.ratings (@/i18n/locales/*.json) and its use in @/components/base/BaseDotSet.vue
  } */
};

const certificates = {
  fccFrontendLibraries: {
    order: 10,
    header: 'Front End Libraries',
    url: 'https://www.freecodecamp.org/learn#front-end-libraries',
    image: 'fcc-front-end-libraries-certificate.png',
    alt: 'Front End Libraries Certificate',
    location: 'freecodecamp.org',
    urlCert: 'https://www.freecodecamp.org/certification/chinh-le/front-end-libraries',
    languages: 'React, Redux, Bootstrap, Sass, jQuery'
  },
  fccApisMicroservices: {
    order: 9,
    header: 'APIs and Microservices',
    url: 'https://www.freecodecamp.org/learn/#apis-and-microservices',
    image: 'fcc-apis-microservices.png',
    alt: 'APIs and Microservices Certificate',
    location: 'freecodecamp.org',
    urlCert: 'https://www.freecodecamp.org/certification/chinh-le/apis-and-microservices',
    languages: 'NodeJS, MongoDB, Mongoose, NPM'
  },
  udyAwsServerlessIntro: {
    order: 8,
    header: 'AWS Serverless APIs & Apps - A Complete Introduction',
    url: 'https://www.udemy.com/course/aws-serverless-a-complete-introduction/',
    image: 'UC-032d5abc-610a-44c1-bbb4-ef8fad3b6680.jpg',
    alt: 'AWS Serverless APIs & Apps certificate',
    location: 'udemy.com'
  },
  fccJsAlgoDataStruct: {
    order: 7,
    header: 'Javascript Algorithms and Data Structures',
    url: 'https://www.freecodecamp.org/learn/#javascript-algorithms-and-data-structures',
    image: 'fcc-javascript-algorithms-and-data-structures.png',
    alt: 'Javascript Algorithms and Data Structures Certificate',
    location: 'freecodecamp.org',
    urlCert: 'https://www.freecodecamp.org/certification/chinh-le/javascript-algorithms-and-data-structures',
    languages: 'ES5, ES6, Regular Expression'
  },
  udyVue2: {
    order: 6,
    header: 'Vue 2 - The Complete Guide',
    url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    image: 'UC-KKDCJ1EE.jpg',
    alt: 'Vue 2 certificate',
    location: 'udemy.com'
  },
  udyReact16: {
    order: 5,
    header: 'React 16 - The Complete Guide',
    url: 'https://udemy.com/course/react-the-complete-guide-incl-redux/',
    image: 'UC-AV9URVXK.jpg',
    alt: 'React 16 certificate',
    location: 'udemy.com'
  },
  udyAngular: {
    order: 4,
    header: 'Angular 7 - The Complete Guide',
    url: 'https://udemy.com/course/the-complete-guide-to-angular-2/',
    image: 'UC-RFUPPOFP.jpg',
    alt: 'Angular 7 certificate',
    location: 'udemy.com'
  },
  udyBootstrap4: {
    order: 3,
    header: 'Bootstrap 4 - Bootcamp',
    url: 'https://udemy.com/course/bootstrap-4-bootcamp/',
    image: 'UC-SCGX1MCT.jpg',
    alt: 'Bootcamp 4 certificate',
    location: 'udemy.com'
  },
  softwareDev: {
    order: 2,
    header: 'Software Development',
    // url: '',
    // image: '',
    // alt: 'McGill University',
    location: 'McGill University'
  },
  webDesign: {
    order: 1,
    header: 'Web Design',
    // url: '',
    // image: '',
    // alt: 'Concordia University',
    location: 'Concordia University'
  }
};

const scholarships = {
  bertelsmann: {
    order: 1,
    header: 'Cloud Developer',
    url: 'https://www.udacity.com/course/cloud-developer-nanodegree--nd9990',
    image: 'Bertelsmann-2019@2x.jpg',
    alt: 'Bertelsmann scholarship',
    location: 'Udacity.com'
  }
};

const skills = {
  librairies: {
    order: 1,
    name: 'Vue 2, React 16, Angular 7, AngularJS, Bootstrap 4',
    rate: 3
  },
  google: {
    order: 2,
    name: 'Google Firebase/Cloud Platform',
    rate: 3
  },
  js: {
    order: 3,
    name: 'Javascript',
    rate: 4
  },
  css: {
    order: 4,
    name: 'CSS, Sass, Less, BEM',
    rate: 5
  },
  html: {
    order: 5,
    name: 'HTML',
    rate: 5
  },
  git: {
    order: 6,
    name: 'Git, Subversion',
    rate: 3
  },
  npm: {
    order: 7,
    name: 'NPM, Yarn, Webpack, Gulp, Grunt',
    rate: 3
  },
  tools: {
    order: 8,
    name: 'jQuery, Photoshop',
    rate: 3
  },
  api: {
    order: 9,
    name: 'Rest API, Ajax, JSON',
    rate: 2
  },
  others: {
    order: 10,
    name: 'Java, PHP, Smarty',
    rate: 2
  }
};

// REM - ratings values are keys for i18n - see skills.ratings (@/i18n/locales/*.json) and its use in @/components/base/BaseDotSet.vue
const ratings = {
  1: 'basic',
  2: 'average',
  3: 'good',
  4: 'very-good',
  5: 'expert'
};

const socialMedia = {
  linked: {
    order: 1,
    label: 'linkedin',
    image: 'linkedin-logo-black-sm.png',
    url: 'https://www.linkedin.com/in/chinh11/'
  },
  github: {
    order: 2,
    label: 'github',
    image: 'github-logo-black-sm.png',
    url: 'https://github.com/chinh-le/'
  },
  instagram: {
    order: 3,
    label: 'instagram',
    image: 'instagram-logo-black-sm.png',
    url: 'https://www.instagram.com/niusaul/'
  }
};

export {
  professionals,
  personals,
  scholarships,
  certificates,
  skills,
  ratings,
  socialMedia
};
