//slider Staff

$(document).ready(function () {
  $(".slider-staff").slick({
    dots: true,
    infinite: false,
    arrows: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

//slider Feedbacks

$(document).ready(function () {
  $(".slider-feedbacks").slick({
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ],
  });
});

// FAQ spoiler

function spoiler() {
  const spoilerQuestions = document.querySelectorAll(".spoiler-header-box");
  const spoilerAnswers = document.querySelectorAll(".spoiler-content");
  const spoilerIcons = document.querySelectorAll(".spoiler-icon");

  spoilerQuestions.forEach((item, i) => {
    item.addEventListener("click", function () {
      spoilerAnswers[i].classList.toggle("active-spoiler");
      item.classList.toggle("active-spoiler-header");
      spoilerIcons[i].classList.toggle("close-icon");
    });
  });
}

spoiler();
