import $ from "jquery";

$(function () {
  let sliderImages = $(".slider__container");
  let sliderItem = $(".slider__item");
  let sliderSpeed = 5000;
  let lastSlide = $(sliderItem[sliderItem.length - 1]).index();

  sliderImages.each((index) => {
    $("ol.slider__pagers").append(`<li>${index + 1}</li>`);
  });

  let pagersItem = $("ol.slider__pagers li");

  pagersItem.first().addClass("active");
  sliderItem.hide().first().show();

  function sliderSwitcher(current) {
    sliderItem.fadeOut(300).eq(current).fadeIn(300);
    pagersItem.removeClass("active").eq(current).addClass("active");
    resetTiming();
  }

  pagersItem.on("click", function () {
    if (!$(this).hasClass("active")) {
      let index = $(this).index();
      sliderSwitcher(index);
    }
  });

  function sliderTiming() {
    let sliderTarget = $("ol.slider__pagers li.active").index();
    sliderTarget = sliderTarget === lastSlide ? 0 : ++sliderTarget;
    sliderSwitcher(sliderTarget);
  }

  function sliderPrev() {
    let sliderTarget = $("ol.slider__pagers li.active").index();
    sliderTarget = sliderTarget === 0 ? lastSlide : --sliderTarget;
    sliderSwitcher(sliderTarget);
  }

  let sliderRun = setInterval(sliderTiming, sliderSpeed);

  function resetTiming() {
    clearInterval(sliderRun);
    sliderRun = setInterval(sliderTiming, sliderSpeed);
  }

  $(".controls__item--next").on("click", sliderTiming);
  $(".controls__item--prev").on("click", sliderPrev);
})

function checkImageHeight() {
  let sliderHeight = $(".slider__container").height();
  $(".slider__list").css("height", sliderHeight + "px");
}

$(window).on("load", checkImageHeight);
