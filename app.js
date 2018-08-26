var express = require('express')
var app = express()
var bodyParser = require('body-parser')
/////////////////////////////////////////////////////
'use strict';
const nodemailer = require('nodemailer');


/////////////////////////////////////////////////////



app.set("view engine", "ejs");
app.use(express.static("CSS"));
app.use(express.static("img"));
app.use(express.static("files"));
app.use(bodyParser.urlencoded({extended:true}))


app.get('/', function (req, res) {
  res.render("home")
})
app.get('/hobby', function (req, res) {
  res.render("hobby")
})
app.get('/player', function (req, res) {
  res.render("player")
})

app.get('/kontakt', function (req, res) {
  res.render("kontakt")
})

app.get('/dziekuje', function (req, res) {
  res.render("dziekuje")
})

app.post('/sendform', function (req, res) {
  var tel=req.body.tel;
  var email=req.body.email;
  var firma=req.body.firma;
  var info=req.body.info;
   
  var data="<b>Firma: </b>"+ firma + ",<br><b>Tel: </b>"+ tel +",<br> <b>Email:</b> "+email +",<br> <b>wiadomość:</b> "+info;
/////////////////////////////////////////////////////
nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
            user: "stmpservermain@gmail.com", // generated ethereal user
            pass: "Kurwamac1" // generated ethereal password
        }
    });
    // setup email data with unicode symbols
    let mailOptions = {
        from: 'portfolio@gmail.com', // sender address
        to: "pawel.walasiewicz@gmail.com", // list of receivers
        subject: 'Pytanie o PORTFOLIO', // Subject line
        // text: 'dane', // plain text body
        html: data // html body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
});

/////////////////////////////////////////////////////
 res.redirect("/dziekuje");
})
app.listen(80);
