$(document).ready(function(){
	 $(".owl-carousel").owlCarousel({

  });

});

if($(window).width() <= 1024){
	 $(".owl-carousel").owlCarousel({
	items:1,
	loop:true
  });
}else if($(window).width() > 1024 && $(window).width() <= 1520){
         $(".owl-carousel").owlCarousel({
            items:3,
            loop:true,
              mouseDrag: false,
             scrollPerPage : false
          });
         }
    else
  $(".owl-carousel").owlCarousel({
	items:4,
	loop:true,
      mouseDrag: false,
             scrollPerPage : false
  });

var owl = $('.owl-carousel');
owl.owlCarousel();
// Go to the next item
$('.nav_next').click(function() {
    owl.trigger('next.owl.carousel');
})
// Go to the previous item
$('.nav_prev').click(function() {
    // With optional speed parameter
    // Parameters has to be in square bracket '[]'
    owl.trigger('prev.owl.carousel', [1200]);
})

$('.service_btn').click(function(){
        $('.popup').fadeIn('fast'); 
        $('.popup').css('display','flex');
        $('section').css('filter','blur(5px)');
        $('header').css('filter','blur(5px)');
        $('footer').css('filter','blur(5px)');
    
    
        var title_bg = $(this).parent().parent().css('background-image');
        var title = $(this).parent().find('.service_title').html();
        $('.popup_service_img').css('background-image', title_bg);
        $('.popup_service_title .service_title').html(title);
        $('html, body').css({
                overflow: 'hidden'
                
            });
//        alert($(this).attr('data-service'));
    
//        const xhr = new XMLHttpRequest();
//    
//        xhr.open('GET','services/'+$(this).attr('data-service')+'.txt');
//        xhr.send();
//        xhr.addEventListener('load', () => {
//        console.log('Ответ получен');
    
    
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'services/'+$(this).attr('data-service')+'.txt', false);
            xhr.send();
//            alert( xhr.responseText ); 
    
            $('.popup_service_text').html(xhr.responseText);
            

});
$(document).mouseup(function (e){
        var popup = $('.popup_item');
        if(e.target!=popup[0]&&popup.has(e.target).length === 0){
            closePopup();

    }
});
$('.close-popup').click(function(){
    closePopup();
});
function closePopup(){
            $('.popup').fadeOut();
            $('section').css('filter','none');
            $('header').css('filter','none');
            $('footer').css('filter','none');
            
            $('html, body').css({
                overflow: 'auto'
                
            });
}
$('.mobile_menu_btn').click(function(){
    if(!$('.mobile_menu').hasClass('active')){
        $('.mobile_menu').show('fast');
        $('.mobile_menu').addClass('active');
        $('header').css('background','rgba(49,49,49,0.8)');
    }else{
        $('.mobile_menu').hide('fast');
        $('.mobile_menu').removeClass('active');
        $('header').css('background','none');
    }
});

//function mobileMenu(action){
//	var element = document.getElementById('m_menu');
//	if(action=="o"){
//		$('.main-menu-mobile').show('fast');
//		element.setAttribute('onclick',"mobileMenu('c')");
//	}else if(action=="c"){
//		$('.main-menu-mobile').hide('fast');
//		element.setAttribute('onclick',"mobileMenu('o')");
//	}
//}
