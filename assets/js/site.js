(function(){
	$('.but-top').hide();
	
	$('a.page-slide').on('click', function(e)
	{
		var aid = $(this).attr('href').substring(1);
		var aTag = $("a[name='"+ aid +"']");
    	$('html,body').animate({scrollTop: aTag.offset().top},'slow');
    	return false;
	});

	// Display the "back to top" icon in the bottom right-hand corner of mobile devices
	// when the user scrolls past a certain point.
	window.addEventListener("scroll", function() { 
	   if(window.scrollY > 400) {
			$('.but-top').show();
	   }
	   else {
	      $('.but-top').hide();
	   }

	},false);
	// Scroll to top of page when any link with #top as href is clicked
	$('a[href="#top"]').on('click', function()
	{
		$('body').animate({ scrollTop: 0 }, "slow");
		return false;
	});

})();