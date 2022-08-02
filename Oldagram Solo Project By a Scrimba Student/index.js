const postsEL = document.getElementById("posts")
const posts = [{
  id: 0,
  name: "Vincent van Gogh",
  username: "vincey1853",
  location: "Zundert, Netherlands",
  avatar: "images/avatar-vangogh.jpg",
  post: "images/post-vangogh.jpg",
  comment: "just took a few mushrooms lol",
  likes: 21
},
  {
    id: 1,
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    id: 2,
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }]

function render_posts() {
  for (let i = 0; i < posts.length; i++) {
    postsEL.innerHTML += `
    <section class="post-container">
    <div class="post-info">
    <img class="avatar" src="${posts[i].avatar}" alt="">
    <div class="post-header">
    <p class="post-info-name">${posts[i].name}</p>
    <p class="post-info-location">${posts[i].location}</p>
    </div>
    </div>
    <img class="post-img" src="${posts[i].post}" alt="post image">
    <div class="post-body">
    <div class="icons">
    <button class="heart" onclick="liked(${posts[i].id})"><img src="images/icon-heart.png"></button>
    <button class="comment"><img src="images/icon-comment.png"></button>
    <button class="dm"><img src="images/icon-dm.png"></button>
    </div>
    <a class="like-count" id="like-post-num-${i}")">${posts[i].likes} likes</a>
    <p><a class="caption">
    <span class="username">${posts[i].username}</span>
    ${posts[i].comment}
    </p></a>
    </div>
    </section>`
  }
}

function liked(id) {
  posts[id].likes++
  postsEL.innerHTML = ""
  render_posts()
}
render_posts()