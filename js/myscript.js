$(document).ready(function() 
	{
$("p").click(function(){ $("p").addClass( "highlight_text");
 });
  $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });
      $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });  
 $("#button_effect1").click(function(){
        $('#par1').slideToggle('1000');
    });
    $("#button_effect2").click(function(){
        $('#par2').slideToggle('1000');
    });
    $("#button_effect3").click(function(){
        $('#par3').slideToggle('1000');
    });
    $("#button_effect4").click(function(){
        $('#par4').slideToggle('1000');
    });
    $("#button_effect5").click(function(){
        $('#par5').slideToggle('1000');
    });
    $("#button_effect6").click(function(){
        $('#par6').slideToggle('1000');
    });

    $("#button_effect1").mouseenter(function(){
        $('#button_effect1').fadeTo(1000, 0.5);
    });
    $("#button_effect1").mouseleave(function(){
        $('#button_effect1').fadeTo(1000, 1);
    });

    $("#button_effect2").mouseenter(function(){
        $('#button_effect2').fadeTo(1000, 0.5);
    });
    $("#button_effect2").mouseleave(function(){
        $('#button_effect2').fadeTo(1000, 1);
    });

    $("#button_effect3").mouseenter(function(){
        $('#button_effect3').fadeTo(1000, 0.5);
    });
    $("#button_effects3").mouseleave(function(){
        $('#button_effect3').fadeTo(1000, 1);
    });

    $("#button_effect4").mouseenter(function(){
        $('#button_effect4').fadeTo(1000, 0.5);
    });
    $("#button_effects4").mouseleave(function(){
        $('#button_effects4').fadeTo(1000, 1);
    });

    $("#button_effect5").mouseenter(function(){
        $('#button_effect5').fadeTo(1000, 0.5);
    });
    $("#button_effect5").mouseleave(function(){
        $('#button_effect5').fadeTo(1000, 1);
    });

    $("#button_effect6").mouseenter(function(){
        $('#button_effect6').fadeTo(1000, 0.5);
    });
    $("#button_effect6").mouseleave(function(){
        $('#button_effect6').fadeTo(1000, 1);
    });

});