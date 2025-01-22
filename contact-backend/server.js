const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

// Load environment variables
const emailUser = process.env.EMAIL_USER;
const emailPass = process.env.EMAIL_PASS;
const receiverEmail = process.env.RECEIVER_EMAIL;

console.log('Email User:', emailUser); // For testing purposes only; remove in production.

const app = express();
const PORT = process.env.PORT || 5000; // Use the PORT environment variable assigned by Render

app.use(cors());
app.use(bodyParser.json());

app.post('/send', async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'Gmail', // Or your email service
            auth: {
                user: emailUser,
                pass: emailPass,
            },
        });

        await transporter.sendMail({
            from: email,
            to: receiverEmail,
            subject: `New message from ${name}`,
            text: message,
        });

        res.status(200).json({ success: 'Message sent successfully!' });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send the message. Try again later.' });
    }
});

// Listen on PORT and bind to 0.0.0.0 for external access
app.listen(PORT, '0.0.0.0', () => console.log(`Server running on port ${PORT}`));