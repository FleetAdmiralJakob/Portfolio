import React, {useEffect} from "react"
import linkData from "./data";
import {AiFillGithub} from "react-icons/ai";
import {SiCurseforge, SiLeetcode} from "react-icons/si";
import {FaDiscord, FaLinkedinIn, FaMailBulk} from "react-icons/fa";

const SocialLinks = (leetcode?, github?, linkedIn?, discord?, mail?, curseforge?) => {

    const [showDiscordPopup, setShowDiscordPopup] = React.useState(false);
    useEffect(() => {
        const contentElements = document.querySelectorAll(".content");

        // Add or remove the 'blur' class to each content element based on the 'showDiscordPopup' state
        contentElements.forEach((element) => {
            element.classList.toggle("blur", showDiscordPopup);
        });

        // Cleanup function to remove the 'blur' class from all content elements when the component unmounts
        return () => {
            contentElements.forEach((element) => {
                element.classList.remove("blur");
            });
        };
    }, [showDiscordPopup]);

    return (
        <div>
            <ul className="home-about-social-links">
                {leetcode && (
                    <li className="social-icons">
                        <a
                            href={linkData.leetcode}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            aria-label="LeetCode"
                        >
                            <SiLeetcode />
                        </a>
                    </li>
                )}
                {github && (
                    <li className="social-icons">
                        <a
                            href={linkData.github}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour home-social-icons"
                            aria-label="GitHub"
                        >
                            <AiFillGithub />
                        </a>
                    </li>
                )}
                {linkedIn && (
                    <li className="social-icons">
                        <a
                            href={linkData.linkedIn}
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            aria-label="LinkedIn"
                        >
                            <FaLinkedinIn />
                        </a>
                    </li>
                )}
                {discord && (
                    <li className="social-icons">
                        <a
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                            aria-label="Discord"
                            onClick={(event) => {
                                event.preventDefault();
                                setShowDiscordPopup(true);
                            }}
                        >
                            <FaDiscord />
                        </a>
                    </li>
                )}
                {mail && (
                    <li className="social-icons">
                        <a
                            href={linkData.mail}
                            className="icon-colour  home-social-icons"
                            aria-label="Mail me"
                        >
                            <FaMailBulk />
                        </a>
                    </li>
                )}
                {curseforge && (
                    <li className="social-icons">
                        <a
                            href="https://www.curseforge.com/members/fleetadmiraljakob/projects"
                            target="_blank"
                            rel="noreferrer"
                            className="icon-colour  home-social-icons"
                        >
                            <SiCurseforge />
                        </a>
                    </li>
                )}
            </ul>
        </div>
    )
};

export default SocialLinks;
