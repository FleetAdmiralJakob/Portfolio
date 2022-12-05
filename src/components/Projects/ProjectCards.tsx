import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsFillCloudDownloadFill, BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>

          {props.labelsfirstclass && props.labelssecondclass && (
              <div className="project-card-footer">
                  {props.labelsfirstclass.map((label) => {
                          return <span className="project-card-footer-label-first">{label}</span>
                      }
                  )}
                  {props.labelssecondclass.map((label) => {
                          return <span className="project-card-footer-label-second">{label}</span>
                      }
                  )}
              </div>
          )}

          {props.ghLink && (
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
            style={{ marginLeft: "10px" }}
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
          >
            <BsFillCloudDownloadFill /> &nbsp; Download
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}

export default ProjectCards;
