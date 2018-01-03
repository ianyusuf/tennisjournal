/* JS Document */

jQuery(document).ready(function($)
{
	"use strict";

	/* Projects link - charming and anime js plugins */

	var projectsLink = document.getElementsByClassName('projects_link')[0];
	var aboutLink = document.getElementsByClassName('about_us_link')[0];

	charming(projectsLink);
	charming(aboutLink);

	var projectsLetters = Array.from(projectsLink.querySelectorAll('span'));
	var aboutLetters = Array.from(aboutLink.querySelectorAll('span'));

	projectsLink.addEventListener('mouseenter', projectsHoverInFn);
	projectsLink.addEventListener('mouseleave', projectsHoverOutFn);
	aboutLink.addEventListener('mouseenter', aboutHoverInFn);
	aboutLink.addEventListener('mouseleave', aboutHoverOutFn);

	let isActive;
	let enterTimeout;
	let aboutTimeout;

	function projectsHoverInFn(){
		enterTimeout = setTimeout(function()
			{
				isActive = true;
				anime.remove(projectsLetters);
				anime({
					targets: projectsLetters,
					delay: (t,i) => i*5,
					translateY: [
						{value: 5, duration: 150, easing: 'easeInQuad'},
						{value: [-5,0], duration: 150, easing: 'easeOutQuad'}
					],
					opacity: [
						{value: 0, duration: 150, easing: 'linear'},
						{value: 1, duration: 150, easing: 'linear'}
					],
					color: {
						value: '#717a85',
						duration: 1,
						delay: (t,i,l) => i*15+150
					}
				});
			}, 50);	
	};

	function projectsHoverOutFn(){
		clearTimeout(enterTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(projectsLetters);
		anime({
			targets: projectsLetters,
			delay: (t,i,l) => (l-i-1)*5,
			translateY: [
				{value: 5, duration: 150, easing: 'easeInQuad'},
				{value: [-5,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#717a85',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};

	function aboutHoverInFn (){
		aboutTimeout = setTimeout(function()
		{
			isActive = true;
			anime.remove(aboutLetters);
			anime({
				targets: aboutLetters,
				delay: (t,i) => i*5,
				translateY: [
					{value: 5, duration: 150, easing: 'easeInQuad'},
					{value: [-5,0], duration: 150, easing: 'easeOutQuad'}
				],
				opacity: [
					{value: 0, duration: 150, easing: 'linear'},
					{value: 1, duration: 150, easing: 'linear'}
				],
				color: {
					value: '#717a85',
					duration: 1,
					delay: (t,i,l) => i*15+150
				}
			});
		}, 50);
			
	};

	function aboutHoverOutFn(){
		clearTimeout(aboutTimeout);
		if( !isActive ) return;
		isActive = false;

		anime.remove(aboutLetters);
		anime({
			targets: aboutLetters,
			delay: (t,i,l) => (l-i-1)*5,
			translateY: [
				{value: 5, duration: 150, easing: 'easeInQuad'},
				{value: [-5,0], duration: 150, easing: 'easeOutQuad'}
			],
			opacity: [
				{value: 0, duration: 150, easing: 'linear'},
				{value: 1, duration: 150, easing: 'linear'}
			],
			color: {
				value: '#00bcd5',
				duration: 1,
				delay: (t,i,l) => (l-i-1)*15+150
			}
		});
	};
});