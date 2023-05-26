import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsFillCloudDownloadFill, BsGithub } from "react-icons/bs";
import ProjectStars from "./ProjectStars";
import linkData from "../data";

interface Props {
  imgPath: string;
  title: string;
  summary?: string;
  description: string;
  labelsfirstclass?: string[];
  labelssecondclass?: string[];
  ghLink?: string;
  isBlog?: boolean;
  demoLink?: string;
  downloadLink?: string;
  customGhLink?: boolean;
  workInProgress?: boolean;
}

function ProjectCards(props: Props) {
  return (
    <Card className="project-card-view">
      <div style={{ position: "relative" }}>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        {props.workInProgress && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <span style={{ marginLeft: "5px" }}>Work in Progress 🚧</span>
          </div>
        )}
      </div>

      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          {props.summary && (
            <>
              <strong>{props.summary}</strong> <br /> <br />
            </>
          )}
          {props.description}
        </Card.Text>

        {props.labelsfirstclass && props.labelssecondclass && (
          <div className="project-card-footer">
            {props.labelsfirstclass.map((label) => {
              return (
                <span key={label} className="project-card-footer-label-first">
                  {label}
                </span>
              );
            })}
            {props.labelssecondclass.map((label) => {
              return (
                <span key={label} className="project-card-footer-label-second">
                  {label}
                </span>
              );
            })}
          </div>
        )}

        {props.ghLink && !props.customGhLink && (
          <Button
            variant="primary"
            href={linkData.github + props.ghLink}
            target="_blank"
          >
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}
        {props.ghLink && props.customGhLink && (
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        )}

        {"\n"}
        {"\n"}

        {!props.isBlog && props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            className={props.ghLink ? "demo-button-special" : "demo-button"}
          >
            <CgWebsite /> &nbsp; Demo
          </Button>
        )}

        {props.downloadLink && (
          <Button
            variant="primary"
            href={props.downloadLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
            className={
              props.ghLink || props.demoLink
                ? "download-button-special"
                : "download-button"
            }
          >
            <BsFillCloudDownloadFill /> &nbsp; Download
          </Button>
        )}
        {props.ghLink && !props.customGhLink && (
          <>
            <hr className="rounded-hr" />
            <span className="left">GitHub Stats:</span>
            <ProjectStars url={props.ghLink}></ProjectStars>
          </>
        )}
        {props.ghLink && props.customGhLink && (
          <>
            <hr className="rounded-hr" />
            <span className="left">GitHub Stats:</span>
            <ProjectStars url={props.ghLink} costumUrl={true}></ProjectStars>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
