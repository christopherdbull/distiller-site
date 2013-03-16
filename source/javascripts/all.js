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
    var scroll_anchors = []
    console.log(window.location.pathname);
    $("a[href^='#']").each(function(){
        $(this).click(function(){
            $('html, body').animate({
                scrollTop: $($(this).attr('href')).offset().top-100
            }, 400);
        });
        scroll_anchors.push($(this).attr('href').hash);
        console.log(scroll_anchors);
    });
    $(window).scroll(function(){
        if (($(this).scrollTop() > 640) && (!$('#fix-nav').hasClass('fixed-nav'))) {
            $('#fix-nav').addClass('fixed-nav');
        }
        if (($(this).scrollTop() <= 640) && ($('#fix-nav').hasClass('fixed-nav'))) {
            $('#fix-nav').removeClass('fixed-nav');
        }
    });
});