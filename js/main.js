$(document).ready(function(){


$('.header_slider').owlCarousel({
    loop:true,
    nav:true,
    dots:true,
    autoplay:true,
    navText:['<i class="fas fa-angle-left"></i>','<i class="fas fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

// *************============

    // init Isotope


var $grid = $('.grid').isotope({
  itemSelector: '.p-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: 1
  }
});



// filter items on button click
$('.portfolio_menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// ********========


})