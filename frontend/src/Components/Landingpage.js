import "../index.css";
import {
  Users,
  BookOpen,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
  MessageCircle,
  Slack,
  Phone,
  MapPin,
  ChevronRight,
} from "lucide-react";
import "../App.css";
import { StrictMode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleError, handleSuccess } from "../util";
import Login from "./Login";
import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";
import UserData from "./UserData";

const Landingpage = () => {
  const [Logged, setLogged] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    setLogged(localStorage.getItem("name"));
  });
  const handleLogOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("jwtToken");
    handleSuccess("logout succefully");
    setTimeout(() => {
      navigate("/");
    }, 1000);
  };

  const [signUpBtn, setSignUpBtn] = useState(false);
  const [loginBtn, setLoginBtn] = useState(false);
  const [greeting, setGreeting] = useState(false);

  const handleUser = () => {
    if (Logged) {
      navigate("/UserData");
    } else {
      handleError("Pls Login into Socio-Orb.");
    }
  };

  const hadleSuccessSignup = () => {
    setSignUpBtn(false);
    // setGreeting(true);
  };

  const hadleSuccessLogin = () => {
    setLoginBtn(false);
    setGreeting(true);
  };

  // Team Members Data
  const teamMembers = [
    {
      name: "Yashwanth G M",
      role: "CEO adn Founder of Socio-Orb",
      description:
        "As the CEO of Socio-Orb,yashwanth drives the vision and strategic direction of the organization, empowering individuals through innovative educational resources and fostering a collaborative learning environment. With a passion for lifelong learning and operational excellence, he is committed to making quality education accessible to all.",
      image: "/yashu.jpg",
    },
    {
      name: "Rakesh Gowda",
      role: "CFO of Socio-Orb",
      description:
        "As the Founder of Socio-Orb, Rakesh Gowdra established the organization with a vision to transform education through innovative technology and collaborative learning.passion for empowering individuals and commitment to accessibility have laid the foundation for a vibrant community dedicated to lifelong learning and personal growth.",
      image: "/rakesh.jpg",
    },
    {
      name: "Md Arif",
      role: "COO of Socio-Orb",
      description:
        "As the CTO of Socio-Orb, Md Arif is responsible for overseeing the technological strategy and development of innovative educational solutions. With a strong focus on leveraging cutting-edge technology,drives the implementation of scalable systems and ensures that Socio-Orb remains at the forefront of the digital learning landscape.",
      image: "/arig.jpg",
    },
    {
      name: "Sangamesh",
      role: "CTO of Socio-Orb",
      description:
        "As a Developer at Socio-Orb, Sangamesha is responsible for creating and maintaining innovative educational applications that enhance user experience.collaborates with teams to implement cutting-edge solutions, driving the mission of making learning accessible and engaging for all.",
      image: "/sangu.jpg",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      {/* Header */}
      <header className="fixed w-full bg-gray-900/90 backdrop-blur-sm border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" w-[106%] flex justify-between items-center h-20">
            <div className="flex items-center gap-3">
              {/* Logo */}
              <div className="h-[5.6em] w-[5.6em] animate-spin-slow">
                <img
                  src="/SocioOrb (2).png"
                  alt="Socio-Orb Logo"
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-base font-bold text-white">SOCIO-ORB</h1>
                <p className="text-[0.775rem] text-cyan-400">Social Orbit</p>
              </div>
            </div>

            <nav className="hidden md:flex items-center gap-8">
              <a
                href="#about"
                className="text-gray-300 hover:text-white transition-colors"
              >
                About Us
              </a>
              <a
                href="#contact"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Contact
              </a>

              <a
                href="#team"
                className="text-gray-300 hover:text-white transition-colors"
              >
                Team
              </a>

              {Logged ? (
                <>
                  <div style={{ color: "white" }}>Welcome : {Logged}</div>
                  <button
                    onClick={handleLogOut}
                    className="px-4 py-2 text-cyan-400 hover:text-cyan-300 font-medium border border-cyan-400 rounded-lg hover:border-cyan-300 transition-colors"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setLoginBtn(true)}
                    className="px-4 py-2 text-cyan-400 hover:text-cyan-300 font-medium border border-cyan-400 rounded-lg hover:border-cyan-300 transition-colors"
                  >
                    Log in
                  </button>

                  <button
                    onClick={() => setSignUpBtn(true)}
                    className="px-4 py-2 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors"
                  >
                    Register
                  </button>
                </>
              )}
            </nav>

            <nav>
              {Logged ? (
                <>
                  <button
                    onClick={handleLogOut}
                    className="md:hidden font-medium border border-cyan-400 rounded-lg text-white p-2 bg-gray-800 md:bg-white hover:bg-gray-700 md:hover:bg-gray-100 rounded-lg transition-colors"
                    // className="md:hidden text-gray-800 p-3 bg-white md:bg-gray-200 hover:bg-gray-100 md:hover:bg-gray-300 rounded-full shadow-md transition-all transform hover:scale-105 hover:shadow-lg"
                  >
                    Log out
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => setLoginBtn(true)}
                    className="md:hidden font-medium border border-cyan-400 rounded-lg text-white p-2 hover:bg-gray-800 rounded-lg transition-colors mr-4"
                  >
                    Log in
                  </button>

                  <button
                    onClick={() => setSignUpBtn(true)}
                    className="md:hidden font-medium border border-cyan-400 rounded-lg text-white p-2 hover:bg-gray-800 rounded-lg transition-colors "
                  >
                    Register
                  </button>
                </>
              )}
            </nav>
          </div>
         
        </div>
      </header>
      {Logged && (
        <div className="text-white sm:block md:hidden">Welcome : {Logged}</div>
      )}
      {/* Hero Section */}
      <section className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-5xl font-bold text-white mb-4">
              Welcome to <span className="text-cyan-400">Socio-Orb</span>
            </h1>
            <p className="text-2xl text-cyan-400 font-medium mb-8">
              "Building Communities,Empowering Learners."
            </p>
            <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
              Join our vibrant community of learners and educators in a space
              where knowledge meets collaboration.
            </p>

            <button
              onClick={() => handleUser()}
              className="px-8 py-4 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-all duration-200 transform hover:scale-105 flex items-center mx-auto gap-2 font-bold"
            >
              Start Learning Today <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Cards with Hover Animation */}
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <Users className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Connect with Peers
              </h3>
              <p className="text-gray-300">
                Collaborate with students worldwide and share knowledge.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <BookOpen className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Interactive Learning
              </h3>
              <p className="text-gray-300">
                Engage with interactive content and real-time discussions.
              </p>
            </div>
            <div className="p-6 rounded-xl bg-gray-800 hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400 group">
              <Users className="h-12 w-12 text-cyan-400 mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                Global Community
              </h3>
              <p className="text-gray-300">
                Join a diverse community of learners from around the world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-8 text-center">
            About Us
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-gray-300 text-lg">
                Socio-Orb is more than just a learning platform – it's a community
                where knowledge meets collaboration. We believe in the power of
                social learning and connection to drive educational success.
              </p>
              <p className="text-gray-300 text-lg">
                Our mission is to create an inclusive space where students can
                connect, learn, and grow together. Through innovative tools and
                a supportive community, we're transforming how education happens
                online.
              </p>
            </div>
            <div className="bg-gray-700 p-8 rounded-xl border border-gray-600 hover:border-cyan-400 transition-colors">
              <h3 className="text-2xl font-bold text-white mb-4">
                Why Choose Socio-Orb?
              </h3>
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Global Community Access
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Interactive Learning Tools
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  Expert-Led Sessions
                </li>
                <li className="flex items-center gap-3">
                  <ChevronRight className="text-cyan-400" />
                  24/7 Support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section - New Addition */}
      <section id="team" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Our Team
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-gray-800 rounded-xl p-6 text-center hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-2 border border-gray-700 hover:border-cyan-400"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">
                  {member.name}
                </h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <Mail className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Email Us</h3>
                  <p className="text-gray-300">Socio-Orbsocialconnect@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Call Us</h3>
                  <p className="text-gray-300">91+ 8495074227</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <MapPin className="h-6 w-6 text-cyan-400" />
                <div>
                  <h3 className="text-white font-semibold">Visit Us</h3>
                  <p className="text-gray-300">
                    Banashankari,bangalore,karnataka
                  </p>
                </div>
              </div>
            </div>

            <form className="space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows={4}
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-cyan-400 focus:outline-none"
              ></textarea>
              <button className="w-full py-3 bg-cyan-400 text-gray-900 rounded-lg hover:bg-cyan-300 transition-colors font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="font-semibold mb-4 text-white">Platform</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Features</li>
                <li className="hover:text-cyan-400 cursor-pointer">Pricing</li>
                <li className="hover:text-cyan-400 cursor-pointer">Support</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">About Us</li>
                <li className="hover:text-cyan-400 cursor-pointer">Careers</li>
                <li className="hover:text-cyan-400 cursor-pointer">Blog</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-cyan-400 cursor-pointer">Privacy</li>
                <li className="hover:text-cyan-400 cursor-pointer">Terms</li>
                <li className="hover:text-cyan-400 cursor-pointer">
                  Copyright
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-white">Connect</h4>
              <div className="flex gap-4 text-gray-400">
                <a
                  href="https://x.com/Socio-Orb8892768421"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/Socio-Orb-connect-0751ba336/"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://www.facebook.com/Socio-Orb.484907/map"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="https://www.instagram.com/Socio-Orb.slc/profilecard/?igsh=bXJ6ZmFhZWg0MzN3"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://github.com/yourusername"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://app.slack.com/client/T07U9V01H1T/C07UA03QESZ"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Slack className="h-5 w-5" />
                </a>

                <a
                  href="https://whatsapp.com/channel/0029VaPn3Wr7dmeePYMFBT3i"
                  className="hover:text-cyan-400 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center text-gray-400">
            <p>© 2024 Socio-Orb. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* login model */}

      <Modal show={loginBtn} onHide={() => setLoginBtn(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login onSuccess={hadleSuccessLogin} />
        </Modal.Body>
      </Modal>

      {/* Greeting Modal for Successful Registration */}
      <Modal show={greeting} onHide={() => setGreeting(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Welcome to Socio-Orb!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-cyan-400 mb-4">
              Thank You for Registering
            </h3>
            <p className="text-gray-700 mb-4">
              We're excited to have you join the Socio-Orb community! Our team will
              review your registration and get back to you soon.
            </p>
            <p className="text-sm text-gray-500">
              In the meantime, explore our platform and get ready for an amazing
              learning journey.
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setGreeting(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* signUp model */}
      <Modal show={signUpBtn} onHide={() => setSignUpBtn(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SignUp onSuccess={hadleSuccessSignup} />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </div>
  );
};

export default Landingpage;
