/*!
    * Start Bootstrap - Freelancer v6.0.5 (https://startbootstrap.com/theme/freelancer)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
    */
    (function($) {
    "use strict"; // Start of use strict
  
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: (target.offset().top - 71)
          }, 1000, "easeInOutExpo");
          return false;
        }
      }
    });
  
    // Scroll to top button appear
    $(document).scroll(function() {
      var scrollDistance = $(this).scrollTop();
      if (scrollDistance > 100) {
        $('.scroll-to-top').fadeIn();
      } else {
        $('.scroll-to-top').fadeOut();
      }
    });
  
    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
      $('.navbar-collapse').collapse('hide');
    });
  
    // Activate scrollspy to add active class to navbar items on scroll
    $('body').scrollspy({
      target: '#mainNav',
      offset: 80
    });
  
    // Collapse Navbar
    var navbarCollapse = function() {
      if ($("#mainNav").offset().top > 100) {
        $("#mainNav").addClass("navbar-shrink");
      } else {
        $("#mainNav").removeClass("navbar-shrink");
      }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);
  
    // Floating label headings for the contact form
    $(function() {
      $("body").on("input propertychange", ".floating-label-form-group", function(e) {
        $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
      }).on("focus", ".floating-label-form-group", function() {
        $(this).addClass("floating-label-form-group-with-focus");
      }).on("blur", ".floating-label-form-group", function() {
        $(this).removeClass("floating-label-form-group-with-focus");
      });
    });
  
  })(jQuery); // End of use strict
  
  $.getJSON(
    "https://al-quran-8d642.firebaseio.com/data.json?print=pretty",
    function(data){
        console.log(data);

        var nama = data[0].nama;
        var keterangan = data[0].keterangan;
        var nama1 = data[1].nama;
        var keterangan1 = data[1].keterangan;
        var nama2 = data[2].nama;
        var keterangan2 = data[2].keterangan;
        var nama3 = data[3].nama;
        var keterangan3 = data[3].keterangan;
        var nama4 = data[4].nama;
        var keterangan4 = data[4].keterangan;
        var nama5 = data[5].nama;
        var keterangan5 = data[5].keterangan;

        $(".nama").append(nama);
        $(".keterangan").append(keterangan);
        $(".nama1").append(nama1);
        $(".keterangan1").append(keterangan1);
        $(".nama2").append(nama2);
        $(".keterangan2").append(keterangan2);
        $(".nama3").append(nama3);
        $(".keterangan3").append(keterangan3);
        $(".nama4").append(nama4);
        $(".keterangan4").append(keterangan4);
        $(".nama5").append(nama2);
        $(".keterangan5").append(keterangan5);
      }
    );

    $.getJSON(
      "https://al-quran-8d642.firebaseio.com/surat/1.json?print=pretty",
      function(data){
          console.log(data);
  
          var ar = data[0].ar;
          var id = data[0].id;
          var tr = data[0].tr;
  
          $(".ar").append(ar);
          $(".id").append(id);
          $(".tr").append(tr);
        }
      );