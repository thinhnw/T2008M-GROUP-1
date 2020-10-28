function header() {

    return "<div class=\"container\">\n" +
        "			<div class=\"navbar\">\n" +
        "				<div class=\"logo\">\n" +
        "					<a href=\"./home.html\" class=\"logo-link\">\n" +
        "						<img src=\"./images/logo.svg\" alt=\"\">\n" +
        "					</a>\n" +
        "				</div>\n" +
        "				<div class=\"top-links\">\n" +
        "					<ul>\n" +
        "						<li><a href=\"./home.html\">HOME</a></li>\n" +
        "						<li><a href=\"./fitness.html\">FITNESS</a></li>\n" +
        "						<li><a href=\"./recipes.html\">RECIPES</a></li>\n" +
        "						<li><a href=\"./healthy-living.html\">HEALTHY LIVINGS</a></li>\n" +
        "						<li><a href=\"./yoga.html\">YOGA</a></li>\n" +
        "						<li><a href=\"./just-for-fun.html\">JUST FOR FUN</a></li>\n" +
        "					</ul>\n				</div>\n" +
        "				<div class=\"top-right\">\n" +
        "					<div class=\"btn-search\">\n" +
        "						<i class=\"fas fa-search\"></i>\n" +
        "					</div>\n" +
        "				</div>\n" +
        "			</div>\n" +
        "		</div>";
}

let hd = document.getElementById("header");
hd.innerHTML = header();