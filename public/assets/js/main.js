$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
		$('#content').toggleClass('active');
		$(this).toggleClass('active');
	});
	$(".qtyminus").on("click",function(){
		var now = $(".qty").val();
		if ($.isNumeric(now)){
			if (parseInt(now) -1> 0)
			{ now--;}
			$(".qty").val(now);
		}
	})            
	$(".qtyplus").on("click",function(){
		var now = $(".qty").val();
		if ($.isNumeric(now)){
			$(".qty").val(parseInt(now)+1);
		}
	});
});