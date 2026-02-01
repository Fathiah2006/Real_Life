// src/components/ContactModal.js
import React, { useState, useRef } from "react";
import { IoClose } from "react-icons/io5";
import { FiPaperclip } from "react-icons/fi";
import "./ContactModal.css";

const ContactModal = ({ isOpen, onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);

  if (!isOpen) return null;

  const handleFileChange = (e) => setSelectedFile(e.target.files[0]);
  const handleAttachClick = () => fileInputRef.current.click();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters long";
    if (!email.includes("@")) newErrors.email = "Enter a valid email address";
    if (message.trim().length < 10)
      newErrors.message = "Message must be at least 10 characters long";
    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("✅ Form submitted successfully");
      setName("");
      setEmail("");
      setMessage("");
      setSelectedFile(null);
    }
  };

  return (
    <div className="contact-overlay" onClick={onClose}>
      <div className="contact-container" onClick={(e) => e.stopPropagation()}>
        {/* Close Button */}
        <button
          className="close-btn"
          onClick={onClose}
          aria-label="Close modal"
        >
          <IoClose size={28} />
        </button>

        {/* Left: Form */}
        <div className="contact-form">
          <h2 className="logo">VonCross</h2>
          <p className="info-text">
            If you have any questions, email us{" "}
            <span>
              <a href="mailto:info@voncross.com">info@voncross.com</a>
            </span>
          </p>

          <form onSubmit={handleSubmit}>
            <label>My Name*</label>
            <input
              type="text"
              placeholder="John Smith"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            {errors.name && <small className="error">{errors.name}</small>}

            <label>Email Address*</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {errors.email && <small className="error">{errors.email}</small>}

            <label>Message*</label>
            <textarea
              id="message1"
              placeholder="Describe your idea"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            {errors.message && (
              <small className="error">{errors.message}</small>
            )}

            <p className="privacy">
              Please be informed that when you click the Send button VonCross
              will process your personal data in accordance with our{" "}
              <a href="#">Privacy notice</a>. This site is protected by
              reCAPTCHA and the Google <a href="#">Privacy Policy</a> and{" "}
              <a href="#">Terms of Service</a> apply.
            </p>

            <div className="file-send">
              <div className="attach-wrapper">
                <button
                  type="button"
                  className="attach"
                  onClick={handleAttachClick}
                >
                  <FiPaperclip /> Attach file
                </button>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileChange}
                  style={{ display: "none" }}
                />
                {selectedFile && (
                  <span className="file-name">{selectedFile.name}</span>
                )}
              </div>
              <button type="submit" className="send-btn">
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Right: Partner Images */}
        <div className="partners">
          <h4>Clients who trust us</h4>
          <div className="partners-list">
            <ul>
              <li>
                <img src="/images/andriod.png" alt="Android" />
              </li>
              <li>
                <img src="/images/digital.png" alt="Digital" />
              </li>
              <li>
                <img src="/images/goggle.png" alt="Google" />
              </li>
              <li>
                <img src="/images/netflix.png" alt="Netflix" />
              </li>
              <li>
                <img src="/images/oracle.png" alt="Oracle" />
              </li>
              <li>
                <img src="/images/angular.png" alt="Angular" />
              </li>
              <li>
                <img src="/images/calendly.png" alt="Calendly" />
              </li>
              <li>
                <img src="/images/ebay.png" alt="eBay" />
              </li>
              <li>
                <img src="/images/ibm.png" alt="IBM" />
              </li>
              <li>
                <img src="/images/micro.png" alt="Microsoft" />
              </li>
              <li>
                <img src="/images/aws.png" alt="AWS" />
              </li>
              <li>
                <img src="/images/vu.png" alt="Vue" />
              </li>
              <li>
                <img src="/images/ios.png" alt="iOS" />
              </li>
              <li>
                <img src="/images/datadog.png" alt="Datadog" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
