const form = document.getElementById("form").addEventListener("submit", getPost)

const inputValue = document.querySelector("#inputValue")
const postsContainer = document.querySelector(".posts-container")
const postContent = document.querySelector(".post-content")
const postComments = document.querySelector(".post-comments")
const titlePost = document.querySelector(".title_post")
const bodyPost = document.querySelector(".body_post")
const btnShowComments = document.querySelector(".btn-show-comments")
btnShowComments.addEventListener("click", getComments)
const btnHideComments = document.querySelector(".btn-hide-comments")
btnHideComments.addEventListener("click", hideComments)

function getPost(event) {
  event.preventDefault()
  showSpinner()
  if (+inputValue.value < 1 || +inputValue.value > 100) {
    alert("Please enter a number from 1 to 100")
    return
  }
  postComments.innerHTML = ""

  fetch(`https://jsonplaceholder.typicode.com/posts/${inputValue.value}`)
    .then(res => res.json())
    .then(post => {
      postContent.style.display = "flex"
      titlePost.textContent = post.title.toUpperCase()
      bodyPost.textContent = post.body
      hideSpinner()
    })
    .catch(error => {
      hideSpinner()
      alert(error.message)
    })

  btnShowComments.removeAttribute("disabled")
  btnHideComments.setAttribute("disabled", "")
}

function getComments() {
  const params = new URLSearchParams()
  params.append("postId", inputValue.value)
  showSpinner()
  fetch("https://jsonplaceholder.typicode.com/comments?" + params)
    .then(res => res.json())
    .then(comments => {
      if (comments.length === 0) return
      postComments.style.display = "block"

      const commentCards = comments.map(comment => {
        const commentCard = document.createElement("div")
        commentCard.classList.add("comment-card")

        const commentTitle = document.createElement("h4")
        commentTitle.classList.add("comment-title")
        commentTitle.textContent = comment.name
        commentCard.appendChild(commentTitle)

        const commentBody = document.createElement("p")
        commentBody.classList.add("comment-body")
        commentBody.textContent = comment.body
        commentCard.appendChild(commentBody)

        const commentEmail = document.createElement("p")
        commentEmail.classList.add("comment-email")
        commentEmail.textContent = comment.email
        commentCard.appendChild(commentEmail)

        return commentCard
      })

      commentCards.forEach(function (commentCard) {
        postComments.appendChild(commentCard)
      })
      hideSpinner()
    })
    .catch(error => {
      hideSpinner()
      alert(error.message)
    })
  btnShowComments.setAttribute("disabled", "")
  btnHideComments.removeAttribute("disabled")
}

function hideComments() {
  postComments.innerHTML = ""
  btnShowComments.removeAttribute("disabled")
  btnHideComments.setAttribute("disabled", "")
}

function showSpinner() {
  document.getElementById("spinner").style.display = "block"
}

function hideSpinner() {
  document.getElementById("spinner").style.display = "none"
}
