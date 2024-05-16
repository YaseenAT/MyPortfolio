import React from "react";
import "./Button.scss";

export default function Button({text, className, href, newTab}) {
  const handleSaveToPC = () => {
    const fileData = process.env.PUBLIC_URL + "/JavaScript Course Notes.pdf";
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/ResumeUpdates.pdf";
    link.target = "_blank";
    link.click();
  };
  return (
    <div className={className}
    onClick={text==="See my resume"?handleSaveToPC:""}
    >
      <a className="main-button" href={href} target={newTab && "_blank"}>
        {text}
      </a>
    </div>
  );
}
