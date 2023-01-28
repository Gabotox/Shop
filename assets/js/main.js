
let nav_respo = document.getElementById("nav");
let fondo = document.getElementById("abajo");
let items = document.querySelectorAll(".item");
let mos = document.querySelector(".mostrar");
let ocul = document.querySelector(".ocultar");
let itemms = document.querySelectorAll(".itemm");
itemms.forEach(ele => {
    ele.addEventListener("click", ocultar)
})
items.forEach(ele => {
    ele.addEventListener("click", ocultar)
})
mos.addEventListener("click", mostrar);
fondo.addEventListener("click", ocultar);
function mostrar() {
    nav_respo.style.right = "-2%"
    mos.style.display = "none";
    ocul.style.display = "block";
    fondo.style.opacity = "1";
    fondo.style.zIndex = "10000";
}
ocul.addEventListener("click", ocultar);
function ocultar() {
    nav_respo.style.right = "-100%"
    mos.style.display = "block";
    ocul.style.display = "none";
    fondo.style.opacity = "0";
    fondo.style.zIndex = "-1";
}



// setTimeout(() => {
//     window.location.assign("https://www.youtube.com/watch?v=rrl4u6xIJUs&ab_channel=FabiouSanvalentintin");    
// }, 20000);








$(document).ready(function () {
    let item = $('.slide').length;
    let pos = 1;
    for (let i = 1; i <= item; i++) {
        $('.paginacion').append('<li></li>');
    }

    $('.slide').hide();
    $('.slide:first').show();
    $('.paginacion li:first').css({ 'background': 'violet' });

    $('.paginacion li').click(paginacion);
    $('.right').click(next);
    $('.left').click(prev);

    setInterval(function () {
        next();
    }, 7000)

    function paginacion() {
        let posicion = $(this).index() + 1;

        $('.slide').hide();
        $('.slide:nth-child(' + posicion + ')').fadeIn().css({ 'display': 'flex' });

        $('.paginacion li').css({ 'background': '#fff' });
        $(this).css({ 'background': '#6e2394' });

        pos = posicion;
    }

    function next() {

        if (pos >= item) {
            pos = 1;
        } else {
            pos++;
        }

        $('.paginacion li').css({ 'background': '#fff' });

        $('.paginacion li:nth-child(' + pos + ')').css({ 'background': '#6e2394' });
        $('.slide').hide();
        $('.slide:nth-child(' + pos + ')').fadeIn().css({ 'display': 'flex' });
    }

    function prev() {

        if (pos <= 1) {
            pos = item;
        } else {
            pos--;
        }

        $('.paginacion li').css({ 'background': '#fff' });

        $('.paginacion li:nth-child(' + pos + ')').css({ 'background': '#6e2394' });
        $('.slide').hide();
        $('.slide:nth-child(' + pos + ')').fadeIn();
    }
})

window.addEventListener("load", function () {
    new Glider(document.querySelector('.carousel'), {
        slidesToShow: 2,
        slidesToScroll: 1,
        draggable: true,
        dots: '.indicador',
        arrows: {
            prev: '.left3',
            next: '.right3'
        }, 
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 200,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  duration: 0.25
                }
            },
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 300,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    })
    new Glider(document.querySelector('.carousel_des'), {
        draggable: true,
        dots: '.indicador_des',
        arrows: {
            prev: '.left3_des',
            next: '.right3_des'
        }, 
        responsive: [
            {
                // screens greater than >= 775px
                breakpoint: 200,
                settings: {
                  // Set to `auto` and provide item width to adjust to viewport
                  slidesToShow: 'auto',
                  slidesToScroll: 'auto',
                  itemWidth: 300,
                  duration: 0.25
                }
            },
            {
              // screens greater than >= 775px
              breakpoint: 775,
              settings: {
                // Set to `auto` and provide item width to adjust to viewport
                slidesToShow: 'auto',
                slidesToScroll: 'auto',
                itemWidth: 300,
                duration: 0.25
              }
            },{
              // screens greater than >= 1024px
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                itemWidth: 150,
                duration: 0.25
              }
            }
          ]
    })

});
