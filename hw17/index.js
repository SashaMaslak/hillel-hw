$("#openModal").click(function () {
  $("#myModal").addClass("modal-show")
})

$(".close").click(function () {
  $("#myModal").removeClass("modal-show")
})

$(window).click(function (event) {
  if (event.target === $("#myModal")[0]) {
    $("#myModal").removeClass("modal-show")
  }
})

$(document).keydown(function (e) {
  if (e.key === "Escape" && $("#myModal").hasClass("modal-show")) {
    $("#myModal").removeClass("modal-show")
  }
})
