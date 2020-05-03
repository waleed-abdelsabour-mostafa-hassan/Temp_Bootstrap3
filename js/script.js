$(document).ready(function(){
       // show navbar when click on icon 
    $('i.icon').click(function(){
        $('.nav_list').slideToggle();
        });
    
        // when scroll body ... sticky navbar
    $(window).scroll(function(){
        var sc=$(this).scrollTop();
        if(sc > 100)     // show sticky navbar
            {
                $('header').addClass('sticky');
            }
        else
            {
                $('header').removeClass('sticky');
            }
        if(sc > 1981)
            {
                // CountTo Plugin
    
                $('.timer').countTo();
                $(window).off('scroll');
            }
        if(sc > 500)     // Fade The ScrollTop Btn
            {
                $(".scrollTop").fadeIn();
            }
        else
            {
                $(".scrollTop").fadeOut();
            }
    });
    
    //Portfolio buttons change background color
    $('.buttons button').click(function(){ 
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var CssFilter = $(this).attr('id');
        
        if(CssFilter === "all")
            {
                $('.Images > div').fadeIn();
            }
        else
            {
                $('.Images > div').fadeOut();
                $('.Images').contents().filter('.' + CssFilter).fadeIn();
            }
    });
    
   
    // owl carousel  >> Team section
    $('.owl-carousel').owlCarousel({
        
        loop:true,
        margin:10,
        nav:false,
        responsive:
        {
            0 :
                {
                    items:1
                },
            600 :
                {
                    items:3
                },
             1000 :
                {
                    items:4
                 }
        }
    });
    
    //  Choose Panel
    $(".c_panel li").click(function(){
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        var p = $(this).data('role');
        $(".content > div ").hide();
        $(".content").contents().filter("#" + p).fadeIn();
        
    });
    
    
    // popup video in choose section
    
    $('.pop').magnificPopup({
        type:'iframe'
    });
    
    // slick slider on Pleasure section
    
    $('.slick').slick({
        nextArrow : false,
        prevArrow : false,
    });
    
    // Scroll To Top
    $(".scrollTop").click(function(){
        $('body,html').animate({
            scrollTop : 0
        },500);
    });
    
    // smooth scroll
    $('.list a').click(function(){
        
        $('body,html').animate({
            scrollTop : $($(this).attr('href')).offset().top - 80
        });
    });
    
    
    
    
    
});