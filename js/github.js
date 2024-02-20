const mainGithub = document.getElementById('mainGithub');
const inputGithub = document.getElementById('searchGithub')
const formGithub = document.getElementById('formGithub')

const API = "https://api.github.com/users/"

async function getUser(name) {
    try {
        const { data } = await axios.get(API + name)
        getRepos(name)
        createUserCard(data)
    } catch {

    }
}

async function getRepos(name) {
    try {
        const { data } = await axios.get(API + name + "/repos?sort=created")
        updateUserRepos(data)
    } catch {

    }
}

function createUserCard(user) {
    let newHTML = ` <div class="card">
    <div><img src="${user.avatar_url}" alt="${user.name}" class="avatar"></div>
  
    <div class="user-info">
    <h2>${user.name}</h2>
    <p>${user.bio}</p>
  
    <ul class="github-ul">
        <li>${user.followers} <strong>Followers</strong></li>
        <li>${user.following}<strong>Following</strong></li>
        <li>${user.public_repos}<strong>Repos</strong></li>
    </ul>
  
    <div id="repos">
  
    </div> 
    </div>
  
  
    </div>`

    mainGithub.innerHTML = newHTML
}

function updateUserRepos(data) {
    const repos = document.getElementById('repos');
    data.slice(0, 10).map(repo => {
        const repoEl = document.createElement('a');
        repoEl.classList.add('repo')
        repoEl.href = repo.html_url;
        repoEl.target = "_blank"
        repoEl.innerText = repo.name

        repos.append(repoEl)
    })
}

formGithub.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = inputGithub.value;
    if (!name) { return }

    getUser(name)
    inputGithub.value = ''
})

