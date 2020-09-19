$('.owl-carousel').owlCarousel({
    loop:true, /*faz com que naão tenha um fim na rodação*/
    margin:10,
    nav:true,
    responsiv:{
        0:{
            items:1
        },
        600:{ 
            items:3
        },
        1000:{
            items:5
        }
    }
})
 