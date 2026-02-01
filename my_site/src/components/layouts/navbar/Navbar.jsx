import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes, FaEnvelope } from "react-icons/fa";
import "./Navbar.css";
import ContactModal from "../contact modal/ContactModal";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesWrapperRef = useRef(null);
  const servicesListRef = useRef(null);
  const [scrollClasses, setScrollClasses] = useState("");
  const [open, setOpen] = useState(false);

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setOpenDropdown(null);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (window.scrollY > 10) navbar.classList.add("scrolled");
      else navbar.classList.remove("scrolled");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const updateScrollIndicators = () => {
      const list = servicesListRef.current;
      if (!list) return;

      const hideTop = list.scrollTop <= 0;
      const hideBottom =
        list.scrollTop + list.clientHeight >= list.scrollHeight;

      setScrollClasses(
        `${hideTop ? "hide-top" : ""} ${hideBottom ? "hide-bottom" : ""}`
      );
    };

    const list = servicesListRef.current;
    if (list) {
      list.addEventListener("scroll", updateScrollIndicators);
      updateScrollIndicators();
    }

    return () => {
      if (list) list.removeEventListener("scroll", updateScrollIndicators);
    };
  }, [openDropdown]);

  const toggleDropdown = (key) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen((prev) => !prev);
    setOpenDropdown(null);
  };

  return (
    <>
      <div className="navbar">
        <div className="nav-logo">
          <h2>
            <Link to="/" onClick={closeMobileMenu}>
              VonCross
            </Link>
          </h2>
        </div>
        <div className="mobile-contact">
          <button className="contact-icon" onClick={() => setOpen(true)}>
            <FaEnvelope />
          </button>
        </div>
        <div className="menu-icon" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <div
          className={`nav-links ${mobileMenuOpen ? "show" : ""}`}
          ref={dropdownRef}
        >
          <ul>
            {/* ABOUT */}
            <li>
              <div
                className="dropdown-toggle"
                onClick={() => toggleDropdown("about")}
              >
                <span>
                  <Link to="/about" onClick={closeMobileMenu}>
                    ABOUT US
                  </Link>
                </span>
                <FaChevronDown
                  className={openDropdown === "about" ? "rotate" : ""}
                />
              </div>
              <ul
                className={`dropdown ${openDropdown === "about" ? "show" : ""}`}
              >
                <li>
                  <Link to="/about#team" onClick={closeMobileMenu}>
                    Our Team
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <div
                className="dropdown-toggle"
                onClick={() => toggleDropdown("services")}
              >
                <span>
                  <Link to="/services" onClick={closeMobileMenu}>
                    SERVICES
                  </Link>
                </span>
                <FaChevronDown
                  className={openDropdown === "services" ? "rotate" : ""}
                />
              </div>
              <div
                className={`dropdown services-dropdown-wrapper ${
                  openDropdown === "services" ? "show" : ""
                }`}
                ref={servicesWrapperRef}
              >
                <div className={`dropdown-wrapper ${scrollClasses}`}>
                  <ul className="services-dropdown" ref={servicesListRef}>
                    <li>
                      <Link to="/services/web-development">
                        Web Development
                      </Link>
                    </li>
                    <li>
                      <Link to="/services/cloud-solution">Cloud Solutions</Link>
                    </li>
                    <li>
                      <Link to="/services/cybersecurity-cloud-migration">Cybersecurity & Cloud Migration</Link>
                    </li>
                    <li>
                      <Link to="/services/ai-and-machine-learning">AI & Machine Learning</Link> 
                    </li>
                    <li>
                      <Link to="/services/software-development">Software Development</Link>
                    </li>
                    <li>
                      <Link to="/services/courses-training">Courses & Training Programs</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            <li>
              <div
                className="dropdown-toggle"
                onClick={() => toggleDropdown("insights")}
              >
                <span>
                  <Link to="/blog" onClick={closeMobileMenu}>
                    INSIGHTS
                  </Link>
                  </span>
                <FaChevronDown
                  className={openDropdown === "insights" ? "rotate" : ""}
                />
              </div>
              <ul
                className={`dropdown ${
                  openDropdown === "insights" ? "show" : ""
                }`}
              >
                <li>
                  <Link to="/blog">Blog</Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <button className="contact-btn" onClick={() => setOpen(true)}>
          Get in Touch
        </button>
      </div>
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};
export default Navbar;
