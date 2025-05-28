import React from "react";
import "../styles/AnatomySection.css";
import anatomypic from "../assets/images/5411457.jpg"
import anatomypic1 from "../assets/images/3184191.jpg"


function AnatomySection() {
  return (
    <div className="anatomy-section">
      <h3>Body Anatomy</h3>
      <div className="anatomy-image-container">
        <img
          src={anatomypic}
          alt="Body Anatomy"
          className="anatomy-image"
        />
        <img
          src={anatomypic1}
          alt="Body Anatomy"
          className="anatomy-image"
        />
        <div className="anatomy-label heart">Heart</div>
        <div className="anatomy-label lungs">Lungs</div>
        <div className="anatomy-label brain">Brain</div>
      </div>
    </div>
  );
}

export default AnatomySection;
