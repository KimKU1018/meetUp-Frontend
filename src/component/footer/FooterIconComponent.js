import React from "react";

function FooterIconComponent({ icon }) {
  return (
    <div>
      <button className="footer-icon-button">
        <span className="material-symbols-outlined footer-icon">{icon}</span>
      </button>
    </div>
  );
}
export default FooterIconComponent;
