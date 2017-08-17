$(document).ready(function(){
	if($.support.fullscreen){
		$(".content .right .cnt i.fsbtn").each(function(){
			$(this).click(function(e){
				$(this).parent().fullScreen();
				e.preventDefault();
			});
		})
	}else{
		$(".content .right .cnt i.fsbtn").each(function(){
			$(this).click(function(e){
				$(this).parent().toggleClass("asFullScreen");
				e.preventDefault();
			});
		})
	}
	$(".content .sel ul li").eq(0).addClass("active");
	$(".content .right .cnt ul li").eq(0).show();
	$(".content .sel ul li").click(function(){
		$(this).closest(".content").find(".right ul").scrollTop(0);
		$(this).addClass("active").siblings().removeClass("active");
		$(".content .right .cnt ul li").eq($(this).index()).show().siblings().hide();
	})
});