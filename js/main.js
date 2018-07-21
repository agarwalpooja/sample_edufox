function openNav() {
    document.getElementById("mySidenav").style.width = "20%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

$(window).scroll(function(e) {
    parallax();
  })
  
  
  function parallax() {
    var scroll = $(window).scrollTop();
    var screenHeight = $(window).height();
  
    $('.parallax').each(function() {
      var offset = $(this).offset().top;
      var distanceFromBottom = offset - scroll - screenHeight
      
      if (offset > screenHeight && offset) {
        $(this).css('background-position', 'center ' + (( distanceFromBottom  ) * 0.5) +'px');
      } else {
        $(this).css('background-position', 'center ' + (( -scroll ) * 0.5) + 'px');
      }
    })
  }


  $(window).on('resize', function () { AOS.refresh(); });
  $(window).on('load', function() { setTimeout(AOS.refreshHard, 150); });
  
  $(document).ready(function () {
    AOS.init({ 
     startEvent: 'load', 
     easing: 'ease-in-out-quart', 
     duration: 1000,  once: false });            
  });


  // AOS.init();
   var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}