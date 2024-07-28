import React, { useState } from "react";
import "../index.css";
import Card from "../components/Card";
import { fetchGitHubUser } from "../APIS/api";

const defaultUser = {
  avatar_url: "https://avatars.githubusercontent.com/u/583231?v=4",
  name: "The Octocat",
  login: "octocat",
  twitter_username: "Not available",
  html_url: "https://github.com/octocat",
  blog: "https://github.blog",
  location: "San Francisco",
  public_repos: 8,
  followers: 7665,
  following: 9,
  bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  created_at: "2011-01-25T18:44:36Z",
};

export default function Homepage() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(defaultUser);
  const [error, setError] = useState("");

  const handleSearch = async () => {
    const userData = await fetchGitHubUser(username);
    if (userData) {
      setUser(userData);
      setError("");
    } else {
      setError("User not found");
      setUser(defaultUser);
    }
  };

  return (
    <div className="flex min-h-screen flex-col sm:flex-row">
      <div className="flex p-4 sm:p-20 w-full sm:w-auto">
        <div className="left-side flex flex-col justify-around text-right w-full">
          <h1 className="text-4xl sm:text-8xl text-white mb-4 sm:mb-0">
            Dev <br />
            Finder
          </h1>

          <div className="search-wrapper flex flex-col items-end space-y-4 sm:space-y-8 mb-4 sm:mb-20">
            <input
              type="text"
              placeholder="Search GitHub"
              className="search-input sm:w-auto px-4 sm:px-6 py-2 text-xl sm:text-2xl rounded-full"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <button
              className="find-button w-full  sm:w-2/3 bg-transparent border-2 border-transparent px-4 sm:px-6 py-2   rounded-full"
              onClick={handleSearch}
            >
              Find
            </button>
            {error && <p className="text-red-500 ">{error}</p>}
          </div>
        </div>
      </div>

      <div className="w-full sm:w-2/3 flex items-center justify-center mt-4 sm:mt-0">
        <Card user={user} />
      </div>
      <div className="shadow-element"></div>
    </div>
  );
}
