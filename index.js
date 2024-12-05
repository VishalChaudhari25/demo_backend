require('dotenv').config()
const express = require('express')
const app = express()
const port =3000 

const githubdata ={
    "login": "VishalChaudhari25",
    "id": 177100163,
    "node_id": "U_kgDOCo5Vgw",
    "avatar_url": "https://avatars.githubusercontent.com/u/177100163?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/VishalChaudhari25",
    "html_url": "https://github.com/VishalChaudhari25",
    "followers_url": "https://api.github.com/users/VishalChaudhari25/followers",
    "following_url": "https://api.github.com/users/VishalChaudhari25/following{/other_user}",
    "gists_url": "https://api.github.com/users/VishalChaudhari25/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/VishalChaudhari25/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/VishalChaudhari25/subscriptions",
    "organizations_url": "https://api.github.com/users/VishalChaudhari25/orgs",
    "repos_url": "https://api.github.com/users/VishalChaudhari25/repos",
    "events_url": "https://api.github.com/users/VishalChaudhari25/events{/privacy}",
    "received_events_url": "https://api.github.com/users/VishalChaudhari25/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": null,
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 8,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2024-07-31T07:36:03Z",
    "updated_at": "2024-11-08T10:09:55Z"
  }

>>
app.get('/', (req, res) => {
  res.send('Hello World!')
})




app.get('/twitter',(req, res) =>{
    res.send('vishalchaudhari')
})

app.get('/login', (req,res) => {
    res.send('<h1>please login at chai or code</h1>')
})

app.get('/youtube', (req,res) => {
    res.send('<h2>this is the youtube </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubdata)
  })

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})