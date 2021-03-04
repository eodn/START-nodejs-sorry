const nodemailer = require('nodemailer');
const eemail = {
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "90f75108cdacec",
          pass: "63a57e66c0aaf0"
        }
      };

const send = async (option) => {
    nodemailer.createTransport(email).sendMail(option, (error, info) =>{
        if(error) {
            console.log(error);
        }else {
            console.log(info);
            return info.response;
        }
    });
};

let email_data = { 
    from: 's20063@gsm.sh.kr',
    to: 's20063@gsm.sh.kr',
    subject: '테스트 메일 입니다.',
    text: 'nodejs 한시간 끝내기'
}

send(email_data);