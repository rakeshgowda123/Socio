const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const UserModel = require("../modules/user");

const imgurl = "../";

const sendEmail = require("../SendingBlue");
const sendWhatsApp = require("../whastapp");

const signup = async (req, res) => {
  try {
    const { name, email, password, number } = req.body;
    const user = await UserModel.findOne({ email });
    if (user) {
      return res
        .status(400)
        .json({ message: "user already exit u can login", success: false });
    }

    // const formattedNumber = `whatsapp:+${number}`; // Make sure number includes country code and 'whatsapp:' prefix

    // // Uncomment below to send WhatsApp message
    // try {
    //   const messageContent = `Hello ${name}, welcome to our platform!`;
    //   await sendWhatsApp(formattedNumber, name, messageContent);
    //   console.log("WhatsApp message sent successfully");
    // } catch (whatsappError) {
    //   console.error("Error while sending WhatsApp message:", whatsappError);
    // }


    await sendEmail(
      email,
      name,
      "Welcome to Socio Platform!",
      `
                <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
                    <h1>Welcome to Our Socio Platform!</h1>
                    <img src="https://edsurge.imgix.net/uploads/post/image/6523/Community-1444864242.jpg?auto=compress%2Cformat&w=3000&h=1215&fit=crop" alt="Welcome Image" style="width: 100%; max-width: 600px; height: auto;">
                    <p>Dear ${name},</p>
                    <p>We are thrilled to have you as part of our community. Your journey towards knowledge and growth starts here, and we’re excited to support you every step of the way.</p>
                    <p>At Socio, we believe in the power of learning and collaboration. Explore our wide range of resources, connect with fellow learners, and take advantage of the tools we offer to enhance your educational experience.</p>
                    <p>If you have any questions or need assistance, feel free to reach out to our support team. We're here to help!</p>
                    <p>Thank you for joining us, and welcome aboard!</p>
                    <p>Warm regards,</p>
                    <p>The Socio Team</p>
                </div>
                `
    );
    console.log(sendEmail);

    const usemodel = new UserModel({ name, email, password, number });
    usemodel.password = await bcrypt.hash(password, 10);
    await usemodel.save();

    res.status(201).json({ message: "signup successfull", success: true });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await UserModel.findOne({ email });
    const errromsg = "Please register to Socio.";
    if (!user) {
      return res.status(403).json({ message: errromsg, success: false });
    }
    const ispassequal = await bcrypt.compare(password, user.password);
    if (!ispassequal) {
      return res
        .status(403)
        .json({
          message: "password not matching..check your password",
          success: false,
        });
    }

    const jwtToken = jwt.sign(
      { email: user.email, _id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.status(200).json({
      message: "login successfull",
      success: true,
      jwtToken,
      email,
      name: user.name,
    });
  } catch (error) {
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

module.exports = {
  signup,
  login,
};
