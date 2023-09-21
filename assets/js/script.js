$(document).ready(function(){

    $("#activadorPdf").click(function(){
        $(".overlayPdf").fadeIn(300)
        $(".overlayPdf").css("display","inline")
    })
    $(".overlayPdf").click(function(){
        $(this).css("display","none")
        
    })
})