var wScroll, hHeader, posToslide;

$( document ).ready(function(){
	
	
	var win = $(window);
	var allMods = $(".toSlideIn");
	wScroll, hHeader, posToslide = 0;
	
	
	allMods.each(function(i, el)
	{
	  var el = $(el);
	  
/*
	  if (elementInViewport(el) == true)
	  {
	    el.addClass("already-visible"); 
	  } 
*/
	});
	
	
	$(window).scroll(function(){
	
		hHeader = $("header").height() - $("nav").height();
		wScroll = $(window).scrollTop();
		posToslide = $('.toSlideIn').offset().top - $(window).height();
		
		if(wScroll >= hHeader)
		{
			$("nav").addClass('showNavBgk');
			$("nav li").addClass('changeColorNav');
			$("body").addClass('swapBodyColor');
		}
		else
		{
			$("nav").removeClass('showNavBgk');
			$("nav li").removeClass('changeColorNav');
			$("body").removeClass('swapBodyColor');
		}
		
		allMods.each(function(i, el)
		{
			var el = $(el);
			console.log(elementInViewport(el));
/*
			if (elementInViewport(el) == true)
			{
			  el.addClass("come-in"); 
			} 
*/
		});
		
	});
	

	
	function elementInViewport(partial)
	{
		var $t            = $(this),
	        $w            = $(window),
	        viewTop       = $w.scrollTop(),
	        viewBottom    = viewTop + $w.height(),
	        _top          = $t.offset().top,
	        _bottom       = _top + $t.height(),
	        compareTop    = partial === true ? _bottom : _top,
	        compareBottom = partial === true ? _top : _bottom;
	    
	    //return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
	    return($t);
	}
	
	
	
	
	
	
});