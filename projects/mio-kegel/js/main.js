$(document).ready(
	function(){
		$('.site-header__main-navigation-submenu-toggler').on('click', 
			function(){
				$(this).closest('li').children('ul').slideToggle(300);
			}
		)
	}
)