export interface GithubData {
  followers: string
  stargazers_count: number
}

const linkData = {
  linkedIn: "https://www.linkedin.com/in/jakobroessner/",
  github: "https://github.com/FleetAdmiralJakob",
  mail: "mailto:jakob.roessner@outlook.de",
  leetcode: "https://leetcode.com/FleetAdmiralJakob/",
};

export async function githubData(repoName?: string): Promise<GithubData> {
  const response = await fetch("https://api.github.com/users/FleetAdmiralJakob" + (repoName ? `/${repoName}` : ""));
  const data = await response.json();

  return data
}

export default linkData;
