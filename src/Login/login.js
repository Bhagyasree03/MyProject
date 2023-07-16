import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import OtpInput from "react-otp-input";
import "./login.css";

const Login = () => {
  const [otp, setOtp] = useState("");
  const [number, setNumber] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const onSubmitBtn = (e) => {
    e.preventDefault();
    if (number.length === 10) {
      setShowModal(true);
      setErrorMessage("");
    } else {
      setErrorMessage("Please enter a valid phone number.");
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setOtp("");
    setErrorMessage("");
  };
  return (
    <div className="bg-container">
      <form className="input-container" onSubmit={onSubmitBtn}>
        <h1 className="heading">Login Here</h1>
        <p className="paragraph">Hey, Enter your details to login</p>
        <input
          type="number"
          className="input-text"
          placeholder="Enter Mobile Number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button type="submit" className="btn-text">
          Sign in
        </button>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
      </form>

      <Modal show={showModal} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Enter OTP</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <OtpInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
            separator={<span>-</span>}
            inputStyle={{ width: "2rem", height: "2rem" }}
            renderInput={(props) => <input {...props} />}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Login;
