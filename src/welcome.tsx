import React, { useState } from "react";
import "./welcome.css";

const CurtainAnimation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCurtain = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="curtain-container">
      {/* Curtain */}
      <div className={`curtain ${isOpen ? "curtain-open" : "curtain-closed"}`}></div>

      {/* Toggle Button */}
      { !isOpen ? <button className="toggle-button" onClick={toggleCurtain}>
        {isOpen ? "Exit" : "ENTER"}
      </button> : null }
    </div>
  );
};

export default CurtainAnimation;
