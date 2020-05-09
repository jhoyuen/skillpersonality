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
	reflect: { title: "Reflect", description: "repel an attack", reallife: "\"under attack, produce a counter argument, thought or idea\"" },
	wildmagic: { title: "Wild Magic", description: "A random frog, fire sparks, meteor showers, sizzle your hair, you name it!", reallife: "\"use your wits and energy to achieve random feats of highs and lows...\"" },
	timestop: { title: "Time Stop", description: "Stop the time around you for a limited duration", reallife: "\"Nobody stops time. Unless you manage to do things faster and better than anyone else around you and make little to no mistakes... \"" },	
	heal: { title: "Heal", description: "Heal person", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you are there to turn it around by words and actions\"" },		
	regen: { title: "Regenerate", description: "Regenerate life", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you are there everyday to help\"" },			
	blessing: { title: "Blessing", description: "Bless person", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you pray so they get better or stronger\"" },				
	holyshield: { title: "Holy Shield", description: "Bestow a divine shield", reallife: "\"Pray for someone's protection\"" },					
	summonpet: { title: "Summon Pet", description: "Call your most trusted animal friend companion", reallife: "\"Your pet is your loyal friend and gives you strength\"" },					
	callofthewild: { title: "Call of the Wild", description: "Call all friends of the wild to your aid", reallife: "\"true nature lover, work closely to the preservation of wildlife and nature\"" },					
	moonbeam: { title: "Moonbeam", description: "Shoot a laser beam from the moon", reallife: "\"A precise fix that seem to come out of nowhere\"" },						
	sunblast: { title: "Sunblast", description: "Shoot a burst of energy from the sun", reallife: "\"A powerful fix that seem to come out of nowhere\"" },						
	charm: { title: "Charm", description: "Charm a person to act for you", reallife: "\"Coerce someone into taking action by the force of your personality\"" },						
	inspire: { title: "Inspire", description: "Boost a person's innate abilities", reallife: "\"By words, music or action, help others find their better selves and hence perform better in their endeavours\"" },						
	favoredsoul: { title: "Favored Soul", description: "Boost own stats by a certain amount", reallife: "\"A star seems to shine upon you and luck is on your side\"" },							
	animate: { title: "Animate", description: "Bring an inanimate object to life", reallife: "\"Although not literally, animation is in everyday life as moving pictures, bubbling sounds, robots...\"" },	
	mindcontrol: { title: "Mind Control", description: "Take over a person's mind to make them act for you", reallife: "\"By coercion, intimidation, deception or manipulation among others, convince other people to think little of themselves and make them work for you\"" },						
	summondemon: { title: "Summon Demon", description: "Summon a random demon", reallife: "\"Any means is good to achieve your goals, no matter how bad the means\"" },						
	punch: { title: "Punch", description: "A direct punch", reallife: "\"Address a problem head on\"" },						
	cleave: { title: "Cleave", description: "Slash down like a hot knife through butter", reallife: "\"Address a problem head on in one go, it was easy\"" },		
	smash: { title: "Smash", description: "Smash down", reallife: "\"Address a problem head on in one go in an attempt to break through it\"" },
	whirlwind: { title: "Whirlwind", description: "A spinning attack with the sword", reallife: "\"Address several problems around you. hit and miss...\"" },	
	swipe: { title: "Swipe", description: "A slicing movement laterally cutting through the air", reallife: "\"try to get a major swipe at a problem\"" },
	lightningblade: { title: "Lightning Blade", description: "A fast slash of the blade with electrifying effect", reallife: "\"Tackle a single problem fast and effectively\"" },	
	shieldslam: { title: "Shield Slam", description: "Your shield serves you as a weapon to stun your enemy", reallife: "\"Turn what you would use to defend yourself onto a problem solving idea or action\"" },
	archery: { title: "Archery", description: "You are able to effectively use bow and arrows", reallife: "\"You have a direct approach and all about finishing targets\"" },
	rainarrows: { title: "Rain Arrows", description: "an array of arrows fall from the sky", reallife: "\"Try to fix as many problems as you can, hoping that as many of them are fixed\"" },
	firearrows: { title: "Fire Arrows", description: "a volley of flaming arrows", reallife: "\"Try to fix as many problems as you can, with each fix having a higher chance of success\"" },	
	snipe: { title: "Snipe", description: "One shot, one kill!", reallife: "\"You are mercilessly accurate and get the job done\"" },		
	trap: { title: "Trap", description: "A trap!", reallife: "\"Setup several traps, catching many off guard... Can also be used to isolate problems\"" },	
	track: { title: "Track", description: "Track targets", reallife: "\"Setup reminders, events, schedules, timers and ease your life by knowing where, who, when someone/something is about\"" },		
	bomb: { title: "Bomb", description: "A bomb!", reallife: "\"Solving many issues in one blast!\"" },	
	flashfist: { title: "Flash Fist", description: "A volley of fist punches", reallife: "\"Trying to fix as many problems as you can, but they are low impact\"" },						
	flurryofdaggers: { title: "Flurry of Daggers", description: "A swing of daggers", reallife: "\"Trying to fix as many problems as you can, with a high chance to resolve them some of them\"" },						
	backstab: { title: "Backstab", description: "Backstab", reallife: "\"A blow behind someone's back\"" },							
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
	$('a#whatismypersonality').off().on('click', function(){
		$('html, body').animate(
			{scrollTop: $('.' + $(this).attr('id')).offset().top - 170}, 
        500);
		
		$('.whatismypersonality').html('');
		GetClassPercentage('wizard');
		GetClassPercentage('bard');
		GetClassPercentage('sorcerer');
		GetClassPercentage('ranger');
		GetClassPercentage('fighter');
		GetClassPercentage('barbarian');
		GetClassPercentage('paladin');
		GetClassPercentage('battlemage');
		GetClassPercentage('priest');
		GetClassPercentage('monk');
		GetClassPercentage('rogue');
		GetClassPercentage('druid');
		GetClassPercentage('warlock');
		GetClassPercentage('witch');
		GetClassPercentage('necromancer');
		
		$('.whatismypersonality p').sort(sort_p).appendTo('.whatismypersonality');
		
		function sort_p(a, b){
			return ($(b).data('classpercentage')) - ($(a).data('classpercentage'));    
		}
	});
}

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}