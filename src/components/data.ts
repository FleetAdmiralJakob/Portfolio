import {Octokit} from "@octokit/core";

export const githubApiKey = process.env.GITHUB_API_KEY;
const octokit = new Octokit({ auth: githubApiKey });

export interface GithubData {
  followers: string;
  stargazers_count: string;
}

export const githubUsername = "FleetAdmiralJakob";

const linkData = {
  linkedIn: "https://www.linkedin.com/in/jakobroessner/",
  github: `https://github.com/${githubUsername}/`,
  mail: "mailto:jakob.roessner@outlook.de",
  leetcode: "https://leetcode.com/FleetAdmiralJakob/",
  codewars: "https://www.codewars.com/users/FleetAdmiralJakob"
};

export async function githubData(repoName?: string): Promise<GithubData> {
  const response = await octokit.request(
    `GET /${repoName ? `repos` : "users"}/FleetAdmiralJakob${
      repoName ? `/${repoName}` : ""
    }`
  );
  return response.data;
}

export async function costumGithubRepoData(url): Promise<GithubData> {
  url = url.substring(19);
  const response = await octokit.request(`GET /repos/${url}`);
  return response.data;
}

export default linkData;
