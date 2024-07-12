async function fetchRepos(username) {
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos;
}

function displayRepos(repos) {
    const reposContainer = document.getElementById('repos');
    reposContainer.innerHTML = '';

    repos.forEach(repo => {
        const repoElement = document.createElement('div');
        repoElement.className = 'repo-card';

        const repoName = document.createElement('h2');
        repoName.textContent = repo.name;

        const repoDescription = document.createElement('p');
        repoDescription.textContent = repo.description;

        const repoLink = document.createElement('a');
        repoLink.href = repo.html_url;
        repoLink.textContent = 'View Repository';
        repoLink.target = '_blank';

        repoElement.appendChild(repoName);
        repoElement.appendChild(repoDescription);
        repoElement.appendChild(repoLink);

        reposContainer.appendChild(repoElement);
    });
}

async function showUserRepos() {
    const username = "NiqueWrld";
    const repos = await fetchRepos(username);
    displayRepos(repos);
}

showUserRepos();
