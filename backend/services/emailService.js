const sgMail = require('@sendgrid/mail');
sgMail.setApiKey('a7_rABgoTj28i1fl_160ag');

function sendRegistrationNotification(hrData) {
  const msg = {
    to: 'developer@example.com',
    from: 'admin@example.com',
    subject: 'New HR User Registration',
    text: `A new HR user has registered with the following details: ${JSON.stringify(hrData)}`,
  };
  sgMail.send(msg)
    .then(() => console.log('Email sent successfully'))
    .catch((error) => console.error(error));
}

module.exports = {
  sendRegistrationNotification,
};
