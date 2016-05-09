$(document).ready(function($){
    $('#lightslider').lightSlider({
        
        item:4,
        loop:true,
        speed:2000,
        slideMargin:20,
        responsive:[
            {
             breakpoint:800,
             settings:{
                 item:2,
                 slideMargin:10,
             }
            },
            {
            breakpoint:400,
             settings:{
                 item:1,
                slideMargin:10,
             }
            }
            ],
            
            autoWidth:true,
            adaptiveHeight:true,
            
    });
});