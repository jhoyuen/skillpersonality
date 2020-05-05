var spells = {
	fireball : { title: "Fireball", description: "Launch a sizzling, burning ball of fire", reallife: "\"Solving many issues in one blast!\"" },
	meteor: { title: "Meteor", description: "Meteors falling from the sky!", reallife: "\"Solving many issues using a different solution for each issue...\"" },
	chainlightning: { title: "Chain Lightning", description: "Electric discharge that jumps from the primary target to secondary nearby targets", reallife: "\"Solving a big problem with the intent that other smaller issues get tackled at the same time...\"" },
	blizzard: { title: "Blizzard", description: "A tempest of hail, snow, rain and thunder", reallife: "\"Slowing down an area of issues by slowing them down...\"" },
	tornado: { title: "Tornado", description: "", reallife: "" },
	lightningstrike: { title: "Lightning Strike", description: "", reallife: "" },
	firebolt: { title: "Fire Bolt", description: "", reallife: "" },
	thunderbolt: { title: "Thunder Bolt", description: "", reallife: "" },
};

function init(){	
	$('.spell').off().on('click', function(){
		$('html, body').animate(
        {scrollTop: $('.spell-item').offset().top - 170}, 
        500);
		
		$('.title').html(spells[$(this).attr('id')].title);
		$('.description').html(spells[$(this).attr('id')].description);
		$('.reallife').html(spells[$(this).attr('id')].reallife);
	});
	
	$('.menu a').off().on('click', function(){
		$('html, body').animate(
			{scrollTop: $('.' + $(this).attr('id')).offset().top - 170}, 
        500);
	});
}