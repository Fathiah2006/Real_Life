import React, { useState } from "react";
import "./LetsStartForm.css";
import { Link } from "react-router-dom";
import { FiPaperclip } from "react-icons/fi";
import { FaRegCalendarAlt } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import ContactModal from "../../../components/layouts/contact modal/ContactModal";

const LetsStartForm = () => {
    const [open, setOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    file: null,
  });

  const [errors, setErrors] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setFormData({ ...formData, file: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!/^[A-Za-z\s]{3,}$/.test(formData.name.trim())) {
      newErrors.name =
        "Name must be at least 3 letters and contain only letters";
    }
    if (
      !/^[A-Za-z0-9._%+-]{2,}@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(
        formData.email
      )
    ) {
      newErrors.email = "Enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setButtonText("Sending...");

      // EmailJS configuration
      const serviceID = "YOUR_SERVICE_ID"; // Replace with your EmailJS service ID
      const templateID = "YOUR_TEMPLATE_ID"; // Replace with your EmailJS template ID
      const publicKey = "YOUR_PUBLIC_KEY"; // Replace with your EmailJS public key

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_email: "fathiahkazeem@gmail.com", // Your email where you want to receive messages
      };

      emailjs.send(serviceID, templateID, templateParams, publicKey).then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);

          // Clear the form
          setFormData({
            name: "",
            email: "",
            message: "",
            file: null,
          });

          // Clear errors
          setErrors({});

          // Change button text
          setButtonText("Successful");

          // Reset button text after 3 seconds
          setTimeout(() => setButtonText("Send"), 3000);
        },
        (error) => {
          console.log("FAILED...", error);
          setButtonText("Failed");
          setTimeout(() => setButtonText("Send"), 3000);
        }
      );
    }
  };

  const handleFileClick = () => {
    document.getElementById("fileInput").click();
  };

  return (
    <>
    <div className="lets-start-container">
      <div className="form-wrapper">
        <div className="left-section">
          <h1>
            Let's <span>start</span>
          </h1>
          <div className="steps">
            <h4>WHAT'S NEXT</h4>
            <ol>
              <li>Share your requirements</li>
              <li>Analyze them with our experts</li>
              <li>Get a detailed proposal</li>
              <li>Kick off the project</li>
            </ol>
          </div>
          <div className="contact-email">
            <p>If you have any questions, email us</p>
            <a href="mailto:fathiahkazeem@gmail.com">info@VonCross.com</a>
          </div>
        </div>

        <div className="right-section">
          <form onSubmit={handleSubmit}>
            <label>My Name*</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            {errors.name && <p className="error">{errors.name}</p>}

            <label>Email Address*</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            {errors.email && <p className="error">{errors.email}</p>}

            <label>Message*</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              required
            ></textarea>

            <p className="privacy-text">
              Please be informed that when you click the Send button VonCross
              will process your personal data in accordance with our{" "}
              <a href="#">Privacy notice</a>... <a href="#">Terms of Service</a>
              .
            </p>

            <label className="file-label" onClick={handleFileClick}>
              <FiPaperclip /> Attach file
              <input
                type="file"
                name="file"
                id="fileInput"
                onChange={handleChange}
                style={{ display: "none" }}
              />
            </label>
            {formData.file && <p>Selected: {formData.file.name}</p>}

            <button type="submit" className="send-btn">
              {buttonText}
            </button>
          </form>

          <div className="bottom-row">
            <div className="profile">
              <img src="\images\Richard.jpeg" alt="Manager" />
              <div>
                <strong>Joseph Richard Femi</strong>
                <p>Account Manager</p>
              </div>
            </div>
            <button className="consult-btn" onClick={() => setOpen(true)}>
              <FaRegCalendarAlt /> Book a consultation
            </button>
    </div>
  </div>
      </div>
    </div>
    <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default LetsStartForm;
                  