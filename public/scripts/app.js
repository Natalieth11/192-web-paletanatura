window.addEventListener('load', function(){ 
    var btnMenu = document.querySelector('.icon-menu');
    var nav = document.querySelector('.main-nav');
    
    btnMenu.addEventListener('click', function(){
        nav.classList.toggle('show');
    })
    
    /*-------------------interaccion simple------------------ */
    
    var img =document.getElementById("img-area")
    function sin(){
        img.src='./imagenes/no-makeup.jpg';
    }
    
    
    function con(){
        img.src='./imagenes/makeup.jpg';
    
    }
    
 });














/*var buttons = document.querySelectorAll('.manybtn__img');

function handleClick1(event){
    var name = event.target.getAttribute('src')
    var parts = name.split('/');
    var newName = './data/img' + parts[2];
    var image = document.querySelector(".inter__img");/*imagen que voy a cambiar dependiendo del boon que unda 
    image.setAttribute('src', newName);
    console.log(newName);
}

for (var i = 0; i < buttons.length; i++) {
    var button = buttons[i];
    button.addEventListener('click', handleClick1 );   
}
*/





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