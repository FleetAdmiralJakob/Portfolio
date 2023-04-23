import React, { useEffect } from "react";
import linkData from "./data";
import { AiFillGithub } from "react-icons/ai";
import { SiCurseforge, SiLeetcode } from "react-icons/si";
import { FaDiscord, FaLinkedinIn, FaMailBulk } from "react-icons/fa";
// @ts-ignore
import popup_discord_png from "../Assets/discord-popup.png";
import Button from "react-bootstrap/Button";

const DiscordPopup = (showDiscordPopup, setShowDiscordPopup) => {
  useEffect(() => {
    if (!showDiscordPopup) {
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
    }
    return () => {};
  }, [showDiscordPopup]);

  return (
    <>
      {showDiscordPopup && (
        <div className="discord-popup">
          <img
            src={popup_discord_png}
            alt="Discord Info"
            className="popup-discord-png"
          />
          <Button
            variant="primary"
            onClick={() => {
              setShowDiscordPopup(false);
            }}
          >
            Close
          </Button>
        </div>
      )}
    </>
  );
};

const SocialLinks = (props) => {
  return (
    <>
      <div>
        <ul className="home-about-social-links">
          {props.github && (
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

          {props.linkedIn && (
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

          {props.discord && (
            <li className="social-icons">
              <a
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
                aria-label="Discord"
                onClick={(event) => {
                  event.preventDefault();
                  props.setShowDiscordPopup(true);
                }}
              >
                <FaDiscord />
              </a>
            </li>
          )}

          {props.mail && (
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

          {props.leetcode && (
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

          {props.curseforge && (
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
    </>
  );
};

export { DiscordPopup, SocialLinks };
