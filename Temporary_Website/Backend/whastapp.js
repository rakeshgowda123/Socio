const { Body } = require("sib-api-v3-sdk");
const twillio = require("twilio");

require("dotenv").config();

const accountSID = process.env.accountSID; // Correct spelling
const authToken = process.env.authToken;
const client = twillio(accountSID, authToken);

const sendWhatsApp = async (tonumber, name, messageContent) => {

    const testAPIKey = async () => {
        try {
            // Attempt to retrieve your account details from Twilio
            const account = await client.api.accounts(accountSID).fetch();
            console.log("Twilio API Key is working. Account SID:", account.sid);
        } catch (error) {
            console.error("Error: Twilio API Key is invalid or not working:", error.message);
        }
    };
    
    // Run the test
    await testAPIKey();

  try {

    const formattedToNumber = `whatsapp:${tonumber.trim()}`; // Only this prefix is needed
    console.log("Sending message to:", formattedToNumber);
    
    const message = await client.messages.create({
        body: `Hello ${name}, ${messageContent}`,
        from: "whatsapp:+14155238886", // Ensure 'whatsapp:' prefix is correct
        to: formattedToNumber, 
    });

    console.log("WhatsApp message sent successfully", message.sid);
    return message;

    // console.log("Account SID:", process.env.accountSID);
    // console.log("Auth Token:", process.env.authToken ? "Loaded" : "Not Loaded");

    console.log("whastapp msg sent successfully", message.sid);
    return message;
  } catch (error) {
    console.error("error while sending whatsapp msg", error);
    throw error;
  }
};

module.exports = sendWhatsApp;
