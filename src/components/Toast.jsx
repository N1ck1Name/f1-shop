import React from "react";
import "../styles/components/toast.css";

function Toast({ message, show }) {
  return (
    <div className={`toast ${show ? "show" : ""}`}>
      {message}
    </div>
  );
}

export default Toast;
