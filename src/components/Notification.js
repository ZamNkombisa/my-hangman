import React from "react";

//Notification container with conditional "show" class
const Notification = ({ showNotification }) => {
  return (
    <div className={`notification-container ${showNotification ? "show" : ""}`}>
      {/* Notification message */}
      <p>You have already entered this letter</p>
    </div>
  );
};

export default Notification;
