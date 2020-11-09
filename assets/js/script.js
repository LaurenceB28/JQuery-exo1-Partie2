$(function () {
    $('#boisson').hover(function (){
        $(this).width(1.25*$(this).width());
        $(this).height(1.25*$(this).height());
    },
        function (){
            $(this).width(0.85*$(this).width());
            $(this).height(0.85*$(this).height());
        });

});

