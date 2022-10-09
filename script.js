$(document).read(function(){
    $(window).scroll(function(){
        if(this.scrollY() > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
        if(this.sroll > 500) {
            $('.scroll-up-button').addClass("show");
        }
        else{
            $('.scroll-up.btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up.btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    //toggle menu/navbar script
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
});