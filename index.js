// when client request from the server using GET, server sends the response using express to the client
require("dotenv").config();
const express = require("express");
const app = express();
const port = 4000;

const githubData = {
  login: "bhattaman0001",
  id: 87806212,
  node_id: "MDQ6VXNlcjg3ODA2MjEy",
  avatar_url: "https://avatars.githubusercontent.com/u/87806212?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/bhattaman0001",
  html_url: "https://github.com/bhattaman0001",
  followers_url: "https://api.github.com/users/bhattaman0001/followers",
  following_url:
    "https://api.github.com/users/bhattaman0001/following{/other_user}",
  gists_url: "https://api.github.com/users/bhattaman0001/gists{/gist_id}",
  starred_url:
    "https://api.github.com/users/bhattaman0001/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/bhattaman0001/subscriptions",
  organizations_url: "https://api.github.com/users/bhattaman0001/orgs",
  repos_url: "https://api.github.com/users/bhattaman0001/repos",
  events_url: "https://api.github.com/users/bhattaman0001/events{/privacy}",
  received_events_url:
    "https://api.github.com/users/bhattaman0001/received_events",
  type: "User",
  site_admin: false,
  name: "Aman Bhatt",
  company: null,
  blog: "https://www.linkedin.com/in/iamamanbhatt/",
  location: "Uttarakhand, India",
  email: null,
  hireable: null,
  bio: "Follow me to know more about me!!",
  twitter_username: "Iam_AmanBhatt",
  public_repos: 47,
  public_gists: 0,
  followers: 17,
  following: 12,
  created_at: "2021-07-22T09:21:54Z",
  updated_at: "2023-10-07T06:29:55Z",
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("bhattaman0001dotcom");
});

app.get("/login", (req, res) => {
  res.send("<h1>user is logged In</h1>");
});

// send the json data
app.get("/github", (req, res) => {
  res.json(githubData);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
