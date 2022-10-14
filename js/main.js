function stopAnimateOnScroll() {
  $("html, body").on(
    "scroll mousedown wheel DOMMouseScroll mousewheel keyup touchmove",
    function () {
      $("html, body").stop();
    }
  );
}

function setActiveMenuItem() {
  var currentSection = null;
  var c = $(".page-wrapper .section.section-active").data("num");
  $(".section").each(function () {
    var element = $(this).attr("id");
    if ($("#" + element).is("*")) {
      if ($(window).scrollTop() >= $("#" + element).offset().top - 150) {
        currentSection = element;
      }
    }
  });
  $(".nav-menu ul li")
    .removeClass("current")
    .find('a[href*="#' + currentSection + '"]')
    .parent()
    .addClass("current");
  $(".page-wrapper .section").removeClass("section-active");
  $("#" + currentSection).addClass("section-active");
  if (c !== $("#" + currentSection).data("num")) {
    c = $("#" + currentSection).data("num");
    $(".current-num span").animate(
      { opacity: "0", left: "-5px" },
      150,
      function () {
        $(this).text(c).animate({ opacity: "1", left: "0" }, 150);
      }
    );
  }
}

function setSlowScroll() {
  $('.nav-menu ul li a[href^="#"], a.button, .slow-scroll').on(
    "click",
    function (e) {
      if ($(this).attr("href") === "#") {
        e.preventDefault();
      } else {
        $("html, body").animate({ scrollTop: $(this.hash).offset().top }, 1500);
        return false;
      }
    }
  );
}

function setMenu() {
  $(".nav-btn").on("click", function () {
    $(".nav-btn, .s-nav").toggleClass("active");
    return false;
  });

  if ($(window).width() > 1200) {
    $(".dropdown").on("mouseenter", function () {
      $(this).find("ul").show("ease");
    });
    $(".nav-list").on("mouseleave", function () {
      $(".dropdown ul").hide("ease");
    });
  } else {
    $(".dropdown").on("click", function () {
      $(this).find("ul").toggle("ease");
    });
  }

  $(".nav-list>li>a").on("click", function () {
    if ($(window).width() < 1200) {
      $(".s-nav, .nav-btn").toggleClass("active");
    }
  });
}
