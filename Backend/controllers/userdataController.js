const UserDataModel = require("../modules/UserData");

exports.userData = async (req, res) => {
  try {
    const {
      fullname,
      email,
      phoneNumber,
      gender,
      age,
      collegeName,
      currentEducation,
      stream,
      graduationYear,
      internships,
      certifications,
      technicalSkills,
      softSkills,
      languages,
      portfolio,
      linkedInProfile,
      resume,
    } = req.body;

    const usedatamodel = new UserDataModel({
      fullname,
      email,
      phoneNumber,
      gender,
      age,
      collegeName,
      currentEducation,
      stream,
      graduationYear,
      internships,
      certifications,
      technicalSkills,
      softSkills,
      languages,
      portfolio,
      linkedInProfile,
      resume,
    });

    await usedatamodel.save();
    //    return res.status(200).send("successfully added the data from controller ");
    res.status(201).json({ message: "signup successfull", success: true });
    
  } catch (error) {
    // return res.status(500).send({ message: "Error from controller here", error: error.message });
    res.status(500).json({
      message: "internal server error",
      success: false,
    });
  }
};

// module.exports = {userData};
