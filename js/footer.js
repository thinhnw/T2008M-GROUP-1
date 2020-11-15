function footer() {
	let g_html =	
		"<div class=\"container flex\">" +
			"<div class=\"footer-left\">" +
				"<ul class=\"tags-list\">" +
					"<li><a href=\"fitness.html\">Fitness</a></li>" +
					"<li><a href=\"recipes.html\">Recipes</a></li>" +
					"<li><a href=\"healthy-living.html\">Healthy Living</a></li>" +
					"<li><a href=\"yoga.html\">Yoga</a></li>" +
					"<li><a href=\"fun.html\">Just for fun</a></li>" +
				"</ul>" +
				"<ul class=\"tags-list\">" +
					"<li><a href=\"contact.html\">Contact</a></li>" +
					"<li><a href=\"advertising.html\">Advertising</a></li>" +
				"</ul>" +
			"</div>" +
			"<div class=\"footer-right\">" +
				"<form action=\"#\" class=\"subscription-form\">" +
					"<p>Join for exclusive access to new articles...</p>" +
					"<input type=\"email\" placeholder=\"Email address\">" +
					"<button type=\"submit\">SUBMIT</button>" +
				"</form>" +
			"</div>" +
		"</div>		" +
		"<div class=\"container copyright\">" +
			"Copyright 2020" +
		"</div>" ;
	return g_html;
}

let ft = document.getElementById('footer');
ft.innerHTML = footer();
