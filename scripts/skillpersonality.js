var spells = {
	fireball : { title: "Fireball", description: "Launch a sizzling, burning ball of fire", reallife: "\"Solving many issues in one blast!\"" },
	meteor: { title: "Meteor", description: "Meteors falling from the sky!", reallife: "\"Solving many issues using a different solution for each issue...\"" },
	chainlightning: { title: "Chain Lightning", description: "Electric discharge that jumps from the primary target to secondary nearby targets", reallife: "\"Solving a big problem with the intent that other smaller issues get tackled at the same time...\"" },
	blizzard: { title: "Blizzard", description: "A tempest of hail, snow, rain and thunder", reallife: "\"Slowing down an area of issues by slowing them down...\"" },
	tornado: { title: "Tornado", description: "Strong gusts of wind that damage and delay all in its path", reallife: "\"Come up with a quick fixes in an area of related problems. This is not particularly strong but it delays the problems for some time until a proper solution can be found.\"" },
	lightningstrike: { title: "Lightning Strike", description: "A single discharge of electricity", reallife: "\"Tackle a single problem\"" },
	firebolt: { title: "Fire Bolt", description: "A sudden flash of fire", reallife: "\"A quick burst for a fix. Quick, heated but effective\"" },
	thunderbolt: { title: "Thunder Bolt", description: "A sudden flash of thunder", reallife: "\"A quick burst for a fix. Quick, loud but effective\"" },
	earthsmash: { title: "Earth Smash", description: "A giant rock smashes the earth", reallife: "\"a fix that packs a punch and is here to stay...\"" },
	thunderwave: { title: "Thunderwave", description: "A blaze of thunder booming in a line", reallife: "\"Loudly fix all problems that lie in front of you\"" },
	firewave: { title: "Firewave", description: "A blaze of fire burning in a line", reallife: "\"Passionately fix all problems that lie in front of you\"" },
	teleport: { title: "Teleport", description: "Magically disapear and appear at a different point of space and time", reallife: "\"Seem to be anywhere, everywhere anytime...\"" },
	animate: { title: "Animate", description: "Bring a ", reallife: "\"Seem to be anywhere, everywhere anytime...\"" },
};

function init(){	
	$('.spell').off().on('click', function(){
		$('html, body').animate(
        {scrollTop: $('.spell-item').offset().top - 170}, 
        500);
		console.log('images/' + $(this).attr('id') + '.png');
		$('.spellimage').css('background', 'url(\'images/' + $(this).attr('id') + '.png\')');
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