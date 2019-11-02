import { database } from 'firebase';

const writeUserData = (contact) => {
//   console.log('contact: ', contact);
  const contactsRef = database().ref('/contacts/' + contact.name);

  //   contactsRef.on('value', snapshot => {
  contactsRef.once('value', snapshot => {
    // console.log('snapshot: ', snapshot);
  });

  contactsRef.set({
    //   contactsRef.update({
    name: contact.name,
    email: contact.email,
    subject: contact.subject,
    message: contact.message
  }, err => {
    if (err) {
      console.log('err: ', err);
    } else {
      console.log('write succeed!!!');
    }
  });
};

export {
  writeUserData
};
