$(document).ready(function() {
    
    $("h2").mouseenter(function(){
    $(this).css("background-color","lightblue");
    $(this).css("font-size","20px");
});

$("button").mouseenter(function(){
    $(this).fadeTo(1000,0.5);
     
});

$("button").mouseout(function(){
    $(this).fadeTo(1000,1);
     
});

$("button").click(function(){
    $(this).prev().slideToggle(1000);    
});

$("p").click(function(){
    $(this).children('a').css("background-color","yellow"); 
});

$(".stream-nav").on("click", function() {

        var elementId = $(this).attr("id");
        var cardClass = $(".card").attr("class").split(" ")[0];

        if ($("." + elementId).css("background-color") == "rgb(235, 82, 85)") {
            $("." + elementId).css("background-color", "#fff");
        } else {
            $("." + cardClass).css("background-color", "#fff");
            $("." + elementId).css("background-color", "rgb(235, 82, 85)");
        }
    });

$("p").click(function(){
        $(this).children("a").css("background-color", "yellow"); 
    });
$("img").click(function(){
    $(this).next().children('p').slideDown();
});

$(".card").click(function(){
    $(this).children("p").slideDown();
    });

$(".card").click(function(){
    $(this).toggleClass("highlight");    
});
$("#select_btn").click(function(){
    $(".card:not(.highlight").hide();
    });
$("#all_btn").click(function(){
    $(".card").show()
});
$("h2").addClass("underline");
   $("nav").addClass("border");
   $("#stream1_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream1").addClass('highlight_stream');
    });
   $("#stream2_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream2").addClass('highlight_stream');
    });
    $("#stream3_btn").on("click", function() {
        $(".stream1").removeClass('highlight_stream');
        $(".stream2").removeClass('highlight_stream');
        $(".stream3").removeClass('highlight_stream');
        $(".stream3").addClass('highlight_stream');
    });
});

