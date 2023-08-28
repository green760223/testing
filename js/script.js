/* =======================================================
    |   |   |   Show/Hide Navbar
 ======================================================= */
// $(document).ready(function() {
//   $(window).scroll(function() {
//     let position = $(this).scrollTop();

//     if (position >= 150) {
//       $(".nav-menu").addClass("custom-navbar");
//     } else {
//       $(".nav-menu").removeClass("custom-navbar");
//     }
//   });
// });

/* =======================================================
    |   |   |   
 ======================================================= */
// $("body").scrollspy({ target: "#main-nav" });

// $("#main-nav a").on("click", function(event) {
//   if (this.hash !== "") {
//     event.preventDefault();

//     const hash = this.hash;

//     $("html, body").animate(
//       {
//         scrollTop: $(hash).offset().top - 60
//       },
//       1200,
//       "easeInOutExpo",
//       function() {
//         window.location.hash = hash;
//       }
//     );
//   }
// });

/* =======================================================
    |   |   |   Preloader
 ======================================================= */
$(window).on("load", function() {
  // make sure that whole site is loaded
  $("#status").fadeOut();
  $("#preloader")
    .delay(500)
    .fadeOut("slow");
});

/* =======================================================
   |   |   |   Stats
======================================================= */
$(function() {
  $(".counter").counterUp({
    delay: 10,
    time: 2000
  });
});

/* =======================================================
    |   |   |   Typed Effect
 ======================================================= */
// var text = $(".typed");

//   $(function() {
//     text.typed({
//       strings: ["Alex Smith.", "Designer.", "Developer.", "Freelancer.", "Photographer."],
//       // typeSpeed: 50,
//       // loop: true,
//       fadeOut: false,
//       showCursor: false
//     });
//   });
var text = $(".typed");

$(function() {
  text.typed({
    strings: [
      "Alex Smith.",
      "Designer.",
      "Developer.",
      "Freelancer.",
      "Photographer."
    ],
    typeSpeed: 50,
    loop: true,
    fadeOut: true,
    showCursor: false
  });
});

/* =======================================================
   |   |   |   Clients Carousel
======================================================= */
$(function() {
  $("#clients-list").owlCarousel({
    items: 5,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    nav: false,
    dots: false,
    responsive: {
      // breakpoint from 0 up
      0: {
        items: 2
      },
      // breakpoint from 480 up
      480: {
        items: 3
      },
      // breakpoint from 768 up
      768: {
        items: 5
      }
    }
  });
});

/* =======================================================
   |   |   |   Our Portfolios
======================================================= */
$(window).on("load", function() {
  // initialize Isotope
  $("#isotope-container").isotope({});

  // filter items on button click
  $("#isotope-filters").on("click", "button", function() {
    // get filter value
    var filterValue = $(this).attr("data-filter");

    // filter portfolio
    $("#isotope-container").isotope({
      filter: filterValue
    });

    // Hide or Show see more button
    if (filterValue != "*") {
      $("#see-more-btn").hide();
    } else {
      $("#see-more-btn").show();
    }

    // active button
    $("#isotope-filters")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });
});

// Waterfal layout
// $(function() {
//   $(".test2").masonry({
//     itemSelector: ".item"
//   });

//   console.log("masonry");
// });

/* =======================================================
   |   |   |   Magnifier
======================================================= */
$(function() {
  $("#portfolio-wrapper").magnificPopup({
    delegate: "a",
    type: "image",
    gallery: {
      enabled: true
    }
  });
});

/* =======================================================
   |   |   |   Navigation
======================================================= */
// Show and hide white navigation
$(function() {
  // show/hide nav on page load
  showHideNav();

  $(window).scroll(function() {
    // show/hide nav on window's scroll
    showHideNav();
  });

  function showHideNav() {
    if ($(window).scrollTop() > 200) {
      // show white nav
      $(".nav-menu").addClass("custom-navbar");

      // show back to top button
      $("#back-to-top").fadeIn();
      $("#back-to-top").addClass("d-lg-block");
    } else {
      // hide white nav
      $(".nav-menu").removeClass("custom-navbar");

      // hide back to top button
      $("#back-to-top").removeClass("d-lg-block");
      $("#back-to-top").fadeOut();
    }
  }
});

/* =======================================================
   |   |   |   Smooth Scrolling
======================================================= */
$(function() {
  $("a.smooth-scroll").click(function(event) {
    event.preventDefault();

    // get section id like #about, #services, etc...
    var section_id = $(this).attr("href");

    $("html, body").animate(
      {
        scrollTop: $(section_id).offset().top - 60
      },
      1250,
      "easeInOutExpo"
    );
  });
});

/* =======================================================
   |   |   |   Load More 
======================================================= */
// var $masonry = $(".masonry").masonry({
//   itemSelector: ".item"
// });

// $(".btn-load-more").on("click", function() {
//   var items = [
//     '<div class="item"><h1>test1</h1></div>',
//     '<div class="item"><h1>test2</h1></div>',
//     '<div class="item"><h1>test3</h1></div>'
//   ];

//   var $items = $(items);
//   $masonry.append($items).masonry("appended", $items);
//   console.log("clicked");
// });

// // Load more
// var $grid = $(".grid").isotope({
//   itemSelector: ".item"
// });

// $(".btn-load-more").on("click", function() {
//   // create new item elements
//   var $items = $('<div class="grid-item">test</div>');
//   // append elements to container
//   $grid
//     .append($items)
//     // add and lay out newly appended elements
//     .isotope("appended", $items);

//   console.log("clicked!");
// });

// $(function() {
//   $(".hidden")
//     .slice(0, 4)
//     .show();

//   $("#load-more").on("click", function(e) {
//     e.preventDefault();

//     $(".hidden:hidden")
//       .slice(0, 2)
//       .slideDown();
//     // $("#isotopecontainer").isotope("reloadItems");
//     if ($(".hidden:hidden").length == 0) {
//       $("#load").fadeOut("slow");
//     }
//   });
// });
