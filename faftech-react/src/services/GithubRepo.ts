export type RepoSimple = {
  html_url: string;
  title: string;
  desc: string;
  tags: string[];
  image: string;
};

export async function fetchGitHubRepos(username: string): Promise<RepoSimple[]> {
  const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=15`, {
    headers: {
      Accept: "application/vnd.github.mercy-preview+json",
    },
  });

  if (!res.ok) throw new Error("Gagal fetch repos");

  const data = await res.json();

  const result: RepoSimple[] = data.map((repo: any) => ({
    html_url: repo.html_url,
    title: repo.name,
    desc: repo.description || "",
    tags: repo.topics || [],
    image: `https://raw.githubusercontent.com/${repo.owner.login}/${repo.name}/main/Preview.png`
  }));

  return result;
}
