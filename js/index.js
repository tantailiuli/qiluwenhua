$(document).ready(function(){
	if($.support.fullscreen){
		$(".itemstylea .inr .cnt i.fsbtn").each(function(){
			$(this).click(function(e){
				$(this).parent().fullScreen();
				e.preventDefault();
			});
		})
	}else{
		$(".itemstylea .inr .cnt i.fsbtn").each(function(){
			$(this).click(function(e){
				$(this).parent().toggleClass("asFullScreen");
				e.preventDefault();
			});
		})
	}
	$(".item .inr .sel").each(function(){
		var $this = $(this);
		$this.find("ul li").eq(0).addClass("active");
		$this.next().find("ul li").eq(0).show();
		$this.find("ul li").click(function(){
			$this.closest(".item").find(".cnt ul").scrollTop(0);
			$(this).addClass("active").siblings().removeClass("active");
			$this.next().find("ul li").eq($(this).index()).show().siblings().hide()
		})
	})
})