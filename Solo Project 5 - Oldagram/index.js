const posts = [{
  name: "Vincent van Gogh",
  username: "vincey1853",
  location: "Zundert, Netherlands",
  avatar: "images/avatar-vangogh.jpg",
  post: "images/post-vangogh.jpg",
  comment: "just took a few mushrooms lol",
  likes: 21
},
  {
    name: "Gustave Courbet",
    username: "gus1819",
    location: "Ornans, France",
    avatar: "images/avatar-courbet.jpg",
    post: "images/post-courbet.jpg",
    comment: "i'm feelin a bit stressed tbh",
    likes: 4
  },
  {
    name: "Joseph Ducreux",
    username: "jd1735",
    location: "Paris, France",
    avatar: "images/avatar-ducreux.jpg",
    post: "images/post-ducreux.jpg",
    comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
    likes: 152
  }]

const main = document.querySelector('main')

function render() {
    postEl.innerHTML = ''
    posts.forEach(({name, username, location, avatar, post, comment, likes}) => {
    main.innerHTML += `<section class="post-meta">
        <div class="container">
          <img src="${avatar}" alt="User Image" class="post-user-avatar" id="post-user-avatar">
          <div class="post-user-details">
            <p class="post-user-name bold">
              ${name}
            </p>
            <p class="post-location">
              ${location}
            </p>
          </div>
        </div>
      </section>
      <section id="post-img">
        <img src="${post}" alt="${name.match(/\w+/g)[0].toLowerCase()}'s Post">
      </section>
      <section class="engage">
        <div class="container">
          <button class="like" onclick="like(${name.match(/\w+/g)[0].toLowerCase()})">
            <img src="images/icon-heart.png" alt="Like">
          </button>
          <button class="comment">
            <img src="images/icon-comment.png" alt="Comment">
          </button>
          <button class="dm">
            <img src="images/icon-dm.png" alt="Message">
          </button>
        </div>
      </section>
      <section class="post-likes">
        <div class="container">
          <p id="${name.match(/\w+/)[0].toLowerCase()}-likes" class="bold">
            ${likes}
          </p>
        </div>
      </section>
      <section class="comments">
        <div class="container">
          <p class="comment">
            <span id="username" class="bold">${username}</span> ${comment}
          </p>
        </div>
      </section>`
    })
}
render()

function like(name) {
    let likes = document.querySelector(`#${name}-likes`).textContent
    let likeVal = parseInt(likes)
    likes = likeVal++
    postEl.innerHTML = ""
    render()
}
