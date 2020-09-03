$(document).ready(function () {
	// select
	$('.select').on('click','.placeholder',function(){
		var parent = $(this).closest('.select');
		if ( ! parent.hasClass('is-open')){
			parent.addClass('is-open');
			$('.select.is-open').not(parent).removeClass('is-open');
		}else{
			parent.removeClass('is-open');
		}
	}).on('click','ul>li',function(){
		var parent = $(this).closest('.select');
		parent.removeClass('is-open').find('.placeholder').text( $(this).text() );
		parent.find('input[type=hidden]').attr('value', $(this).attr('data-value') );
	});

	// slider
	$('.projects-slider').slick({
		slidesToShow: 3,
		prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
		nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
		responsive: [
			{
				breakpoint: 1023,
				settings: {
					slidesToShow: 2,
				}
			},
			{
				breakpoint: 568,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.our-projects-slider').slick({
		slidesToShow: 2,
		prevArrow: '<span class="prev-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M21.1714 1.99927L2.17139 19.9993L21.1714 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
		nextArrow: '<span class="next-slide"><svg width="23" height="40" viewBox="0 0 23 40" fill="none" xmlns="http://www.w3.org/2000/svg"><path opacity="0.5" d="M2.17334 1.99927L21.1733 19.9993L2.17334 37.9993" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg></span>',
		responsive: [
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 1,
				}
			}
		]
	});

	$('.burger').on('click', function () {
		$('body').toggleClass('menu-open');
	})
})