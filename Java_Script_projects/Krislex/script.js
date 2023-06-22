"use strict"

// HOMES - Heart-icon change color
const heartIcons = document.querySelectorAll(".heart-like")

heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    if (icon.style.fill === "red") {
      icon.style.fill = "white"
    } else {
      icon.style.fill = "red"
    }
  })
})

// SLIDER
const slider = function () {
  const slides = document.querySelectorAll(".slide")
  const btnLeft = document.querySelector(".slider__btn--left")
  const btnRight = document.querySelector(".slider__btn--right")
  const dotContainer = document.querySelector(".dots")

  let curSlide = 0
  const maxSlide = slides.length //ovo slides daje node list, a na node list mozemo prikaciti length.

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-850px)';
  // slider.style.overflow = 'visible';

  // Functions
  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentHTML(
        "beforeend",
        `<button class="dots__dot" data-slide="${i}"></button>`
      )
    })
  }

  const activateDot = function (slide) {
    document
      .querySelectorAll(".dots__dot")
      .forEach((dot) => dot.classList.remove("dots__dot--active"))

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add("dots__dot--active")
  }

  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    )
  }

  // Next slide
  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0
    } else {
      curSlide++
    }

    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const prevSlide = function () {
    if (curSlide === 0) {
      curSlide = maxSlide - 1
    } else {
      curSlide--
    }
    goToSlide(curSlide)
    activateDot(curSlide)
  }

  const init = function () {
    goToSlide(0) // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
    createDots()
    activateDot(0)
  }
  init()

  // Event handlers
  btnRight.addEventListener("click", nextSlide)
  btnLeft.addEventListener("click", prevSlide)
  // curSlide = 1: -100%, 0%, 100%, 200%

  document.addEventListener("keydown", function (e) {
    console.log(e)
    if (e.key === "ArrowLeft") prevSlide() // I nacin (if)
    e.key === "ArrowRight" && nextSlide() // II nacin (short circuiting)
  })

  dotContainer.addEventListener("click", function (e) {
    if (e.target.classList.contains("dots__dot")) {
      // console.log('DOT');
      const { slide } = e.target.dataset
      goToSlide(slide)
      activateDot(slide)
    }
  })
}
slider()

// CONTACT REALTOR - POPUP 2

const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnCloseModal = document.querySelector(".btn--close-modal")
const btnsOpenModal = document.querySelectorAll(".btn--show-modal")

const openModal = function (e) {
  e.preventDefault()
  modal.classList.remove("hidden")
  overlay.classList.remove("hidden")
}

const closeModal = function () {
  modal.classList.add("hidden")
  overlay.classList.add("hidden")
}

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal))

btnCloseModal.addEventListener("click", closeModal)
overlay.addEventListener("click", closeModal)

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal()
  }
})

// Proba da vidimo da li ce se videti izmena //
// 123 //
//456//
