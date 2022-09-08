const githubUser = new Github();
const ui = new UI();
document.getElementById("gitfinder").addEventListener("keyup", (e) => {
  const usertext = e.target.value;
  if (usertext !== "") {
    githubUser.getUser(usertext).then((data) => {
      if (data.profile_data.message === "Not Found") {
        //show alert - user not found
        ui.showAlert("User not found", "alert alert-danger mt-4");
      } else {
        //show profile
        ui.showProfile(data.profile_data);
        ui.showRepos(data.reposData);
        // console.log(data.reposData);
      }
    });
  } else {
    //clear profile and repose
    ui.clearProfile();
  }
});
