const form = document.getElementById("form")
form.addEventListener("submit", handleFormSubmit)

const inputValue = document.querySelector("#inputValue")
const postsContainer = document.querySelector(".posts-container")
const postContent = document.querySelector(".post-content")
const postComments = document.querySelector(".post-comments")
const titlePost = document.querySelector(".title_post")
const bodyPost = document.querySelector(".body_post")
const btnShowComments = document.querySelector(".btn-show-comments")
const btnHideComments = document.querySelector(".btn-hide-comments")

btnShowComments.addEventListener("click", handleShowCommentsClick)
btnHideComments.addEventListener("click", hideComments)

function handleFormSubmit(event) {
  event.preventDefault()
  const postId = +inputValue.value
  if (postId < 1 || postId > 100) {
    alert("Please enter a number from 1 to 100")
    return
  }
  showSpinner()
  clearComments()
  getPost(postId).then(displayPost).catch(handleError).finally(hideSpinner)
}

function getPost(postId) {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`).then(
    response => response.json()
  )
}

function displayPost(post) {
  postContent.style.display = "flex"
  titlePost.textContent = post.title.toUpperCase()
  bodyPost.textContent = post.body
  btnShowComments.removeAttribute("disabled")
  btnHideComments.setAttribute("disabled", "")
}

function handleShowCommentsClick() {
  showSpinner()
  const postId = +inputValue.value
  getComments(postId)
    .then(renderComments)
    .catch(handleError)
    .finally(hideSpinner)
}

function getComments(postId) {
  const params = new URLSearchParams({ postId })
  return fetch(
    `https://jsonplaceholder.typicode.com/comments?${params.toString()}`
  ).then(response => response.json())
}

function renderComments(comments) {
  if (comments.length === 0) return
  postComments.style.display = "block"
  comments.forEach(comment => {
    const commentCard = createCommentCard(comment)
    postComments.appendChild(commentCard)
  })
  btnShowComments.setAttribute("disabled", "")
  btnHideComments.removeAttribute("disabled")
}

function createCommentCard(comment) {
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
}

function hideComments() {
  postComments.innerHTML = ""
  btnShowComments.removeAttribute("disabled")
  btnHideComments.setAttribute("disabled", "")
}

function clearComments() {
  postComments.innerHTML = ""
}

function handleError(error) {
  alert(error.message)
}

function showSpinner() {
  document.getElementById("spinner").style.display = "block"
}

function hideSpinner() {
  document.getElementById("spinner").style.display = "none"
}
