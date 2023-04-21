export interface GithubData {
  followers: string;
  stargazers_count: string;
}

const linkData = {
  linkedIn: "https://www.linkedin.com/in/jakobroessner/",
  github: "https://github.com/FleetAdmiralJakob",
  mail: "mailto:jakob.roessner@outlook.de",
  leetcode: "https://leetcode.com/FleetAdmiralJakob/",
};

export async function githubData(repoName?: string): Promise<GithubData> {
  const requestUrl = `https://api.github.com/${repoName ? `repos` : "users"}/FleetAdmiralJakob${repoName ? `/${repoName}` : ""}`;
  const response = await fetch(requestUrl);
  return await response.json();
}

export default linkData;
