//= require_tree .

$(document).ready(function () {

//	var bodyElement = $('html,body');
//
//	var windowHeight = $(window).height();
//	var windowWidth = $(window).width();
//
//	var valuePropOffset = (windowHeight/2)-180;
//	var heroBtnsOffset = (windowHeight-130)-valuePropOffset-180;
//
//	$(".hero-menu").height(windowHeight-70);

	// $(".value-prop").css('margin-top', valuePropOffset);

	// $(".hero-btns").css('margin-top', windowHeight-70);

	// //window resize
	// $(window).resize(windowResize);

	// function windowResize(event){
	// 	var windowHeight = $(window).height();
	// 	var windowWidth = $(window).width();
	// }
});

$(function(){
    var hash = window.location.hash;
    if (hash) {
        if (hash.indexOf('#') === false) { hash = '#'+hash; }
        //@todo break out into re-usable function
        window.scrollTo(0, 0);
        window.setTimeout(function(){
            $('html, body').animate({
                scrollTop: $(hash).offset().top-100
            }, 600);
        }, 300);

    }
    var scroll_anchors = [];
    $('a[href^="#"], a[href^="'+window.location.pathname+'#"]').each(function(){
        var uri  = $(this).attr('href');
        var anchor = uri.substring(uri.indexOf('#'));
        $(this).click(function(){
            $('html, body').animate({
                scrollTop: $(anchor).offset().top-60
            }, 400);
        });
        scroll_anchors.push(anchor);
    });
    $(window).scroll(function(){
        if (($(this).scrollTop() > 600) && (!$('#fix-nav').hasClass('fixed-nav'))) {
            $('#fix-nav').addClass('fixed-nav');
        }
        if (($(this).scrollTop() <= 600) && ($('#fix-nav').hasClass('fixed-nav'))) {
            $('#fix-nav').removeClass('fixed-nav');
        }
    });
});
