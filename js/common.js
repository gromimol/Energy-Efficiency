$(document).ready(function () {
  // select
  $(".select")
    .on("click", ".placeholder", function () {
      var parent = $(this).closest(".select");
      if (!parent.hasClass("is-open")) {
        parent.addClass("is-open");
        $(".select.is-open").not(parent).removeClass("is-open");
      } else {
        parent.removeClass("is-open");
      }
    })
    .on("click", "ul>li", function () {
      var parent = $(this).closest(".select");
      parent.removeClass("is-open").find(".placeholder").text($(this).text());
      parent
        .find("input[type=hidden]")
        .attr("value", $(this).attr("data-value"));
    });

  // slider
  $(".projects-slider").slick({
    slidesToShow: 3,
    prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    responsive: [{
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 568,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".our-projects-slider").slick({
    slidesToShow: 2,
    prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    responsive: [{
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
      },
    }, ],
  });
  $(window).resize(function () {
    if ($(window).width() < 480) {
      $(".slider-on-mobile").slick({
        prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
        nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
      });
    } else {
      $(".slider-on-mobile").slick("unslick");
    }
  });
  if ($(window).width() < 480) {
    $(".slider-on-mobile").slick({
      prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
      nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
    });
  }

  $(".burger").on("click", function () {
    $("body").toggleClass("menu-open");
  });

  $("#phone").mask("+7(999) 999-9999");

  // Popup
  $(".js--interview").on("click", function (e) {
    e.preventDefault();

    $("#overlay").show();
    $("#interview").addClass("active");
  });
  $(".js--feedback").on("click", function (e) {
    e.preventDefault();

    $("#overlay").show();
    $("#feedback").addClass("active");
  });

  $("#overlay, .close").on("click", function (e) {
    e.preventDefault();

    $("#overlay").hide();
    $(".popup, .popup-form").removeClass("active");
    $(".js--show-form").removeClass("hidden");
  });

  // показ формы в попапе
  $(".js--show-form").on("click", function () {
    $(this).addClass("hidden");
    $(".popup-form").addClass("active");
  });

  $(".project-inner__slider").slick({
    dots: true,
    prevArrow: '<span class="prev-slide--lt"></span>',
    nextArrow: '<span class="next-slide--lt"></span>',
  });

  $(".project-tab-list a").on("click", function (e) {
    e.preventDefault();

    let id = $(this).data("tab");
    $(".tab, .project-tab-list a").removeClass("active");
    $(this).addClass("active");
    $("#" + id).addClass("active");
  });

  // Плюс/минус товар для корзины
  (function () {
    $(".minus").on("click", function () {
      var data = $(this).closest(".product-counter").find($(".count-input"));
      var dataVal = data.val();
      if (dataVal > 0) {
        data.val(parseInt(dataVal) - 1);
      }
      return false;
    });

    $(".plus").click(function () {
      var data = $(this).closest(".product-counter").find($(".count-input"));
      var dataVal = data.val();
      if (dataVal >= 100) return;
      data.val(parseInt(dataVal) + 1);
      return false;
    });
  })();

  if ($(window).width() < 1200) {
    $('html').on('click', function () {
      $('.tip').removeClass('active');
    });
    $('.tip .icon').on('click', function (e) {
      e.stopPropagation();
      $(this).parent().toggleClass('active');
    })
  }
});