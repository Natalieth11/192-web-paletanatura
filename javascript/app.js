var btnMenu = document.querySelector('.icon-menu');
var nav = document.querySelector('.main-nav');

btnMenu.addEventListener('click', function(){
    nav.classList.toggle('show');
})






/*function scrollAppear(){
    var introText = document.querySelector('.intro-text');
    var introPosition = introText.getBoundingClientRect().top;
    var screenPosition = window.innerHeight;
    console.log(introPosition);


    if(introPosition < screenPosition){
        introText.classList.add('intro-appear');  
    }
}

window.addEventListener('scroll',scrollAppear);*/