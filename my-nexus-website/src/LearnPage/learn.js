import React from "react";
import LearnSidebar from "../LearnPage/LearnSidebar";
import LearnContent from "../LearnPage/LearnContent";
import "../LearnPage/learn.css"; 

function Learn() {
  return (
    <div className="learn-container">
      <LearnSidebar />
      <LearnContent />
    </div>
  );
}

export default Learn;
