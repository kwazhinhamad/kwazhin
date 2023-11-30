$(document).ready(function(){
const nav = $("#navigation")
const navTop = nav.offset().top;

$(window).on("scroll", stickyNavigation);

function stickyNavigation(){
    let body = $("body");

    if($(window).scrollTop()>= navTop){
        body.addClass("fixedNav")
    }
    else{
        body.removeClass("fixedNav")
    }
}


$('.work-list-item').click(function(){
    let value = $(this).attr('data-filter');

    if(value === 'all'){
        $('.filter').show(300);
    }

    else{
        $('.filter').not('.' + value).hide (300);
        $('.filter').filter('.' + value).show(300);
    }
});


$('.work-list-item').click(function(){
     $(this).addClass('active-item').siblings().removeClass('active-item');
});

});