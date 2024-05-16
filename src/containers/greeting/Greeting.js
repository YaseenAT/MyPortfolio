import React, {useContext} from "react";
import { useState } from "react";
import {Fade} from "react-reveal";
import emoji from "react-easy-emoji";
import "./Greeting.scss";
import landingPerson from "../../assets/lottie/landingPerson";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { useEffect } from "react";
import {illustration, greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";


export default function Greeting() {
  const [keypressed, setkeypressed] = useState(null);
  const handleSaveToPC = () => {
    const fileData = process.env.PUBLIC_URL + "/JavaScript Course Notes.pdf";
    const link = document.createElement("a");
    link.href = process.env.PUBLIC_URL + "/ResumeUpdates.pdf";
    link.target = "_blank";
    link.click();
  };
 
  useEffect(() => {
    // getcomasync()
    const handlekey = (event) => {
      setkeypressed(event.key);
    };
    window.addEventListener("keydown", handlekey);
    return () => {
      window.removeEventListener("keydown", handlekey);
    };
  }, []);
  useEffect(() => {
    if (keypressed === "F8") {
      handleSaveToPC();
      setkeypressed(null);
    }
  }, [keypressed]); 

  
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  
  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {" "}
                {greeting.title}{" "}
                <span className="wave-emoji">{emoji("👋")}</span>
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                
                <Button text="Contact me" href="#contact" />
                {greeting.resumeLink && (
                  // <a href={process.env.PUBLIC_URL + "/Pdf.pdf"} target="_blank">
                  <Button
                    text="See my resume"
                    newTab={true}
                    href={process.env.PUBLIC_URL + "/Pdf.pdf"}
                     
                  />
                //  </a>
                )}
              </div>
            </div>
          </div>
          <div className="greeting-image-div">
            {illustration.animated ? (
              <DisplayLottie animationData={landingPerson} />
            ) : (
              <img
                alt="man sitting on table"
                src={require("../../assets/images/manOnTable.svg")}
              ></img>
            )}
          </div>
        </div>
      </div>
    </Fade>
  );
}
