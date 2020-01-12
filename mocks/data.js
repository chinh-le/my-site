const professionals = {
  videotron: {
    order: 1,
    label: 'videotron',
    image: 'videotron-mobility-640-en.jpg',
    url: 'https://www.videotron.com/',
    languages: 'AngularJS (v1.5), jQuery, Java, Oracle Commerce, GTM, GA'
  },
  clubillico: {
    order: 2,
    label: 'clubillico',
    image: 'clubillico-640-en.jpg',
    url: 'https://clubillico.videotron.com/',
    languages: 'AngularJS (v1.6), Java, GTM, GA'
  },
  illicoweb: {
    order: 3,
    label: 'illicoweb',
    image: 'illicoweb-640-en.jpg',
    url: 'https://illicoweb.videotron.com/',
    languages: 'AngularJS (v1.6), jQuery, Java, GTM, GA'
  }
};

const personals = {
  stockTrader: {
    order: 1,
    label: 'Stock Trader',
    image: 'stock-trader-vue-640.png',
    url: 'https://stock-trader-vue-6bd8c.web.app/',
    languages: 'Vue 2, Google Web Services, Bootstrap 4'
  },
  burgerBuilder: {
    order: 2,
    label: 'Burger Builder',
    image: 'burger-builder-react-640.png',
    url: 'https://burger-builder-react-8801d.web.app/',
    languages: 'React 16, Google Web Services, Bootstrap 4'
  },
  recipeBook: {
    order: 3,
    label: 'Recipe Book',
    image: 'recipe-book-ng-640.png',
    url: 'https://recipe-book-ng-183d5.firebaseapp.com/',
    languages: 'Angular 7, Google Web Services, Bootstrap 4'
  }
  /* comingSoon: {
    order: 4,
    image: null,
    url: null,
    label: 'coming-soon' // REM - label value requires to be kebab-case since it is used as key for i18n - see skills.ratings (@/i18n/locales/*.json) and its use in @/components/base/BaseDotSet.vue
  } */
};

const certificates = {
  vue2: {
    order: 1,
    header: 'Vue 2 - The Complete Guide',
    url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    image: 'UC-KKDCJ1EE-640.jpg',
    alt: 'Vue 2 certificate',
    location: 'Udemy.com'
  },
  react16: {
    order: 2,
    header: 'React 16 - The Complete Guide',
    url: 'https://udemy.com/course/react-the-complete-guide-incl-redux/',
    image: 'UC-AV9URVXK-640.jpg',
    alt: 'React 16 certificate',
    location: 'Udemy.com'
  },
  angular: {
    order: 3,
    header: 'Angular 7 - The Complete Guide',
    url: 'https://udemy.com/course/the-complete-guide-to-angular-2/',
    image: 'UC-RFUPPOFP-640.jpg',
    alt: 'Angular 7 certificate',
    location: 'Udemy.com'
  },
  bootstrap4: {
    order: 4,
    header: 'Bootstrap 4 - Bootcamp',
    url: 'https://udemy.com/course/bootstrap-4-bootcamp/',
    image: 'UC-SCGX1MCT-640.jpg',
    alt: 'Bootcamp 4 certificate',
    location: 'Udemy.com'
  },
  softwareDev: {
    order: 5,
    header: 'Software Development',
    // url: '',
    // image: '',
    // alt: 'McGill University',
    location: 'McGill University'
  },
  webDesign: {
    order: 6,
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
