let emails = [];

function getEmails() {
  // return new Promise(resolve => {
  //   // simple caching mechanism
  //   if (emails.length) {
  //     resolve(emails);
  //   }
  //   else {
  //     setTimeout(() => {
  //       return emails = generateEmails();
  //
  //       // emails = emails.map(email => {
  //       //   email.quantity = 0;
  //       //   return e;
  //       // })
  //
  //       //resolve(books);
  //     }, 500);
  //   }
  // });
  return generateEmails()
}

export default {
  getEmails
}


// Used to create local data with no AJAX

function generateEmails() {
  const titles = ['Title1', 'Title2', 'Title3', 'Title4', 'Title5', 'Title6'];

  return titles.map(generateEmail);
}

function generateEmail(title, i) {
  return {
    id: i + 1,
    title: `${title}`,
    desc: `${title} lorem  ipsum dkhd daklhd dakhdk dakhdk da`,
    author: `Author ${i}`
  }
}
