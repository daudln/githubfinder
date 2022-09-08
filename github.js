class Github {
  constructor() {
    this.client_id = "54f7bddd8abfff200eb5";
    this.client_secret = "6094b2a69cf717e4ce56788963fd8dd96944519f";
    this.repos_count = 5;
    this.repos_sort = "created:asc";
  }

  async getUser(user) {
    const profileData = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const repos = await fetch(
      `https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile_data = await profileData.json();
    const reposData = await repos.json();
    return {
      profile_data,
      reposData,
    };
  }
}
