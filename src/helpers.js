const scrollTo = (position) => {
  window.scroll({
    left: position.x,
    top: position.y
    // behavior: 'smooth'
  });
};

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export {
  scrollTo,
  emailRegex
};
