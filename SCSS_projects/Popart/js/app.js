$(function () {
  let scroll = $(window).scrollTop()

  if (scroll > 0) {
    $("header").addClass("sticky")
  } else {
    $("header").removeClass("sticky")
  }

  $(window).scroll(function () {
    scroll = $(window).scrollTop()

    if (scroll > 0) {
      $("header").addClass("sticky")
    } else {
      $("header").removeClass("sticky")
    }
  })
})
