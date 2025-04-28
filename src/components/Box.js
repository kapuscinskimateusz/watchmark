import { useState } from "react";

export default function Box({ children }) {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <div className="box">
      <button
        className="close-btn"
        onClick={() => setIsOpen((isOpen) => !isOpen)}
      >
        {isOpen ? "Close" : "Open"}
      </button>
      {isOpen && children}
    </div>
  );
}
