// https://cheatsheetseries.owasp.org/cheatsheets/Cross_Site_Scripting_Prevention_Cheat_Sheet.html

const htmlEscaping = (input) => {
  // & --> &amp;
  // < --> &lt;
  // > --> &gt;
  // " --> &quot;
  // ' --> &#x27;
  // / --> &#x2F;
  const map = {
    '&': '&amp',
    '<': '&lt',
    '>': '&gt',
    '"': '&quot',
    "'": '&#x27',
    '/': '&#x2F'
  };
  const reg = /[&<>"'/]/ig;

  return input.replace(reg, (match) => (map[match]));
};

export {
  htmlEscaping
};
