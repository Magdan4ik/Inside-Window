  // SLIDER

  $(document).ready(function() {

      var owl1 = $(".header-carousel").owlCarousel({
        items: 1,
        autoplay: false,
        autoplayTimeout: 5000,
        autoplayHoverPause: true, 
        dots: true, // показывать dots навигацию.
        loop: true, //постоянная прокрутка,
        mouseDrag: false,
        dotsContainer: '.slider__control__indicators' //контейнер для dots пагинации
       });

      $('.owl-dot').click(function(){
        owl1.trigger('to.owl.carousel', [$(this).index(), 300]);
      });

      var owl1 = $('.header-carousel');
        owl1.owlCarousel();
        // Parameters has to be in square bracket '[500-speed]'
        $('.slider__control__button--right').click(function() {
            owl1.trigger('next.owl.carousel', [500]);
        })
        $('.slider__control__button--left').click(function() {
            owl1.trigger('prev.owl.carousel', [500]);
        })
       


      var owl2 = $(".catalog-carousel").owlCarousel({
          items: 4,
          dots: true, // показывать dots навигацию.
          loop: true, //постоянная прокрутка,
          margin: 30,
          responsive:{
                0:{
                    items:1,
                    stagePadding: 30,  // отступ на мобильных
                    margin: 10 // отступ на мобильных
                },

                576:{
                    items:2
                },

                768:{
                    items:3
                },
                992:{
                    items:4
                }
            }
       });

      var owl2 = $('.catalog-carousel');
        owl2.owlCarousel();
        // Parameters has to be in square bracket '[500-speed]'
        $('.slide-cat-right').click(function() {
            owl2.trigger('next.owl.carousel', [500]);
        })
        $('.slide-cat-left').click(function() {
            owl2.trigger('prev.owl.carousel', [500]);
        })




      var owl3 = $(".popular-carousel").owlCarousel({
          items: 3,
          dots: true, // показывать dots навигацию.
          loop: true, //постоянная прокрутка,
          responsive:{
                0:{
                    items:2,
                },

                500:{
                    items:3
                },
            }
       });

      var owl3 = $('.popular-carousel');
        owl3.owlCarousel();
        // Parameters has to be in square bracket '[500-speed]'
        $('.slide-pop-right').click(function() {
            owl3.trigger('next.owl.carousel', [500]);
        })
        $('.slide-pop-left').click(function() {
            owl3.trigger('prev.owl.carousel', [500]);
        })
       
    });



//CHANGE SMALL IMG IM BIG
function swap(image) {
  document.getElementById("pop-big_img").src = image.href;
}


// GOOGLE MAP
      function initMap() {

		var uluru1 = {lat: 50.453104, lng: 30.589099};
		var uluru2 = {lat: 50.419858, lng: 30.471992};
		var uluru3 = {lat: 50.426480, lng: 30.520710};

        var map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: 50.436958, lng: 30.539909},
          zoom: 12
        });

		var image = 'img/map-marker.png';

        var marker = new google.maps.Marker({
      	position: uluru1,
      	map: map,
      	icon: image,
      	animation: google.maps.Animation.BOUNCE
  		});

        var marker = new google.maps.Marker({
      	position: uluru2,
      	map: map,
      	icon: image,
      	animation: google.maps.Animation.BOUNCE
  		});

        var marker = new google.maps.Marker({
      	position: uluru3,
      	map: map,
      	icon: image,
      	animation: google.maps.Animation.BOUNCE
  		});  		

      }



// MOBILE MENU
    $(document).ready(function(){
      $(".menu__icon").click(function(){
          $(".menu").toggleClass("menu__open");
      });
    });



// TIMER

// Set the date we're counting down to
var countDownDate = new Date("Mar 20, 2018 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

}, 1000);
