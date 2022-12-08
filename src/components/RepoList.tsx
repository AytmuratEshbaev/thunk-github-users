import "./RepoList.css";

function RepoList({ repos }: any) {
  return (
    <ul className="repolist">
      {!repos.message ? (
        repos.map((repo: any) => (
          <li className="repo" key={repo.id}>
            <a href={repo.html_url}>{repo.name}</a>
          </li>
        ))
      ) : (
        <p className="notFound">{repos.message}</p>
      )}
    </ul>
  );
}

export default RepoList;
