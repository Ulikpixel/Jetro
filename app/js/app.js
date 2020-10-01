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


    //-------- gallery --------//

    $('.portfolio__btn').on('click', e => {

      if(e.target.className == "photo__all"){
        $('.photos__block').show();
        $('.portfolio__btn button').removeClass('btn-photo');
        $('.photo__all').addClass('btn-photo');
      }

      else if(e.target.className == "photo__print"){
        $('.photos__block').hide();
        $('.photos__block:even').show();
        $('.portfolio__btn button').removeClass('btn-photo');
        $('.photo__print').addClass('btn-photo');
      }

      else if(e.target.className == "photo__web"){
        $('.photos__block').hide();
        $('.photos__block:odd').show();
        $('.portfolio__btn button').removeClass('btn-photo');
        $('.photo__web').addClass('btn-photo');
      }

      else if(e.target.className == "photo__photoshop"){
        $('.photos__block').hide();
        $('.photos__block:eq(4)').show();
        $('.photos__block:eq(5)').show();
        $('.photos__block:eq(6)').show();
        $('.portfolio__btn button').removeClass('btn-photo');
        $('.photo__photoshop').addClass('btn-photo');
      }

      else if(e.target.className == "photo__wordpress"){
        $('.photos__block').hide();
        $('.photos__block:eq(8)').show();
        $('.photos__block:eq(9)').show();
        $('.photos__block:eq(3)').show();
        $('.portfolio__btn button').removeClass('btn-photo');
        $('.photo__wordpress').addClass('btn-photo');
      }
    });



});


