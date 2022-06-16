$(document).ready( function(){
	
    $("span").hover(function(){
		
        $(this).toggle(1000);
		$(this).css("backgroundColor","#F7Ca39");
    })
});


$(document).ready( function(){
	
	
    $(".int").click(function(){
    $(".animate").toggle(700); 
	
    })
});

$(document).ready( function(){
	
	$('#ib').click(function() {
		$(".aa").animate( 
		{'width' : ($('#rates').val() * 500 ) / 100 },
			{
			 duration:700 ,
			 complete:function() {alert("Done"); },
			 step : function(x) {
				 
				 $('span').text(Math.round((x*100) /500 ) + '%' )
			 }
			
			});
	});
});






