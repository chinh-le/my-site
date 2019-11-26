import { database } from 'firebase';

const writeUserData = (contact) => {
  // console.log('contact: ', contact);

  /*
    - Firebase Database constraint: Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]""
      - Converting dots (.) in email address into '%'
  */
  // const emailAddConverted = (contact.email).replace(/\./g, '+');
  // console.log('emailAddConverted: ', emailAddConverted);
  // const contactsRef = database().ref('/contacts/' + emailAddConverted);

  // ./src/functions/index.js: exports.sendingMail = functions.database.ref('/contacts/{pushId}')
  const contactsRef = database().ref('/contacts').push(); // auto-generate unqiue key

  /* contactsRef.once('value', snapshot => {
    console.log('TLC: writeUserData -> snapshot.val()', snapshot.val());
  }); */

  return new Promise((resolve, reject) => {
    contactsRef.set({
      name: contact.name,
      email: contact.email,
      subject: contact.subject,
      message: contact.message

    }, err => {
      if (err) {
        reject(Error(err));
      } else {
        resolve('write SUCCESS');
      }
    });
  });
};

export {
  writeUserData
};
