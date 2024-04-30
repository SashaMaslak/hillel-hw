const form = document.getElementById("form").addEventListener("submit", getPost)

const inputValue = document.querySelector("#inputValue")
const titlePost = document.querySelector(".title_post")
const bodyPost = document.querySelector(".body_post")
const btnShowComments = document
  .querySelector(".btn-show-comments")
  .addEventListener("click", getComments)

function getPost(event) {
  event.preventDefault()
  const numberPost = inputValue.value

  fetch(`https://jsonplaceholder.typicode.com/posts/${numberPost}`)
    .then(res => res.json())
    .then(post => {
      titlePost.textContent = post.title.toUpperCase()
      bodyPost.textContent = post.body
    })
}

function getComments() {
  const numberPost = inputValue.value
  const params = new URLSearchParams()
  params.append("postId", numberPost)

  fetch("https://jsonplaceholder.typicode.com/comments?" + params)
    .then(res => res.json())
    .then(comments => {
      console.log(comments, comments)
    })
}
