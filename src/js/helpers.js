/*
for wide screen larger than 1200px - mostly fluid pattern: max-width: $breakpoint-xl (1200px)
  - set inline style left position (h1/heading1 of the page content) to have it stick to most left aligning to the logo and not further to the left
  - set inline style right position (navigation dots/pageLinks of the page content) to have it stick to most right aligning to the hamburger button and not further to the right
*/
const wideScreenMaxWidth = 1200; // $breakpoint-xl

/* const resizeHandler = () => {

}; */

const windowResizeHandler = (evt, pos) => {
  let styleInline;
  if (evt.target.innerWidth <= wideScreenMaxWidth) {
    styleInline = null;
  } else {
    styleInline = `${pos}: ${(window.innerWidth - wideScreenMaxWidth) / 2}px`;
  }

  return styleInline;
};

const setPosX = (pos) => {
  let styleInline;
  if (window.innerWidth > wideScreenMaxWidth) {
    styleInline = `${pos}: ${(window.innerWidth - wideScreenMaxWidth) / 2}px`;
  } else {
    styleInline = null;
  }

  return styleInline;
};

const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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
  console.log('TLC: scrollTo -> position', position);
  window.scroll({
    left: position.x,
    top: position.y
    // behavior: 'smooth'
  });
};

export {
  wideScreenMaxWidth,
  windowResizeHandler,
  setPosX,
  emailRegex,
  // loadFonts,
  scrollTo
};
