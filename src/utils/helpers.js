// import store from '@/store';
import { _appConfig } from '../config';

// get data async with number of retry
import { _getCollection } from '@/firebase';
const _getData = async (collection) => {
  let error;

  for (let i = 0; i < _appConfig.appRequestRetry; i++) {
		// console.log('TLC: getData -> i', i);
    try {
      return await _getCollection(collection);
    }
    catch (err) {
			// console.log('TLC: getData -> err', err);
      error = err;
    }
  }

  throw error;
};

// sort array by key
const _arraySortByKey = (arr, k) => {
  return arr.sort((a, b) => a[k] - b[k]);
};

// filter (not to include private route) and sort view routes
const _viewsFilterPublicAndSort = (views, k) => {
  const filteredViews = views.slice().filter(view => !view.private);
  return _arraySortByKey(filteredViews, k);
};

// source: https://dev.to/afewminutesofcode/how-to-convert-an-array-into-an-object-in-javascript-25a4
const _convertArrayToObject = (array, key) => 
  array.reduce((acc, curr) => {
    acc[curr[key]] = curr;
    return acc;
  }, {});
// Even concise
// REM - error: Uncaught ReferenceError: item is not defined
// const _convertArrayToObject = (array, key) => array.reduce((acc, curr) =>(acc[item[key]] = item, acc), {});
// Basically everything inside parentheses will be evaluated, only the last value used will be only returned.


// https://gist.github.com/gordonbrander/2230317
const _generateUniqueId = () => {
    return Math.random().toString(36).substr(2, 9);
};

/*
for wide screen larger than 1200px - mostly fluid pattern: max-width: $breakpoint-xl (1200px)
  - set inline style left position (h1/heading1 of the page content) to have it stick to most left aligning to the logo and not further to the left
  - set inline style right position (navigation dots/pageLinks of the page content) to have it stick to most right aligning to the hamburger button and not further to the right
*/
const wideScreenMaxWidth = 1200; // $breakpoint-xl

const _setStyleInlineJustify = (align) => {
  let styleInline;

  if (window.innerWidth <= wideScreenMaxWidth) {
    styleInline = null;
  } else {
    styleInline = `${align}: ${(window.innerWidth - wideScreenMaxWidth) / 2}px`;
  }

  return styleInline;
};

const _emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

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
const _scrollTo = (el, left, top) => {
	// // // console.log('TLC: _scrollTo -> el', el);
	// // // console.log('TLC: _scrollTo -> top', top);
	// // // console.log('TLC: _scrollTo -> left', left);
  el.scroll({
    left: left,
    top: top
    // behavior: 'smooth'
  });
};

const _getImgContextPath = (imgPath) => {
	// console.log('TLC: _getImgContextPath -> imgPath', imgPath);
  return require('@/assets/' + imgPath) || null;
};

export {
  _getData,
  _arraySortByKey,
  _viewsFilterPublicAndSort,
  _convertArrayToObject,
  _generateUniqueId,
  _setStyleInlineJustify,
  _emailRegex,
  // loadFonts,
  _scrollTo,
  _getImgContextPath
};
