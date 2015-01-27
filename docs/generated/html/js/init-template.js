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
})
