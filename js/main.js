jQuery(document).ready(function ($) {

  $('.work-link').click(function(){
    $('.work-details').toggle(450, "linear");
    event.preventDefault();
  });

// /*WANT WORK DETAILS MENU TO STAY ON*/
 if (window.location.href.indexOf("nationalgeographic") > -1) {
  $('.work-details').show("fast");
} else if (window.location.href.indexOf("newyorker") > -1){
  $('.work-details').show("fast");
}

/*COPYRIGHT*/
// $('.natgeo-southsudan-img1').hover(function() {
//   console.log('hover')
//   $('#natgeo-southsudan-copyright').addClass('credit-appear');
// });


/*WANT ACTIVE LINK TO GO BOLD*/
if (window.location.href.indexOf("about") > -1) {
  console.log('about page')
  $('.about').css('font-weight','700')
} else if (window.location.href.indexOf("nationalgeographic") > -1){
  console.log('ng page')
  $('.editing').css('font-weight','500')
  $('.work-natgeo').css('font-weight','500')
}
else if (window.location.href.indexOf("newyorker") > -1){
  console.log('tny page')
  $('.editing').css('font-weight','500')
  $('.work-TNY').css('font-weight','500')
}

// //*LAZY LOAD PLUGIN*//

    $("img").lazyload();


})
