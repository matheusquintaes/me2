import '../css/style.css';
import '../index.html'
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';
import './navigation';
import './block-revealers';



/* Carrossel Portifólio*/
$('.owl-carousel').owlCarousel({
    loop:true,
    nav:true,
    items:1,
    center: true,
    navText: [" <img src='img/back.png'/> ","<img src='img/next.png'/> "]
});


/* Block Reavealers */
(function() { 
  
    // Títulos Top Baner
    var rev1 = new RevealFx(document.querySelector('#js-animate-rev-1'), {
        revealSettings : {
            bgcolor: '#095BB9',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev1.reveal();

    var rev2 = new RevealFx(document.querySelector('#js-animate-rev-2'), {
        revealSettings : {
            bgcolor: '#f3f3f3',
            delay: 250,
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    rev2.reveal();

    //Sobre
    var scrollElemToWatch_3 = document.getElementById('js-animate-rev-3');
    var watcher_3 = scrollMonitor.create(scrollElemToWatch_3, -300);
    var rev3 = new RevealFx(scrollElemToWatch_3, {

        revealSettings : {
            bgcolor: '#095BB9',
            direction: 'rl',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;

            }
        }
    });

    watcher_3.enterViewport(function() {
        rev3.reveal(); 
        watcher_3.destroy();
    });

    //O que faço
    var scrollElemToWatch_4 = document.getElementById('js-animate-rev-4'),
    watcher_4 = scrollMonitor.create(scrollElemToWatch_4),	
    rev4 = new RevealFx(scrollElemToWatch_4, {

        revealSettings : {
            bgcolor: '#095BB9',
            direction: 'lr',
            onCover: function(contentEl, revealerEl) {
                contentEl.style.opacity = 1;
            }
        }
    });
    watcher_4.enterViewport(function() {
        rev4.reveal();
        watcher_4.destroy();
    });

})();


    
/* Fade in Textos */
(function() { 
    //Sobre
    var scrollElemToWatch_fade_1 = document.getElementById('js-animate-fade-1');
    var watcher_fade_1 = scrollMonitor.create(scrollElemToWatch_fade_1, -300);
        
    watcher_fade_1.enterViewport(function(){
        console.log( $(scrollElemToWatch_fade_1));
        $(scrollElemToWatch_fade_1).addClass('js-fade--complete');
    });

    //o que eu Faço
    var scrollElemToWatch_fade_2 = document.getElementById('js-animate-fade-2');
    var watcher_fade_2 = scrollMonitor.create(scrollElemToWatch_fade_2, -300);
        
    watcher_fade_2.enterViewport(function(){
        console.log( $(scrollElemToWatch_fade_2));
        $(scrollElemToWatch_fade_2).addClass('js-fade--complete');
    });

    //Contato
    var scrollElemToWatch_fade_3 = document.getElementById('js-animate-fade-3');
    var watcher_fade_3 = scrollMonitor.create(scrollElemToWatch_fade_3);
        
    watcher_fade_3.enterViewport(function(){
        console.log( $(scrollElemToWatch_fade_3));
        $(scrollElemToWatch_fade_3).addClass('js-fade--complete');
    });
})();


/* Scroll */
(function() {

    $('.navigation__item, .top__link').on('click', function(e){
        e.preventDefault();
        var target = $( $(this).attr('data-navigation-link'))

        $('html, body').animate({
            scrollTop: target.offset().top
        }, 800);
    });
    

 })();