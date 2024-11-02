const sibiAPI = require('sib-api-v3-sdk');
const clint = sibiAPI.ApiClient.instance;
require('dotenv').config();

const apikey = clint.authentications['api-key'];
apikey.apiKey = process.env.SOCIO; // Ensure this line is correct

const SendingBlue = async (toEmail, toname, subject, htmlcontent) => {
    const apiInstance = new sibiAPI.TransactionalEmailsApi();
    const sendsmtpEmail = {
        to: [{ email: toEmail, name: toname }],
        sender: { email: 'sangameshlingshetty9819@gmail.com', name: 'Socio1' },
        subject,
        htmlContent: htmlcontent, // Ensure this is correctly named
    };

    try {
        const responseData = await apiInstance.sendTransacEmail(sendsmtpEmail);
        console.log("Email sent successfully:", responseData);
        return responseData;
    } catch (error) {
        console.log("Error sending email:", error);
        throw error;
    }
};

module.exports = SendingBlue;
