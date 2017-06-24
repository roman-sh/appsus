let emails = [];

function getEmails() {
  return generateEmails()
}

export default {
  getEmails
}


// Used to create local data with no AJAX

function generateEmails() {
  const subject = ['subject1', 'subject2', 'subject3', 'subject4', 'subject5', 'subject6'];

  return subject.map(generateEmail);
}

function generateEmail(subject, i) {
  return {
    id: i + 1,
    from: `Author ${i}`,
    subject: `${subject}`,
    body: `${subject} lorem  ipsum dkhd daklhd dakhdk dakhdk da`,
    date: 1231231231
  }
}
