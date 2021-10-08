import * as nodemailer from 'nodemailer';

export class GMailService {

    constructor() {
        const username = 'apikey';
        const password = process.env.SENDGRID_API_KEY;
        const mailhost = process.env.MAIL_HOST;
        this._transporter = nodemailer.createTransport(`smtps://${username}:${password}@${mailhost}`);
    }

    sendMail(to, subject, content, attachments = null) {

        const mailFrom = process.env.MAIL_FROM_ADDRESS;

        let options = {
            from: mailFrom,
            to: to,
            subject: subject,
            // text: content
            html: content,
            attachments: attachments
        };

        if(attachments !== null) options = { ...options, attachments };

        return new Promise((resolve, reject) => {
            this._transporter.sendMail(options, (error, info) => {
                if (error) {
                    console.log(`error.......: ${error}`);
                    reject(error);
                } else {
                    console.log(`Message Sent ${info.response}`);
                    resolve({ success: true, message: info.response });
                }
            });
        });
    }
}
