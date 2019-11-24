const scrollTo = (position) => {
  window.scroll({
    left: position.x,
    top: position.y
    // behavior: 'smooth'
  });
};

export {
  scrollTo
};
