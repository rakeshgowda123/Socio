import "../App.css";
import { StrictMode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { handleSuccess } from "../util";
import Login from "./Login";
import { Modal, Button } from "react-bootstrap";
import SignUp from "./SignUp";

const Home = () => {
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
  // create model
  const [showLogin, setShowLogin] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  return (
    <>
      <div class="container">
        <header class="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div class="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              class="d-inline-flex link-body-emphasis text-decoration-none"
            >
              <img
                className="logo"
                src="/WhatsApp Image 2024-03-10 at 18.12.58_46090b81.jpg"
                alt="Image"
              />
            </a>
          </div>

          <ul class="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" class="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                Jobs
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                projects
              </a>
            </li>
            <li>
              <a href="#" class="nav-link px-2">
                Contact us
              </a>
            </li>
          </ul>

          {Logged ? (
            <>
              <div>WelCome {Logged}</div>
              <button
                onClick={handleLogOut}
                type="submit"
                class="btn btn-secondary"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <div class="col-md-3 text-end">
                <button
                  onClick={() => setShowSignUp(true)}
                  type="button"
                  class="btn btn-primary"
                >
                  Sign-up
                </button>
              </div>
            </>
          )}
        </header>
      </div>
      <section className="mainSection">
        <div className="leftside">
          <h1>
          WELCOME TO SOCIO...
          </h1>
          <h4>Connecting Knowledge, Inspiring Growth. </h4>
          <Button>Complet the process.</Button>
        </div>
        <div className="righside">
          <img
            src="https://sofbox-react.iqonic.design/assets/revslider/assets/01-4.png"
            alt="loading..."
          ></img>
        </div>
      </section>

      {/* login model */}
      <Modal show={showLogin} onHide={() => setShowLogin(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login />
        </Modal.Body>
      </Modal>

      {/* signUp model */}
      <Modal show={showSignUp} onHide={() => setShowSignUp(false)}>
        <Modal.Header closeButton>
          <Modal.Title>SignUp</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <SignUp />
        </Modal.Body>
      </Modal>

      <ToastContainer />
    </>
  );
};
export default Home;
