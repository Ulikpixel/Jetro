$(function() {

    
    //----------- header menu ----------//

    $('.hamburger').on('click', function() {
        $('.hamburger').toggleClass('is-active');
        $('.menu__list').toggleClass('open-menu');
    });

    //---------- button top -----------//

    var btn = jQuery('.Button__top');

    jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 1000) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });
      btn.on('click', function(e) {
      e.preventDefault();
      jQuery('html, body').animate({scrollTop:0}, '1000');
    });
    
    var btn = jQuery('.Button__top');
      jQuery(window).scroll(function() {
      if (jQuery(window).scrollTop() > 1000) {
        btn.addClass('show');
      } else {
        btn.removeClass('show');
      }
    });

    //-------- slick slider ---------//

    $('.features__blocks .slick').slick({
      autoplay: true,
      dots: true,
      arrows: false,
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 991,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            dots: true
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2,
            dots: true
          }
        } 
      ]
    })


    //-------- sidebar ---------//

    $('.sidebar__btn').on('click', () => {
      $('.sidebar').toggleClass('sidebar-open');
    });


    //-------- alert button ---------//

    $('.about__btn div').on('click', () => {
      alert('Alert text!')
    });



});


