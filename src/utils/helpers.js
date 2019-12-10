// filter (not to include private route) and sort view routes
const viewsFilteredAndSorted = (views) => {
  return views.filter(view => {
    // console.log('TLC: created -> view', view);
    return !view.private;
  }).slice((viewA, viewB) => viewA.order - viewB.order);
};

// source: https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
const convertArrayToObject = (array, key) => 
  array.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
// Even concise
// REM - error: Uncaught ReferenceError: item is not defined
// const convertArrayToObject = (array, key) => array.reduce((acc, curr) =>(acc[item[key]] = item, acc), {});
// Basically everything inside parentheses will be evaluated, only the last value used will be only returned.


// https://gist.github.com/gordonbrander/2230317
const generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};

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
  viewsFilteredAndSorted,
  convertArrayToObject,
  generateUniqueId,
  wideScreenMaxWidth,
  windowResizeHandler,
  setPosX,
  emailRegex,
  // loadFonts,
  scrollTo
};
