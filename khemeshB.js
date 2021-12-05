console.log('khemesh bhure')

$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY>20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        if(this.scroll > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });
    // slid-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
         $('.navbar .menu').toggle("active");
    });
    //  typing animation script
    var typed = new.Typed(".type", {
        Strings:["Front-end developer", "Ui designer","Python"],
        typeSpeed:100,
        backSpeed: 60,
        loop: true
    });



    // owl carousal script
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPuse:true, 
        responsive:{
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

// console.log('khemesh')
window.onload = function(){
    document.getElementById("download").addEventListener("click",()=>{
        const invoice = this.document.getElementById("invoice"); 
        console.log(invoice) 
    })
}

window.addEventListener("DOMContentLoaded", function(){

    var form = document.getElementById("my-form");
     
    var form = document.getElementById("status");

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
})

function ajax(method, url, success ,data, error){
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Action","aplication/json");
    xhr.onreadystatechange = function () {
        if(xhr.readyState !== XMLHttpRequest.DONE)return;
        if(xhr.status === 200){
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}