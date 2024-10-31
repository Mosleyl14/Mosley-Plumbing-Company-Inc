const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// Email configuration
const transporter = nodemailer.createTransport({
    service: 'Gmail', // or any other service you use
    auth: {
        user: 'mosleylaura95@gmail.com',
        pass: 'your-email-password'
    }
});

app.post('/send-email', (req, res) => {
    const mailOptions = {
        from: req.body.email,
        to: 'mosleylaura95@gmail.com',
        subject: `Contact Form Message from ${req.body.name}`,
        text: req.body.message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).send('Error: ' + error.toString());
        }
        res.send('Email sent successfully: ' + info.response);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});
