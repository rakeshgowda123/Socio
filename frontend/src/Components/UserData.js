import "bootstrap/dist/css/bootstrap.min.css";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserData = () => {
  const navigate = useNavigate();

  const [userdata, setuserdata] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    gender: "",
    age: "",
    collegeName: "",
    currentEducation: "",
    stream: "",
    graduationYear: "",
    internships: "",
    certifications: "",
    technicalSkills: "",
    softSkills: "",
    languages: "",
    portfolio: "",
    linkedInProfile: "",
    resume: "",
  });

  const handleUserInput = (e) => {
    const { name, value } = e.target;
    setuserdata((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (
      !userdata.fullname ||
      !userdata.email ||
      !userdata.phoneNumber ||
      !userdata.gender ||
      !userdata.age ||
      !userdata.collegeName ||
      !userdata.currentEducation ||
      !userdata.stream ||
      !userdata.graduationYear ||
      !userdata.technicalSkills
    ) {
      return handleError("Please fill out all required fields.");
    }
  
    try {
      const url = "http://localhost:8080/user/userdata";
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userdata),
      });
  
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText); // Log error response
        throw new Error(errorText);
      }
  
      const result = await response.json();
      const { success, message, error } = result;
  
      if (success) {
        handleSuccess("Data saved successfully!");
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }else if(error && error.details && error.details.length>0){
        const detail= error.details[0].message;
       
        handleError(detail);
      } else{
        handleError(message);}
    } catch (error) {
      handleError(error.message);
    }
  };
  

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h1 className="text-center mb-4">Complete the Steps...</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <div className="card p-4 mb-4">
          <h4 className="card-title">Personal Information</h4>
          <div className="form-group">
            <label>Full Name *</label>
            <input
              type="text"
              className="form-control"
              name="fullname"
              value={userdata.fullname}
              placeholder="Enter your full name"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Email *</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={userdata.email}
              placeholder="Enter your email"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Phone Number *</label>
            <input
              type="text"
              className="form-control"
              name="phoneNumber"
              value={userdata.phoneNumber}
              placeholder="Enter your phone number"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Gender *</label>
            <select
              className="form-control"
              name="gender"
              value={userdata.gender}
              onChange={handleUserInput}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>
          <div className="form-group">
            <label>Age *</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={userdata.age}
              placeholder="Enter your age"
              onChange={handleUserInput}
              required
            />
          </div>
        </div>

        {/* College Information Section */}
        <div className="card p-4 mb-4">
          <h4 className="card-title">College Information</h4>
          <div className="form-group">
            <label>College/University Name *</label>
            <input
              type="text"
              className="form-control"
              name="collegeName"
              value={userdata.collegeName}
              placeholder="Enter your college or university name"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Current Education *</label>
            <input
              type="text"
              className="form-control"
              name="currentEducation"
              value={userdata.currentEducation}
              placeholder="e.g., BE, B-Tech, BCA"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Stream/Branch *</label>
            <input
              type="text"
              className="form-control"
              name="stream"
              value={userdata.stream}
              placeholder="e.g., CSE, ECE, MECH"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Graduation Year *</label>
            <input
              type="number"
              className="form-control"
              name="graduationYear"
              value={userdata.graduationYear}
              placeholder="Enter your graduation year"
              onChange={handleUserInput}
              required
            />
          </div>
        </div>

        {/* Skills Section */}
        <div className="card p-4 mb-4">
          <h4 className="card-title">Skills and Experience</h4>
          <div className="form-group">
            <label>Technical Skills/(N/A) *</label>
            <input
              type="text"
              className="form-control"
              name="technicalSkills"
              value={userdata.technicalSkills}
              placeholder="Enter technical skills (comma-separated)"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Internships /(N/A)</label>
            <input
              type="text"
              className="form-control"
              name="internships"
              value={userdata.internships}
              placeholder="Enter internships (comma-separated)"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Certifications /(N/A)</label>
            <input
              type="text"
              className="form-control"
              name="certifications"
              value={userdata.certifications}
              placeholder="Enter certifications (comma-separated)"
              onChange={handleUserInput}
              required
            />
          </div>
          <div className="form-group">
            <label>Soft Skills /(N/A)</label>
            <input
              type="text"
              className="form-control"
              name="softSkills"
              value={userdata.softSkills}
              placeholder="Enter soft skills (comma-separated)"
              onChange={handleUserInput}
              required
            />
          </div>
        </div>

        <div className="card p-4 mb-4">
          <h4 className="card-title">Skills and Experience</h4>
          <div className="form-group">
            <label htmlFor="languages" className="form-label">
              Languages /(N/A)
            </label>
            <input
              type="text"
              className="form-control"
              id="languages"
              value={userdata.languages}
              name="languages"
              placeholder="Enter languages (comma-separated)"
              onChange={handleUserInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="portfolio" className="form-label">
              Portfolio /(N/A)
            </label>
            <input
              type="text"
              className="form-control"
              id="portfolio"
              value={userdata.portfolio}
              name="portfolio"
              placeholder="Enter your portfolio URL"
              onChange={handleUserInput}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedInProfile" className="form-label">
              LinkedIn Profile /(N/A) <span className="required-star">*</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="linkedInProfile"
              value={userdata.linkedInProfile}
              name="linkedInProfile"
              onChange={handleUserInput}
              placeholder="Enter your LinkedIn profile URL"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="linkedInProfile" className="form-label">
              Resume /(N/A) <span className="required-star">*</span>
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              value={userdata.resume}
              name="resume"
              onChange={handleUserInput}
              placeholder="Upload your resume"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserData;
