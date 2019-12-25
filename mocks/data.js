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
    languages: 'Vue, Google Firebase'
  },
  burgerBuilder: {
    order: 2,
    label: 'Burger Builder',
    image: 'burger-builder-react-640.png',
    url: 'https://burger-builder-react-8801d.web.app/',
    languages: 'React, Google Firebase'
  },
  recipeBook: {
    order: 3,
    label: 'Recipe Book',
    image: 'recipe-book-ng-640.png',
    url: 'https://recipe-book-ng-183d5.firebaseapp.com/',
    languages: 'Angular, Google Firebase'
  }
  /* comingSoon: {
    order: 4,
    image: null,
    url: null,
    label: 'coming-soon' // REM - label value requires to be kebab-case since it is used as key for i18n - see skills.ratings (@/i18n/locales/*.json) and its use in @/components/base/BaseDotSet.vue
  } */
};

const certificates = {
  vuejs2: {
    order: 1,
    header: 'Vue 2 - The Complete Guide',
    url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    image: 'UC-KKDCJ1EE-640.jpg',
    alt: 'VueJS 2 certificate',
    location: 'Udemy.com'
  },
  react16: {
    order: 2,
    header: 'React 16 - The Complete Guide',
    url: 'https://udemy.com/course/react-the-complete-guide-incl-redux/',
    image: 'UC-AV9URVXK-640.jpg',
    alt: 'Reacte 16 certificate',
    location: 'Udemy.com'
  },
  angular: {
    order: 3,
    header: 'Angular - The Complete Guide',
    url: 'https://udemy.com/course/the-complete-guide-to-angular-2/',
    image: 'UC-RFUPPOFP-640.jpg',
    alt: 'Angular certificate',
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
  vuejs: {
    order: 1,
    name: 'Vue 2',
    rate: 2
  },
  react: {
    order: 2,
    name: 'React 16',
    rate: 2
  },
  angular: {
    order: 3,
    name: 'Angular, AngularJS',
    rate: 2
  },
  bootstrap: {
    order: 4,
    name: 'Bootstrap 4',
    rate: 2
  },
  google: {
    order: 5,
    name: 'Google Firebase, Google Cloud Platform',
    rate: 2
  },
  js: {
    order: 6,
    name: 'Javascript',
    rate: 3
  },
  css: {
    order: 7,
    name: 'CSS, Sass, Less',
    rate: 4
  },
  html: {
    order: 8,
    name: 'HTML',
    rate: 4
  },
  git: {
    order: 9,
    name: 'Git, Subversion',
    rate: 3
  },
  npm: {
    order: 10,
    name: 'NPM, Yarn, Webpack, Gulp, Grunt',
    rate: 3
  },
  others: {
    order: 11,
    name: 'Java, PHP, Smarty',
    rate: 1
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
