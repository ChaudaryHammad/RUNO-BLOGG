const nodemailer = require('nodemailer');

// Function to send email
const sendMail = async (subject,message,sent_to,sent_from ) => {
    try {
        // Create Nodemailer transporter using Gmail SMTP
        const transporter = nodemailer.createTransport({
    
            service: "gmail",
            host: process.env.SMTO_HOST,
            port:587,
             auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS
            }
        });

        // Construct email message
        const mailOptions = {
            from: sent_from,
            to: sent_to,
            subject: subject,
            html: message,

        };

        // Send email
        await transporter.sendMail(mailOptions, function(err,info){
            if(err){
               console.log(err)
            }
            else{
                console.log(info)
            }
        });

       
    } catch (error) {
       
        throw new Error('Failed sending email');
    }
};

module.exports = sendMail;
