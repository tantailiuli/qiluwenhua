$(document).ready(function(){
	$(".content .sel ul li").eq(0).addClass("active");
	$(".content .right .animation li").eq(0).show();
	$(".content .sel ul li").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
		$(".content .right .animation li").eq($(this).index()).show().siblings().hide();
	})
});