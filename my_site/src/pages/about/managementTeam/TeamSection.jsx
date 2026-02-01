import React, { useState, useRef } from 'react';
import './TeamSection.css';
import { HiOutlineArrowLongLeft, HiOutlineArrowLongRight } from "react-icons/hi2";
import { FiPaperclip } from "react-icons/fi";
import { IoClose } from "react-icons/io5"; // cancel/close icon

const TeamSection = () => {
  const [showForm, setShowForm] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setErrors] = useState({});

  const members = [
    { name: 'David Logan', title: 'Managing Partner', img: '/images/JSB.CO.avif' },
    { name: 'Yury Shamrei', title: 'CEO', img: '/images/Richard.jpeg'},
    { name: 'Elena Safonova', title: 'Department Manager & Head of QA', img: '/images/yuri.avif' },
    { name: 'Kate Merzlova', title: 'Head of Sales and Marketing', img: '/images/raw.avif' },
    { name: 'Anna Petrova', title: 'Marketing Manager', img: '/images/lena.jpg' },
  ];

  const toggleForm = () => setShowForm(!showForm);

  const next = () => setCurrentIndex((prevIndex) => (prevIndex + 1) % members.length);
  const prev = () => setCurrentIndex((prevIndex) => (prevIndex - 1 + members.length) % members.length);

  const visibleMembers = members.slice(currentIndex, currentIndex + 4);
  if (visibleMembers.length < 4) {
    visibleMembers.push(...members.slice(0, 4 - visibleMembers.length));
  }

  const handleFileChange = (event) => setSelectedFile(event.target.files[0]);
  const handleAttachClick = () => fileInputRef.current.click();

  const handleSubmit = (e) =>{
    e.preventDefault();
    const newErrors = {};
    if (name.trim().length < 3){
      newErrors.name = "Name must be at least 3 characters long ";
    }
        if (!email.includes("@")) {
      newErrors.email = "Enter a valid email address.";
    }
    if (message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long.";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Form submitted successfully ✅");
      setName("");
      setEmail("");
      setMessage("");
      setSelectedFile(null);
    }
  };

  return (
    <div className="team-section" id="team">
      <h2>Management <span className="blue">team</span></h2>

      {/* Team Members */}
      <div className="team-members-wrapper">
        <div className="team-members">
          {visibleMembers.map((member, index) => (
            <div className="member" key={index}>
              <img src={member.img} alt={member.name} />
              <h4>{member.name}</h4>
              <p>{member.title}</p>
            </div>
          ))}
        </div>

        <div className="arrows">
          <button className="arrow" onClick={prev}><HiOutlineArrowLongLeft /></button>
          <button className="arrow" onClick={next}><HiOutlineArrowLongRight /></button>
        </div>
      </div>

      {/* Quote Box */}
      <div className="quote-box">
        <img src="/images/lena.jpg" alt="Lena" />
        <div>
          <h4>Lena</h4>
          <small>CEO & Founder</small>
          <p>
            <i className="quote">“</i>
            At VonCross, we don’t just develop software – we craft solutions that drive businesses forward. Every project we take on is a testament to our commitment to quality, innovation, and delivering real value. Our Clients’ success is our ultimate reward.
          </p>
        </div>
      </div>

      {/* Book Form */}
      <button className="book-link" onClick={toggleForm}>
        Book a meeting with my team
      </button>

      {showForm && (
        <div className="contact-overlay">
          <div className="contact-container">
            {/* Cancel Icon */}
            <button className="close-btn" onClick={toggleForm}>
              <IoClose size={28} />
            </button>

            {/* Left side form */}
            <div className="contact-form">
              <h2 className="logo">VonCross</h2>
              <p className="info-text">
                If you have any questions, email us <span><a href="mailto:info@voncross.com">info@voncross.com</a></span>
              </p>

              <form>
                <label>My Name*</label>
                <input type="text" placeholder="John Smith" value={name} onChange={(e) => setName(e.target.value)}  required minLength={3} maxLength={100} pattern="[A-Za-z\s]{3,}" title="Name should be at least 3 letters long and contain only alphabets."className="form-input"/>

                <label>Email Address*</label>
                <input type="email" placeholder="name@company.com" value={email} onChange={(e) => setEmail(e.target.value)} required />

                <label>Message*</label>
                <textarea placeholder="Describe your idea" value={message} onChange={(e) => setMessage(e.target.value)} required minLength={10} maxLength={1000}></textarea>

                <p className="privacy">
                  Please be informed that when you click the Send button VonCross
                  will process your personal data in accordance with our{" "}
                  <a href="#">Privacy notice</a> for the purpose of providing you with
                  appropriate information. This site is protected by reCAPTCHA and the
                  Google <a href="#">Privacy Policy</a> and{" "}
                  <a href="#">Terms of Service</a> apply.
                </p>

                <div className="file-send">
                  <button type="button" className="attach" onClick={handleAttachClick}>
                    <FiPaperclip /> Attach file
                  </button>
                  <input type="file" ref={fileInputRef} onChange={handleFileChange} style={{ display: "none" }} />
                  {selectedFile && <span className="file-name">{selectedFile.name}</span>}
                  <button type="submit" className="send-btn">Send</button>
                </div>
              </form>
            </div>

            {/* Right side partners */}
            <div className="partners">
              <h4>Clients who trust us</h4>
              <div className="partners-list">
                <ul>
                  <li><img src="/images/andriod.png" alt="Android" /></li>
                  <li><img src="/images/digital.png" alt="Digital" /></li>
                  <li><img src="/images/goggle.png" alt="Google" /></li>
                  <li><img src="/images/netflix.png" alt="Netflix" /></li>
                  <li><img src="/images/oracle.png" alt="Oracle" /></li>
                  <li><img src="/images/angular.png" alt="Angular" /></li>
                  <li><img src="/images/calendly.png" alt="Calendly" /></li>
                  <li><img src="/images/delta.png" alt="Delta" /></li>
                  <li><img src="/images/ebay.png" alt="eBay" /></li>
                  <li><img src="/images/ibm.png" alt="IBM" /></li>
                  <li><img src="/images/micro.png" alt="Microsoft" /></li>
                  <li><img src="/images/aws.png" alt="AWS" /></li>
                  <li><img src="/images/vu.png" alt="Vue" /></li>
                  <li><img src="/images/ios.png" alt="iOS" /></li>
                  <li><img src="/images/datadog.png" alt="Datadog" /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TeamSection;
