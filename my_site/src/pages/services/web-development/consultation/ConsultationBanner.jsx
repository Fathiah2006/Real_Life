import React, { useState } from "react";
import "./ConsultationBanner.css";
import ContactModal from "../../../../components/layouts/contact modal/ContactModal";

const ConsultationBanner = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="consultation-banner">
        <div className="consultation-content">
          <div className="consultation-text">
            <h2>Get Your Free Consultation</h2>
            <p>Unlock the potential of custom web solutions today!</p>
          </div>

          <div className="consultation-btn">
            {/* Button opens the modal */}
            <button onClick={() => setOpen(true)}>Get in Touch</button>
          </div>
        </div>
      </section>

      {/* Contact Modal Overlay */}
      <ContactModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default ConsultationBanner;
