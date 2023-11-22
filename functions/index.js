const functions = require('firebase-functions');
const admin = require('firebase-admin');
const nodemailer = require('nodemailer');
admin.initializeApp();

/**
* Here we're using Gmail to send 
*/
let transporter = nodemailer.createTransport({
    service: 'gmail',
    secure: true,
    auth: {
        user: 'hamoudidigital@gmail.com',
        pass: 'lqec metb btum legp'
    }
});

exports.sendMailWeb = functions.database
    .ref('/posts/{postsId}')
    .onCreate((snapshot, event) => {

            const postsId = event.params.postsId;

            const name = snapshot.val().name;
            const email = snapshot.val().email;
            const phone = snapshot.val().phone;
            const company = snapshot.val().company;
            const message = snapshot.val().message;
    
            const mailOptions = {
                from: name + ' <hussain@hamoudidigital.com>',
                to: 'hussain@hamoudidigital.com',
                subject: 'Web Contact Form',
                html: `<p>Name: ` + name + `</p>
                <p>Email: ` + email + `</p>
                <p>Phone: ` + phone + `</p>
                <p>Company: ` + company + `</p>
                <hr />
                <p>Message:  <br />` + message + `</p>      
                ` // email content in HTML
            };
      
            // returning result
            return transporter.sendMail(mailOptions);      
    });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });
