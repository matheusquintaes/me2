import './style.css';
import './index.html'
import $ from 'jquery';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel';



$('.owl-carousel').owlCarousel({
    loop:false,
    margin:10,
    nav:false,
    items:1,
    center: true
});



/* Nav */

(function(){


    var nav = {
        minWidth: 992,
        closeClass: "navigation-closed",
        hideClass: "navigation-hidden",
        startClass: "navigation-start",
        downClass: "navigation-down",
        itemActiveClass: "is-active"
    }

    document.addEventListener("DOMContentLoaded", function() {

        var btnToggle = document.getElementById("toggle-navigation");
        
        document.querySelectorAll(".navigation__link");

        document.body.classList.add(nav.startClass)

        closeOnSmallScreens();
        changeTheme();

        document.body.classList.add("navigation-initialised"),
        btnToggle.addEventListener("click", function() {
            toggle();
        });
    });

    window.addEventListener("resize", function() {
        closeOnSmallScreens();
    });
    

    window.addEventListener("scroll", function() {

        var i = void 0;
        window.addEventListener("scroll", function() {
            window.innerWidth > nav.minWidth && (clearTimeout(i),
            window.pageYOffset > 1 ? (document.body.classList.remove(nav.startClass),
            close(),
            window.pageYOffset + window.outerHeight >= document.body.offsetHeight && open(),
            i = setTimeout(function() {
                document.body.classList.add(nav.downClass)
            }, 500)) : (document.body.classList.add(nav.startClass),
            open(),
            setTimeout(function() {
                document.body.classList.remove(nav.downClass)
            }, 10)))
        })
    });

    function closeOnSmallScreens() {
        if( window.innerWidth < nav.minWidth ) {
            close();
        }
    }

    function open(){
        document.body.classList.remove(nav.closeClass),
        toggleNavItems()
    }
    function close() {
        document.body.classList.add(nav.closeClass);
        toggleNavItems(!0);
    }

    function toggle() {
        document.body.classList.toggle(nav.closeClass);
        var navClosed = document.body.classList.contains(nav.closeClass);
        toggleNavItems(navClosed)
    }

    function toggleNavItems() {

        var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
        var i = document.querySelectorAll(".navigation__item");
        var n = document.getElementById("navigation-list").offsetWidth;

        [].forEach.call(i, function(i) {
            var r = i;
            if (window.innerWidth >= nav.minWidth) {
                var o = e ? getItemOffset(i, n) : 0;
                r.style.transform = "translateX(" + o + "px)"
            } else
                r.style.transform = ""
        })
    }

    function getItemOffset(t, x) {
        return x - (t.offsetLeft + t.offsetWidth);
    }
    
    function changeTheme() {
        var sectionActive = document.querySelector(".section.active");
        if (null !== sectionActive) {

            var isHome = sectionActive.classList.contains("section--top-home");

            if(isHome){
                document.body.classList.add("navigation-lightness")
            } else {
                document.body.classList.remove("navigation-lightness");
            }

        } else
            document.body.classList.remove("navigation-lightness")
    }

}());
