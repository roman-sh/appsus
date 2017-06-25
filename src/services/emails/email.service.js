let emails = [];

function getEmails() {
  return new Promise(resolve => {
    if (emails.length) {
      resolve(emails);
    }
    else {
      setTimeout(() => {
        emails = generateEmails();
        resolve(emails);
      }, 500);
    }
  });
}

export default {
  getEmails
}

function generateEmails() {
  const subject = [
    'subject1', 'subject2', 'subject3', 'subject4', 'subject5', 'subject6','subject7'
  ];

  return subject.map(generateEmail);
}

function generateEmail(subject, i) {
  return {
    id: i + 1,
    from: `Author ${i+1}`,
    subject: `${subject}`,
    body: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sit amet iaculis nibh. Cras velit sem, tempor sit amet facilisis vitae, mattis et neque. Suspendisse sit amet est vitae tellus finibus posuere vel ut quam. Duis porta nec enim sed eleifend. Nulla facilisi. Mauris dignissim vitae tortor sit amet pulvinar.`,
    date: 1231231231
  }
}
