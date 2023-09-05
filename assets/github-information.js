function fetchGitHubInformation() {
    var username = $("#gh-username").val();

    if (!username) {
        $("#gh-user-data").html(`<h2>Please enter a GitHub username</h2>`);
        return;
    }

    $("#gh-user-data").html(
        `<div id="loader">
            <img src="assets/css/loader.gif" alt="loading..." />
        </div>`);

    $.ajax({
        url: `https://api.github.com/users/${username}`,
        success: function (data) {
            // Process and display user data here
            $("#gh-user-data").html(`<h2>${data.name}</h2><p>${data.bio}</p>`);
        },
        error: function () {
            $("#gh-user-data").html(`<h2>There was an error fetching GitHub data</h2>`);
        },
        complete: function () {
            $("#loader").remove(); // Remove the loading spinner
        }
    });
}
