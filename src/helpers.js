
/* const loadFonts = async () => {
  const font = new FontFace('myfont', 'url(https://fonts.googleapis.com/css?family=Righteous)');
  // wait for font to be loaded
  await font.load();
  // add font to document
  document.fonts.add(font);
  // enable font with CSS class
  document.body.classList.add('fonts-loaded');
};
 */
const scrollTo = (position) => {
  window.scroll({
    left: position.x,
    top: position.y
    // behavior: 'smooth'
  });
};

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

export {
  // loadFonts,
  scrollTo,
  emailRegex
};
