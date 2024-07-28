Dev Finder 🚀

Dev Finder is a React application that allows users to search for GitHub profiles using the GitHub API to fetch user details and displays them in a card layout.

Features ✨

- Search for GitHub users by their username.
- Display user profile information including avatar, name, username, bio, and more.
- Show user statistics such as the number of public repositories, followers, and following.
- Display additional user details like location, blog, and Twitter handle if available.
- Default "Octocat" information displayed until a valid GitHub username is searched.


Installation 🔧

    Clone the repository:


git clone https://github.com/DoraNac/test-dev-finder.git
cd dev-finder

Install dependencies:

npm install

Start the development:

npm run dev


APIs 🌐

GitHub API 🐙

The application uses the GitHub API to fetch user profile information. The API endpoint used is:

https://api.github.com/users/USERNAME