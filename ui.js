class UI {
  constructor() {
    this.profile = document.getElementById("profile");
  }
  showProfile(user) {
    this.profile.innerHTML = `
    
        <div class="card card-body my-3 bg-secondary">
          <div class="row">
            <div class="col-md-3">
              <img
                src="${user.avatar_url}"
                class="img-fluid card-img my-2"
              />

              <p class="h4 text-center">
                <span class="badge bg-primary">${user.name}</span>
              </p>
              <p class="text-center">
                <a href="${user.html_url}">
                    <button class="btn btn-info btn-block my-2">View Profile<i class="bi bi-github mx-2"></i></button>
                </a>
                
              </p>
            </div>
            <div class="col-md-9">
              <div class="h4">
                <span class="badge h2 bg-success">Public Repos: ${user.public_repos}</span>
                <span class="badge h2 bg-danger">Public gists: ${user.public_gists}</span>
                <span class="badge h2 bg-info">Followers: ${user.followers}</span>
                <span class="badge bg-primary">Following: ${user.following}</span>
              </div>

              <div class="list-group w-auto">
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <i class="bi bi-building h4 mt-2 text-danger"></i>
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Company</h6>
                      <p class="mb-0 opacity-75">${user.company}</p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <i class="fa fa-location fa-xl mt-4 flex-shrink-0"></i>
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Location</h6>
                      <p class="mb-0 opacity-75">${user.location}</p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <i class=" h4"></i>
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Bio</h6>
                      <p class="mb-0 opacity-75">${user.bio}</p>
                    </div>
                  </div>
                </a>
                <a
                  href="#"
                  class="list-group-item list-group-item-action d-flex gap-3 py-3"
                  aria-current="true"
                >
                  <i class="bi bi-person-plus h4 text-info"></i>
                  <div class="d-flex gap-2 w-100 justify-content-between">
                    <div>
                      <h6 class="mb-0">Joined Since</h6>
                      <p class="mb-0 opacity-75">${user.created_at}</p>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      `;
  }

  showRepos(data) {
    let repos = "";
    data.forEach((repo) => {
      repos += `
            <div class ="card card-body bg-secondary">
                
                <div class="row">
                    <div class = "col-md-4">
                        <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                    </div>
                    <div class="col-md-8">
                        <div class="h4">
                            <span class="badge h2 bg-success">Watcher count: ${repo.watchers_count}</span>
                            <span class="badge h2 bg-primary">Number of forks: ${repo.forks_count}</span>
                            <span class="badge h2 bg-info">Stargazers counts: ${repo.stargazers_count}</span>
                            
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    document.getElementById("repose").innerHTML = repos;
  }
  clearProfile() {
    this.profile.innerHTML = "";
    this.clearRepos();
  }

  showAlert(message, className) {
    ui.clearAlert();
    const div = document.createElement("div");
    div.setAttribute("class", className);
    div.innerHTML = message;
    const card = document.getElementById("card");
    const container = document.getElementById("container");
    container.insertBefore(div, card);
    this.clearProfile();
    setTimeout(() => this.clearAlert(), 2000);
  }

  clearAlert() {
    const current_alert = document.querySelector(".alert");
    if (current_alert) {
      current_alert.remove();
    }
  }

  clearRepos() {
    if (document.getElementById("repose").innerHTML) {
      document.getElementById("repose").innerHTML = "";
    }
  }
}
