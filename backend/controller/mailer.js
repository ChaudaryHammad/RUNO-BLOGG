const nodemailer = require('nodemailer');
const mailgen = require('mailgen');



const sendMail = (req,res)=>{
    const {email,username,subject,text} = req.body;
    let config={
        service:"gmail",
        auth:{
            user:process.env.SMTP_USER,
            pass:process.env.SMTP_PASS
        }
    }

    let transporter = nodemailer.createTransport(config)



    let MailGenerator = new mailgen({
        theme:'default',
        product:{
            name:'Runo',
            link:'http://localhost:3000/'
        }
    })

    let response = {
        body:{
            name:username,
            intro:"Use this One time OTP for verification "+ text ,
            outro:"Need help, or have questions? Just reply to this email, we'd love to help."
        }
    }

    let mail = MailGenerator.generate(response)

    let message={
        from : process.env.SMTP_USER,
        to:email,
        subject:subject,
        html:mail
    }

    transporter.sendMail(message,(error,info)=>{
        if(error){
            return res.status(400).json({message:"Error in sending mail",error:error})
        }
        return res.status(200).json({message:"Mail sent successfully",info:info})
    })
}


module.exports ={
    sendMail
}