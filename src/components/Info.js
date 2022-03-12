import React from "react";
import selfImage from "../images/self.JPG";
import emailImage from "../images/email.png";
import linkedInImage from "../images/linkedin.png";

export default function Info() {
    return (
        <div className="info">
            <div className="info-image">
                <img src={selfImage} alt="Akshay Gawade" className="self-image"></img>
            </div>
            <div className="info-rectangle">
                <h2 className="info-rectangle-name">Akshay Gawade</h2>
                <h3 className="info-rectangle-designation">Software Engineer</h3>
                <h4 className="info-rectangle-email">akshgawade09@gmail.com</h4>
            </div>
            <div className="info-buttons">
                <button className="info-buttons-email"><img src={emailImage}></img> <text className="info-buttons-email-text">Email</text></button>
                <button className="info-buttons-linkedin"><img src={linkedInImage}></img> <text className="info-buttons-linkedin-text">LinkedIn</text></button>
            </div>
        </div>
    )
}