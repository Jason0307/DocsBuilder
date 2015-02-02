/**
 * 
 */
jQuery(function(){
	$("pre > code").each(function(){
		Process($(this),$(this).text());
	})
	
	$(".mock").each(function(){
		Process($(this),$(this).text());
	})
	
	$(document).on('click', '[data-sidebar]', function(e) {
		var $sidebar = $('.sidebar-nav');
		if ($(this).find('.external').length) return;
		e.preventDefault();
		var top = $('[data-page=' + $(this).data('sidebar') + ']', $('.section-right-container')).offset().top;
		is_scrolling = true;
		$('.active', $sidebar).removeClass('active');
		var $el = $('.sidebar-link[data-sidebar=' + $(this).data('sidebar') + ']', $sidebar);
		$el.addClass('active');
		$el.closest('.sidebar-category').addClass('active');
		$('body, html').animate({
			scrollTop: top,
		}, function() {
			is_scrolling = false;
		});
	});

	$(".tab-nav li").on("mouseover",function(){
		$(this).removeClass("nav_link").addClass("nav_current");
		var j,id,e,$lis = $(".tab-nav li").length;
		for(var i = 1;i<= $lis;i++){ 
		   id ="nav" + i;
		   j = $("#" + id);
		   e = $("#sub" + i);
		   if(id != $(this).attr("id")){
		   	 j.removeClass("nav_current").addClass("nav_link");
		   	 e.css("display","none");
		   }else{
			 e.css("display","block");
		   }
	    }
	})
	
	window.onscroll = function(){ 
		var top = document.documentElement.scrollTop || document.body.scrollTop; 
		if(top <= 88){
			$("#sidebar").css("top", 88 - top + "px"); 
		}else{
			$("#sidebar").css("top", "0px"); 
		}
	}
})
