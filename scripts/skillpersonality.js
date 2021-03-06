var spells = {
	fireball : { title: "Fireball", description: "Launch a sizzling, burning ball of fire", reallife: "\"Solving many issues in one blast!\"" },
	meteor: { title: "Meteor", description: "Meteors falling from the sky!", reallife: "\"Solving many issues using a different solution for each issue...\"" },
	chainlightning: { title: "Chain Lightning", description: "Electric discharge that jumps from the primary target to secondary nearby targets", reallife: "\"Solving a big problem with the intent that other smaller issues get tackled at the same time...\"" },
	blizzard: { title: "Blizzard", description: "A tempest of hail, snow, rain and thunder", reallife: "\"Slowing down an area of issues by slowing them down...\"" },
	tornado: { title: "Tornado", description: "Strong gusts of wind that damage and delay all in its path", reallife: "\"Come up with a quick fixes in an area of related problems. This is not particularly strong but it delays the problems for some time until a proper solution can be found.\"" },
	lightningstrike: { title: "Lightning Strike", description: "A single discharge of electricity", reallife: "\"Tackle a single problem\"" },
	firebolt: { title: "Firebolt", description: "A sudden flash of fire", reallife: "\"A quick burst for a fix. Quick, heated but effective\"" },
	thunderbolt: { title: "Thunderbolt", description: "A sudden flash of thunder", reallife: "\"A quick burst for a fix. Quick, loud but effective\"" },
	waterbolt: { title: "Waterbolt", description: "A sudden splash of water", reallife: "\"A quick burst for a fix. Quick, heavy but effective\"" },
	earthsmash: { title: "Earth Smash", description: "A giant rock smashes the earth", reallife: "\"a fix that packs a punch and is here to stay...\"" },
	thunderwave: { title: "Thunderwave", description: "A blaze of thunder booming in a line", reallife: "\"Loudly fix all problems that lie in front of you\"" },
	firewave: { title: "Firewave", description: "A wave of fire burning in a line", reallife: "\"Passionately fix all problems that lie in front of you\"" },
	fireblaze: { title: "Fire Blaze", description: "Fire, fire everywhere!", reallife: "\"Passionately fix all problems at the risk of losing track of what you are doing\"" },
	fireblast: { title: "Fire Blast", description: "A blast of fiery energy", reallife: "\"Fix an area of problems by a powerful way\"" },	
	teleport: { title: "Teleport", description: "Magically disapear and appear at a different point of space and time", reallife: "\"Seem to be anywhere, everywhere anytime...\"" },
	reflect: { title: "Reflect", description: "Repel an attack", reallife: "\"under attack, produce a counter argument, thought or idea\"" },
	magicmissiles: { title: "Magic Missiles", description: "Fire multiple attacks", reallife: "\"Solving many issues at random\"" },
	magicbarrier: { title: "Magic Barrier", description: "Magically block an attack", reallife: "\"under attack, intelligently defend against harsh words or actions directed against you\"" },
	wildmagic: { title: "Wild Magic", description: "A random frog, fire sparks, meteor showers, sizzle your hair, you name it!", reallife: "\"use your wits and energy to achieve random feats of highs and lows...\"" },
	forcecage: { title: "Force Cage", description: "A trap, hmm, it's magical!", reallife: "\"Plan and isolate problems\"" },
	silence: { title: "Silence", description: "Silence is golden... no magic allowed", reallife: "\"Make it so that my own idea prevails over others\"" },
	invisibility: { title: "Invisibility", description: "Make yourself invisible", reallife: "\"Quietly and stealthily achieve your goals\"" },		
	fly: { title: "Fly", description: "I believe I can fly!", reallife: "\"Finish tasks fast and unfinished tasks cannot pull me down!\"" },		
	timestop: { title: "Time Stop", description: "Stop the time around you for a limited duration", reallife: "\"Nobody stops time. Unless you manage to do things faster and better than anyone else around you and make little to no mistakes... \"" },	
	warp: { title: "Warp", description: "Transport targets to another dimension", reallife: "\"Bring discussions with others within your control and comfort zone\"" },		
	heal: { title: "Heal", description: "Heal person", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you are there to turn it around by words and actions\"" },		
	regen: { title: "Regenerate", description: "Regenerate life", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you are there everyday to help\"" },			
	blessing: { title: "Blessing", description: "Bless person", reallife: "\"Someone injured, feeling low, depressed, full of doubts or sadness, you pray so they get better or stronger\"" },				
	holyshield: { title: "Holy Shield", description: "Bestow a divine shield", reallife: "\"Pray for someone's protection\"" },					
	holysword: { title: "Holy Sword", description: "Strike and banish all evil", reallife: "\"Seek to do that what is just and right\"" },					
	holyaura: { title: "Holy Aura", description: "A positive aura emanates from you giving your friends healing, protection, courage or hope", reallife: "\"Your presence inspires your peers\"" },	
	holylight: { title: "Holy Light", description: "A flash of light that heals those who revel in it and bothers those who want to hide from it", reallife: "\"Believe in a higher force in the world that watches over you or watches you!\"" },		
	healingtouch: { title: "Healing Touch", description: "Healing through touch", reallife: "\"Practitioners of Reiki or other touch therapy!\"" },		
	mount: { title: "Mount", description: "Ride a mighty steed / wolf / eagle or the like", reallife: "\"Enjoy and excel at riding your vehicle or any means of locomotion\"" },					
	summonpet: { title: "Summon Pet", description: "Call your most trusted animal friend companion", reallife: "\"Your pet is your loyal friend and gives you strength\"" },
	summonbug: { title: "Summon Bug", description: "Call your most trusted bug companions", reallife: "\"Your bugs are your loyal friends and give you strength\"" },	
	callofthewild: { title: "Call of the Wild", description: "Call all friends of the wild to your aid", reallife: "\"true nature lover, work closely to the preservation of wildlife and nature\"" },					
	moonbeam: { title: "Moonbeam", description: "Shoot a laser beam from the moon", reallife: "\"A precise fix that seem to come out of nowhere\"" },
	starfall: { title: "Starfall", description: "Star clusters shooting from the sky", reallife: "\"Solving many issues using a different solution for each issue...\"" },	
	sunblast: { title: "Sunblast", description: "Shoot a burst of energy from the sun", reallife: "\"A powerful fix that seem to come out of nowhere\"" },
	healingbean: { title: "Healing Bean", description: "Hmm Yummy! And it heals me too...", reallife: "\"Love eating healthy nutrients and keep fit\"" },
	galeforce: { title: "Gale Force", description: "Slow down enemies' movement", reallife: "\"Allocate yourself more time to finish tasks\"" },		
	wildgrowth: { title: "Wild Growth", description: "Vines grow everywhere", reallife: "\"Love nature and wildlife deeply\"" },							
	entangle: { title: "Entangle", description: "Vines sprout and immobilise target in place", reallife: "\"Stop someone in their tracks and actions\"" },
	rejuvenate: { title: "Rejuvenate", description: "Healing salves to keep everyone healthy", reallife: "\"Take good care using lotions and healthy foods\"" },	
	shapeshift: { title: "Shapeshift", description: "Transform into a nature being", reallife: "\"Survive in your environment\"" },							
	aurabolt: { title: "Aura Bolt", description: "A blast of energy using one's life force", reallife: "\"Solving many issues with heart\"" },
	meditate: { title: "Meditate", description: "Heal heart, body and soul", reallife: "\"Meditate and take a pause from your busy life\"" },
	enlightenment: { title: "Enlightenment", description: "Realise your true potential", reallife: "\"Meditate and reach a better understanding of you and your capabilities\"" },	
	windwalk: { title: "Windwalk", description: "Move and strike as fast and unpredictable as the wind", reallife: "\"You are versatle and can target different problems quickly\"" },	
	charm: { title: "Charm", description: "Charm a person to act for you", reallife: "\"Coerce someone into taking action by the force of your personality\"" },						
	bewitch: { title: "Bewitch", description: "Bewitch a person to act for you", reallife: "\"Coerce someone into taking action\"" },						
	lucky: { title: "Lucky", description: "Have a better chance to anything", reallife: "\"The world seems to smile on you\"" },
	sleep: { title: "Sleep", description: "Lull targets into sleep", reallife: "\"Your words or actions tend to lull your audience to sleep or help people to rest \"" },	
	inspire: { title: "Inspire", description: "Boost a person's innate abilities", reallife: "\"By words, music or action, help others find their better selves and hence perform better in their endeavours\"" },						
	favoredsoul: { title: "Favored Soul", description: "Boost own stats by a certain amount", reallife: "\"A star seems to shine upon you and luck is on your side\"" },							
	animate: { title: "Animate", description: "Bring an inanimate object to life", reallife: "\"Although not literally, animation is in everyday life as moving pictures, bubbling sounds, robots...\"" },	
	soulmusic: { title: "Soul Music", description: "Boost a group's attributes", reallife: "\"By music, improve people's spirits!\"" },	
	leadership: { title: "Leadership", description: "Boost a group's morale", reallife: "\"When the going gets tough, encourage your team to keep hope and keep going with strength and courage!\"" },
	heartandsoul: { title: "Heart and Soul", description: "Increase your attack power and accuracy using your life force", reallife: "\"Give all you have to achieve a goal or finish a task, sometimes at the expense of your own health...\"" },		
	metamagic: { title: "Meta Magic", description: "Reshape the essence of magic and bend it to your will", reallife: "\"Easily decide how to handle the small and big problems and apply the right fixes\"" },	
	mindcontrol: { title: "Mind Control", description: "Take over a person's mind to make them act for you", reallife: "\"By coercion, intimidation, deception or manipulation among others, convince other people to think little of themselves and make them work for you\"" },						
	summondragon: { title: "Summon Dragon", description: "Summon a dragon", reallife: "\"Make someone powerful/talented/gifted be your ally\"" },							
	summondemon: { title: "Summon Demon", description: "Summon a random demon", reallife: "\"Any means is good to achieve your goals, no matter how bad the means\"" },						
	hex: { title: "Hex", description: "Put a curse on your target", reallife: "\"Curse, deceive or badmouth someone\"" },
	crystalball: { title: "Crystal Ball", description: "I see everyone and everything!", reallife: "\"Easily oversee all nature of work\"" },	
	eldritchbeam: { title: "Eldritch Beam", description: "A beam of otherworldly energy", reallife: "\"Fix a problem by a powerful but unusual way\"" },	
	eldritchblast: { title: "Eldritch Blast", description: "A blast of otherworldly energy", reallife: "\"Fix an area of problems by a powerful but unusual way\"" },	
	eldritchlightning: { title: "Eldritch Lightning", description: "Otherworldly electric discharge that jumps to many nearby targets", reallife: "\"Solving many issues in unusual ways\"" },	
	eldritchshield: { title: "Eldritch Shield", description: "An otherworldly shield that both blocks attacks and attacks the attacker back", reallife: "\"under attack, unpredictably defend against harsh words or actions directed against you and turn them against others\"" },
	eldritchgem: { title: "Eldritch Gem", description: "An otherworldly gem that brims with ghosts that are sent to attack", reallife: "\"Brimming with a multitude of unorthodox ideas \"" },	
	raiseskeleton: { title: "Raise Skeleton", description: "Rise from the earth, skeletons!!! Hahahaha!", reallife: "\"Perform very efficient but unethical ways to fix many problems\"" },	
	syphonlife: { title: "Syphone Life", description: "Leech life away from targets", reallife: "\"Make others do your work\"" },	
	syphonmagic: { title: "Syphon Magic", description: "Leech magic away from targets", reallife: "\"Steal others' ideas\"" },	
	vampirebats: { title: "Vampire Bats", description: "Bats leech life away from targets", reallife: "\"Your schemes steal others' ideas\"" },	
	pressurepunch: { title: "Pressure Punch", description: "A direct and powerful jab", reallife: "\"Address a problem head on\"" },							
	uppercut: { title: "Uppercut", description: "A direct punch from under to try distabilise your target", reallife: "\"Address a problem head on and try to shift it\"" },						
	cleave: { title: "Cleave", description: "Slash down like a hot knife through butter", reallife: "\"Address a problem head on in one go, it was easy\"" },		
	smash: { title: "Smash", description: "Smash down", reallife: "\"Address a problem head on in one go in an attempt to break through it\"" },
	swordslam: { title: "Sword Slam", description: "Slam your sword thrusting down with amazing force", reallife: "\"Address a problem head on in one go in an attempt to break through it\"" },
	whirlwind: { title: "Whirlwind", description: "A spinning attack with the sword", reallife: "\"Address several problems around you. hit and miss...\"" },	
	swipe: { title: "Swipe", description: "A slicing movement laterally cutting through the air", reallife: "\"try to get a major swipe at a problem\"" },
	doubleslash: { title: "Double Slash", description: "Attack twice with your weapon", reallife: "\"Have a plan A and plan B when solving problems\"" },	
	counterstrike: { title: "Counter Strike", description: "React and counter an attack using your weapon", reallife: "\"under attack, produce a counter action\"" },	
	parry: { title: "Parry", description: "Physically block an incoming attack with your weapon", reallife: "\"Brush aside something made against you using your favourite tool\"" },
	criticalblow: { title: "Critical Blow", description: "Strike successfully with twice the attack value", reallife: "\"Find a solution to a problem\"" },	
	lightningblade: { title: "Lightning Blade", description: "A fast slash of the blade with electrifying effect", reallife: "\"Tackle a single problem fast and effectively\"" },
	waterblade: { title: "Water Blade", description: "A precise slash of the blade so sharp it can part water", reallife: "\"Tackle a single problem very well\"" },	
	rocksplittingsabre: { title: "Rock-splitting Sabre", description: "A powerful blade attack that can slice through rock", reallife: "\"Effectively tackle a tough and hard problem\"" },	
	soulblade: { title: "Soul Blade", description: "A cursed blade that gets more powerful by absorbing spirits", reallife: "\"Have a go at problems using a very unethical method\"" },	
	shieldslam: { title: "Shield Slam", description: "Your shield serves you as a weapon to stun your enemy", reallife: "\"Turn what you would use to defend yourself onto a problem solving idea or action\"" },
	chains: { title: "Chains", description: "Immobilise your enemy", reallife: "\"Isolate some tasks away\"" },
	sledgehammer: { title: "Sledgehammer", description: "Deal a massive heavy blow", reallife: "\"Heavily invest time to attempt to fix a problem\"" },
	axemanship: { title: "Axemanship", description: "Proficient with the axe", reallife: "\"Skilled in practical tools\"" },
	explosiveblow: { title: "Explosive Blow", description: "a massive blow using a heavy weapon", reallife: "\"Heavily invest in resolving a problem\"" },
	staff: { title: "Staff", description: "Proficient with the staff", reallife: "\"Skilled in tools that could be substituted to something similar\"" },
	meteorhammer: { title: "Meteor Hammer", description: "Meteors Swinging in the air!", reallife: "\"Solving many issues and acting on them on a swing\"" },
	armada: { title: "Armada", description: "You have an army at you call", reallife: "\"You have the backup of many family members, friends, colleagues, employees or partners\"" },
	roar: { title: "Roar", description: "Raise your spirit and dampen the spirit of others near you", reallife: "\"Buoyantly and passionately speak and act in front of others\"" },
	charge: { title: "Charge", description: "Rush quickly and violently forward towards a target", reallife: "\"You target and tackle a single problem assiduously without concerning yourself with other things near you\"" },
	dash: { title: "Dash", description: "Rush quickly forward to attack", reallife: "\"You rush into tasks\"" },
	archery: { title: "Archery", description: "You are able to effectively use bow and arrows", reallife: "\"You have a direct approach and all about finishing targets\"" },
	rainarrows: { title: "Rain Arrows", description: "an array of arrows fall from the sky", reallife: "\"Try to fix as many problems as you can, hoping that as many of them are fixed\"" },
	firearrows: { title: "Fire Arrows", description: "a volley of flaming arrows", reallife: "\"Try to fix as many problems as you can, with each fix having a higher chance of success\"" },	
	watershot: { title: "Water Shot", description: "a piercing arrow that speeds through even water", reallife: "\"Your direct approach works well also outside of your comfort zone\"" },
	windshot: { title: "Wind Shot", description: "a piercing arrow that flies like the wind", reallife: "\"Your direct approach has a very high chance of success\"" },
	snipe: { title: "Snipe", description: "One shot, one kill!", reallife: "\"You are mercilessly accurate and get the job done\"" },		
	bullseye: { title: "Bull's Eye", description: "En plein dans le mille!", reallife: "\"You are mercilessly accurate and get the job done\"" },			
	trap: { title: "Trap", description: "A trap!", reallife: "\"Setup several traps, catching many off guard... Can also be used to isolate problems\"" },	
	track: { title: "Track", description: "Track targets", reallife: "\"Setup reminders, events, schedules, timers and ease your life by knowing where, who, when someone/something is about\"" },		
	bomb: { title: "Bomb", description: "A bomb!", reallife: "\"Solving many issues in one blast!\"" },	
	bullet: { title: "Bullet", description: "A brilliant piece of engineered fire launching weaponry", reallife: "\"engineer a major fix to a problem... \"" },		
	flashfist: { title: "Flash Fist", description: "A volley of fist punches", reallife: "\"Trying to fix as many problems as you can, but they are low impact\"" },						
	flyingkick: { title: "Flying Kick", description: "A quick flying kick attack", reallife: "\"You target and tackle a single problem quickly by investing the time to do it\"" },	
	flurryofdaggers: { title: "Flurry of Daggers", description: "A swing of daggers", reallife: "\"Trying to fix as many problems as you can, with a high chance to resolve them some of them\"" },						
	backstab: { title: "Backstab", description: "Sneak attack a target", reallife: "\"A blow behind someone's back\"" },
	haste: { title: "Haste", description: "Boost own speed", reallife: "\"Work or act faster\"" },							
	combo: { title: "Combo", description: "Chain your attacks to the most of your ability", reallife: "\"Keep at a problem repeatedly, using the same or different skillset \"" },							
	dragonstyle: { title: "Dragon Style", description: "You master the art of combat", reallife: "\"You practise some form of martial arts \"" },	
	spinningsword: { title: "Spinning Sword", description: "Your dexterity allows you to keep your sword spinning in the air", reallife: "\"Achieve the art of multitasking \"" },
	flyingsword: { title: "Flying Sword", description: "Your dexterity allows you to keep your sword flying in the air", reallife: "\"Achieve the art of multitasking \"" },	
	poison: { title: "Poison", description: "A concoction to slowly afflict targets over time", reallife: "\"Devise a fix that slowly breaks down problems over time\"" },
	stealth: { title: "Stealth", description: "Move undetected, almost invisible", reallife: "\"do something without others knowing\"" },
	scout: { title: "Scout", description: "Survey your surroundings for survival, reconaissance or adequate terrain", reallife: "\"Research or investigate if certain tasks are feasible or how much time they would take to complete among other things\"" },	
	thrust: { title: "Thrust", description: "a piercing attack by thrust of a weapon forward", reallife: "\"Swiftly tackle a problem and continue tackling the same issue or quickly change to others\"" },
	lethalstrike: { title: "Lethal Strike", description: "Perform a finishing blow", reallife: "\"Finish a problem, making sure it does not come back again\"" },
	
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
	$('a#mypersona').off().on('click', function(){
		$('html, body').animate(
			{scrollTop: $('.' + $(this).attr('id')).offset().top - 170}, 
        500);
		
		$('.mypersona').html('');
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
		GetClassPercentage('artificer');
		
		console.log($('.mypersona p').length);
		if($('.mypersona p').length == 0)
		{
			$('.mypersona').html('<p>Hero! Your adventure has not yet begun. Choose your weapons and spells and venture on!</p>')
		}
		else{
			$('.mypersona p').sort(sort_p).appendTo('.mypersona');
			
			function sort_p(a, b){
				return ($(b).data('classpercentage')) - ($(a).data('classpercentage'));    
			}
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
  
  console.log($(ev.target).hasClass('spell-container'));
  console.log(data);
  
  if($(ev.target).hasClass('skilltemplate') || 
	($(ev.target).hasClass('spell-container') && $('#' + data).hasClass('spell')) ||
	($(ev.target).hasClass('weapon-container') && $('#' + data).hasClass('weapon')) ||
	($(ev.target).hasClass('equipment-container') && $('#' + data).hasClass('equipment')))
  {  
	ev.target.appendChild(document.getElementById(data));
  }
}