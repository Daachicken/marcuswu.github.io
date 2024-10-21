window.addEventListener('scroll', function() {
    const parallax = document.querySelector('.parallax');
    const parallax2 = document.querySelector('.parallax2');
    const parallax3 = document.querySelector('.parallax3');
    const parallax4 = document.querySelector('.parallax4');
    let scrollPosition = window.scrollY; // Modern alternative to pageYOffset
    // Adjust the background position to move slower
    parallax.style.backgroundPositionY = (scrollPosition * .15) + 'px'; 
    if (scrollPosition > 1000){
        parallax2.style.backgroundPositionY = (scrollPosition *.15 ) -200 + 'px'; 
    }
    if (scrollPosition > 2550){
        parallax3.style.backgroundPositionY = (scrollPosition *.15 ) -380 + 'px';
    }
    if (scrollPosition > 4100){
        parallax4.style.backgroundPositionY = (scrollPosition *.15 ) -700 + 'px';
    }
});