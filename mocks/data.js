const professionals = {
  videotron: {
    order: 1,
    label: 'Videotron app',
    image: 'videotron-mobility.png',
    url: 'https://www.videotron.com/'
  },
  clubillico: {
    order: 2,
    label: 'Club illico app',
    image: 'clubillico.png',
    url: 'https://clubillico.videotron.com/'
  },
  illicoweb: {
    order: 3,
    label: 'illico TV app',
    image: 'illicoweb.png',
    url: 'https://illicoweb.videotron.com/'
  }
};

const personals = {
  comingSoon: {
    order: 1,
    image: null,
    url: null,
    label: 'coming soon'
  }
};

const certificates = {
  vuejs2: {
    order: 1,
    header: 'VueJS2 - The Complete Guide',
    url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    image: 'UC-KKDCJ1EE.jpg',
    alt: 'VueJS 2 certificate',
    location: 'Udemy.com'
  },
  react16: {
    order: 2,
    header: 'Reacte 16 - The Complete Guide',
    url: 'https://udemy.com/course/react-the-complete-guide-incl-redux/',
    image: 'UC-AV9URVXK.jpg',
    alt: 'Reacte 16 certificate',
    location: 'Udemy.com'
  },
  angular: {
    order: 3,
    header: 'Angular - The Complete Guide',
    url: 'https://udemy.com/course/the-complete-guide-to-angular-2/',
    image: 'UC-RFUPPOFP.jpg',
    alt: 'Angular certificate',
    location: 'Udemy.com'
  },
  bootstrap4: {
    order: 4,
    header: 'Bootstrap 4 - Bootcamp',
    url: 'https://udemy.com/course/bootstrap-4-bootcamp/',
    image: 'UC-SCGX1MCT.jpg',
    alt: 'Bootcamp 4 certificate',
    location: 'Udemy.com'
  },
  softwareDev: {
    order: 5,
    header: 'Software Development',
    // url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    // image: 'UC-KKDCJ1EE.jpg',
    // alt: 'VueJS 2 certificate',
    location: 'MeGill University'
  },
  webDesign: {
    order: 6,
    header: 'Web Design',
    // url: 'https://udemy.com/course/vuejs-2-the-complete-guide/',
    // image: 'UC-KKDCJ1EE.jpg',
    // alt: 'VueJS 2 certificate',
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
    name: 'VueJS',
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
    name: 'Javascript, JQuery',
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

const ratings = {
  1: 'basic',
  2: 'average',
  3: 'good',
  4: 'very good',
  5: 'expert'
};

export {
  professionals,
  personals,
  scholarships,
  certificates,
  skills,
  ratings
};
