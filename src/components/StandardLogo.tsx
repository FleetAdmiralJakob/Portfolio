import { SiGithub } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { CgGitFork } from "react-icons/cg";
import React from "react";

function StandardLogo () {
    return (
        <div>
            <CgGitFork />{" "}
            <AiFillStar /> &nbsp;{" "}
            <SiGithub />
        </div>
    );
}

export default StandardLogo;