import { database } from 'firebase';

const writeUserData = (contact) => {
  /*
    - Firebase Database constraint: Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]""
      - Converting dots (.) in email address into '%'
  */
  // const emailAddConverted = (contact.email).replace(/\./g, '+');
  // console.log('emailAddConverted: ', emailAddConverted);
  // const contactsRef = database().ref('/contacts/' + emailAddConverted);

  // ./src/functions/index.js: exports.sendingMail = functions.database.ref('/contacts/{pushId}')
  const contactsRef = database().ref('/contacts').push(); // auto-generate unqiue key

  return new Promise((resolve, reject) => {
    contactsRef.set({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message

    }, err => {
      if (err) {
        // console.log('TLC: writeUserData -> err', err);
        reject(Error(err));
      } else {
        // console.log('TLC: writeUserData -> SUCCESS');
        resolve('write SUCCESS');
      }
    });
  });
};

export {
  writeUserData
};
