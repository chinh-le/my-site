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

  contactsRef.set({
    name: contact.name,
    email: contact.email,
    subject: contact.subject,
    message: contact.message
  }, err => {
    if (err) {
      console.error(err);
    } else {
      console.log('Write: SUCCESS!!!');
    }
  });
};

export {
  writeUserData
};
