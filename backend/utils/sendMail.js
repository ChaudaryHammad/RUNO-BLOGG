const nodemailer = require('nodemailer');

// Function to send email
const sendMail = async ({ email, username, otp }) => {
    try {
        // Create Nodemailer transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Construct email message
        const mailOptions = {
            from: 'ch.hammadbrw01@gmail.com',
            to: email,
            subject: 'OTP for Account Verification',
            html: `
                <p>Hi ${username},</p>
                <p>Your OTP for verification is: <strong>${otp}</strong></p>
                <p>Please use this OTP to verify your account.</p>
            `
        };

        // Send email
        await transporter.sendMail(mailOptions);

        console.log('OTP email sent successfully');
    } catch (error) {
        console.error('Error sending OTP email:', error);
        throw new Error('Failed to send OTP email');
    }
};

module.exports = sendMail;
