
$(function () {


  //  ----- mask ------ //
  if ($(".phoneinp").length) {
    $('.phoneinp').inputmask({
      "mask": "+(999) 99 999 9999",
      showMaskOnHover: true,
      showMaskOnFocus: true,
    });
  }

  // ------ accordeon ------- //

  $('.question__acordeon-header').click(function () {
    $(this).toggleClass('active');
    $(this).find('.question__acordeon-arrow').toggleClass('rotate');
    $(this).next('.question__acordeon-body').slideToggle();
  });

  //  ---- btn up ------- //
  $('.btnup').hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 400) {
      $('.btnup').fadeIn();
    } else {
      $('.btnup').fadeOut();
    }
  });

  $('.btnup').click(function () {
    $('body, html').animate({
      scrollTop: 0
    }, 0);
  });


  //  ------- mobile menu ------ //
  $('.burger-btn').click(function () {
    $(this).toggleClass('active');
    $('.mobile__menu').toggleClass('active');
    $('body').toggleClass('hidden');
  });

  $('.mobile__link').click(function () {
    $('.burger-btn').removeClass('active');
    $('.mobile__menu').removeClass('active');
    $('body').removeClass('hidden');
  });

  //  ------- mobile sub menu ------ //
  $('.mobile__submenu').click(function () {
    $(this).find('ul').slideToggle("slow");
    $(this).toggleClass("pink");
  });



});


// -------------- scroll to box-switcher ---------- //

// $(window).on('scroll', function () {
//   var scrolltop = $(this).scrollTop();
//   var h1 = $('.featureswelcomescreen').outerHeight(true);
//   var h2 = $('.header').outerHeight(true);
//   var topHeight = h1 + h2;

//   if (scrolltop > topHeight) {
//     $('.featurescontent__box').addClass('fix');
//   }
//  if (scrolltop <= topHeight) {
//     $('.featurescontent__box').removeClass('fix');
//   }
// });



  // ------------ checkbox form -------------------- //
  $('#check').on('change', function(){
    if($(this).is(':checked')) {
      $('.formbtn').attr('disabled', false);
    }
    else {
      $('.formbtn').attr('disabled', true);
    }
  });



//  ---- AOS animate --------- //
AOS.init({
  duration: 800,
  easing: 'ease-in-out'
});





// ------- writing text -------------// 
var str = $('#item').attr('data-text');
console.log(str)

if ($("*").is(".welcomescreen__subtitle")) {
  const carouselText = [
    { text: str },
    { text: str },
    { text: str },
  ];

  $(document).ready(async function () {
    carousel(carouselText, "#item");
  });

  async function typeSentence(sentence, eleRef, delay = 100) {
    const letters = sentence.split("");
    let i = 0;
    while (i < letters.length) {
      await waitForMs(delay);
      $(eleRef).append(letters[i]);
      i++;
    }
    return;
  }

  async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;
    while (letters.length > 0) {
      await waitForMs(50);
      letters.pop();
      $(eleRef).html(letters.join(""));
    }
  }

  async function carousel(carouselList, eleRef) {
    var i = 0;
    while (true) {
      updateFontColor(eleRef, carouselList[i].color);
      await typeSentence(carouselList[i].text, eleRef);
      await waitForMs(1500);
      await deleteSentence(eleRef);
      await waitForMs(500);
      i++;
      if (i >= carouselList.length) {
        i = 0;
      }
    }
  }

  function updateFontColor(eleRef, color) {
    $(eleRef).css("color", color);
  }

  function waitForMs(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
}
















