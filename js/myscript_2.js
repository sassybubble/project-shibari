     $(document).ready(function(){
     $("th").click(function(){
     	$("tr").children().removeClass("selection")
    	$(this).siblings().addClass("selection");

  });
 });