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
	$('input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], input[type=date], input[type=time], select, textarea').each(function (element, i) {
		if ((element.value !== undefined && element.value.length > 0) || $(this).attr('placeholder') !== null) {
			$(this).siblings('label').addClass('active');
		}
		else {
			$(this).siblings('label').removeClass('active');
		}
	});
});