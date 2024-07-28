import React from "react";
import "../index.css";
import TwitterIcon from "../icons/Vector.png";
import GitHubIcon from "../icons/Vector(1).png";
import BlogIcon from "../icons/Vector(2).png";
import LocationIcon from "../icons/Vector(3).png";

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
const Card = ({ user = defaultUser }) => {
  return (
    <div className="card flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-10 max-w-full">
      <div className="w-full h-full md:w-1/2 flex flex-col md:items-start text-center md:text-left p-3 ml-1">
        <img
          src={user.avatar_url}
          alt="Profile"
          className="profile-image md:w-40 md:h-40"
        />
        <div className="mt-6">
          <h2 className="text-2xl md:text-4xl font-bold text-left">
            {user.name}
          </h2>
          <p className="text-lg md:text-xl">@{user.login}</p>
        </div>
        <div className="flex flex-col space-y-4 md:space-y-10 mt-6">
          <a
            href={`https://twitter.com/${user.twitter_username}`}
            className="text-lg md:text-xl flex items-center space-x-3"
          >
            <img src={TwitterIcon} alt="Twitter" className="w-5 h-5 " />
            <span>{user.twitter_username || "Not available"}</span>
          </a>
          <a
            href={user.html_url}
            className="text-lg md:text-xl flex items-center space-x-3"
          >
            <img src={GitHubIcon} alt="GitHub" className="w-5 h-5" />
            <span>@{user.login}</span>
          </a>
          <a
            href={user.blog}
            className="link-page text-lg md:text-xl flex items-center space-x-3"
          >
            <img src={BlogIcon} alt="Blog" className="w-5 h-5" />
            <span>{user.blog || "Not available"}</span>
          </a>
          <a
            href="#"
            className="text-lg md:text-xl flex items-center space-x-3"
          >
            <img src={LocationIcon} alt="Location" className="w-5 h-5" />
            <span>{user.location || "Not available"}</span>
          </a>
        </div>
      </div>
      <div className="w-full h-full md:w-2/2 flex flex-col justify-between p-3 md:p-9">
        <div className="flex flex-col items-center md:items-start space-y-10 md:space-y-20 mt-5">
          <div className="flex justify-between w-full text-white">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">
                {user.public_repos}
              </div>
              <div>Repos</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">
                {user.followers}
              </div>
              <div>Followers</div>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold">
                {user.following}
              </div>
              <div>Following</div>
            </div>
          </div>
          <div className="w-full text-left">
            <h3 className="text-lg md:text-xl">Biography</h3>
            <p className="biography-text text-lg md:text-xl">
              {user.bio || "No biography available."}
            </p>
          </div>
        </div>
        <div className="flex justify-end md:text-right text-center text-white w-full md:justify-end mt-5 md:mt-0">
          <p className="md:text-right">
            Joined on
            <br />
            {new Date(user.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
