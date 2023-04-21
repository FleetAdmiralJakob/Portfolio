import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import {CgWebsite} from "react-icons/cg";
import {BsFillCloudDownloadFill, BsGithub} from "react-icons/bs";
import ProjectStars from "./ProjectStars";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>
          <strong>{props.title}</strong>
        </Card.Title>
        <br />
        <Card.Text style={{ textAlign: "justify" }}>
          <strong>{props.summary}</strong> <br /> <br />
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

        {props.ghLink && (
          <Button
            variant="primary"
            href={`https://github.com/FleetAdmiralJakob/${props.ghLink}`}
            target="_blank"
          >
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
            style={{ marginLeft: "10px" }}
            className="demo-button"
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
              props.ghLink && props.demoLink
                ? "download-button-special"
                : "download-button"
            }
          >
            <BsFillCloudDownloadFill /> &nbsp; Download
          </Button>
        )}
        {props.ghLink && (
          <>
            <hr className="rounded-hr" />
            <span className="left">GitHub Stats:</span>
            <ProjectStars url={props.ghLink}></ProjectStars>
          </>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
