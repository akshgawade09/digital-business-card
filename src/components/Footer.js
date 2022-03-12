import React from "react";
import Facebook from "../images/Facebook-Icon.png";
import GitHub from "../images/GitHub-Icon.png";
import Instagram from "../images/Instagram-Icon.png";
import Twitter from "../images/Twitter-Icon.png";

export default function Footer() {
    return (
        <div className="footer">
            <div className="footer-centered">
                <a target="_blank" href="https://twitter.com/akshgawade09">
                    <img src={Twitter}></img>
                </a>
                <a target="_blank" href="https://www.facebook.com/akshay.gawade.395669/">
                    <img src={Facebook}></img>
                </a>
                <a target="_blank" href="https://www.instagram.com/akshgawade_09/">
                    <img src={Instagram}></img>
                </a>
                <a target="_blank" href="https://github.com/akshgawade09">
                    <img src={GitHub}></img>
                </a>
            </div>
        </div>
    )
}