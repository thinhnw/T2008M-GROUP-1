let articlesSection = document.getElementsByClassName('articles-section')[0];
let articles = [
	{
		title: "Signs your body is telling you 'enough'",
		text: "It can be tough to get into exercise, and once we get into a routine, it can be difficult to allow ourselves a rest day. However, rest days are important.", 
		image: "images/Signs-your-body-is-telling-you-enough.jpg", 
		tagName: "healthy", 
		tag: "healthy living"
	}, 
	{
		title: "10 Easy Exercises for Burning Calories",
		text: "Losing weight comes down to a combination of burning calories through exercise, and cutting them from our diet, these are the best 100 Calorie Burners.", 
		image: "images/Easy-Exercises-for-Burning-Calories.jpg", 
		tagName: "fitness", 
		tag: "fitness"
	}, 
	{
		title: "10 Wellness tricks to enhance your mood",
		text: "Exercise and eating well are the formula for looking good on the outside, but how you feel on the inside is just as important to ensure a healthy and happy lifestyle. Follow our top 10 tips to enhance your mood and ensure a happier, healthier you.", 
		image: "images/Wellness-Tricks-660x400.jpg", 
		tagName: "healthy", 
		tag: "healthy living"
	}, 
	{
		title: "If Detoxing Is a Myth – What Can You Do To Get Yourself Healthy?",
		text: "Despite the endless availability of detoxing products and diet plans, is there actual medical evidence to prove these programmes are effective?", 
		image: "images/detox-660x400.jpg", 
		tagName: "healthy", 
		tag: "healthy living"
	}, 
	{
		title: "10 Yoga & Pilates Poses to Ease Back Pain",
		text: "Back pain is a common issue which affects many of us on a daily basis. A lack of exercise, bad posture and spending too long sat at a desk are all factors which can cause us to be in pain....", 
		image: "images/yoga-for-backpain.jpg", 
		tagName: "yoga", 
		tag: "yoga"
	}, 
	{
		title: "The ‘Miracle’ Juice Cleanse – What Does It Really Do To Your Body?",
		text: "Juicing, juice cleanses, juice diets and their many other incarnations are one of the latest crazes to be taking the health world by storm. But what does it really do to your body?", 
		image: "images/Miracle-Detox-Juice-660x400.jpg", 
		tagName: "healthy", 
		tag: "healthy living"
	}, 
	{
		title: "Juicing Recipes to Support, Not Replace Your Healthy Lifestyle",
		text: "If you’re stuck for ideas on how to make delicious, healthy juices then you’re in luck thanks to our fantastic juicing recipes.", 
		image: "images/howto-juicing-recipes-660x400.jpg", 
		tagName: "recipes", 
		tag: "recipes"
	}, 
	{
		title: "The Ultimate Creatine FAQ: What You Need to Know",
		text: "Creatine is readily available on most food supplement sites, but is one of the ones that people know the least about. Here’s what you need to know!", 
		image: "images/creatine-660x400-400x242.jpg", 
		tagName: "fitness", 
		tag: "fitness"
	}, 
	{
		title: "10 Things You Should Know About Dating Athletic Girls",
		text: "If it’s the night before a class or a training session, she’s not going to miss it for a late night with you, here’s 10 things you should know about dating athletic girls.", 
		image: "images/dating-athletic-girls-400x242.jpg", 
		tagName: "fitness", 
		tag: "fitness"
	}, 
	{
		title: "Uptown Funk Treadmill Dance – Carson Dean",
		text: "", 
		image: "images/mark-ronson-uptown-funk-treadmill-dance-400x242.jpg", 
		tagName: "fun", 
		tag: "just for fun"
	}, 
	{
		title: "10 Mistakes Women Make in the Gym",
		text: "When it comes to working out in the gym, there is a lot of conflicting information, we show you the Top 10 mistakes women often make while working out.", 
		image: "images/woman-treadmill-400x242.jpg", 
		tagName: "fitness", 
		tag: "fitness"
	}, 
];

function articlesByTag(tagName) {

	let g_html = "";
	
	articles.filter(article => article.tagName === tagName || tagName === "all" ).forEach((article) => {
		g_html += "" +
						"<div class=\"article\">" +
							"<div class=\"article-img\">" +
								"<img src=\""+ article.image +"\" >" +
								"<div class=\"article-tag " + article.tagName  + "\">" + article.tag + "</div>" +
							"</div>" +
							"<div class=\"article-body\">" +
								"<h3 class=\"article-title\">" +
									article.title +
								"</h3>" +
								"<p class=\"article-text\">" +
									article.text +
								"</p>" +
							"</div>" +
						"</div>";
	})
	return g_html;
}

let classList = articlesSection.classList;
if (classList.length === 1) {

	articlesSection.innerHTML = articlesByTag("all");
} else {
	classList.forEach((c) => {
		if (c !== "articles-section") {
			articlesSection.innerHTML = articlesByTag(c.split("-")[0]);
		}
	})
}
