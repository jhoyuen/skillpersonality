var intelligence = { 
	main: [ 'wizard', 'battlemage', 'witch', 'necromancer', 'warlock', 'sorcerer' ],
	sub: [ 'bard', 'ranger', 'druid', 'priest' ]
};

var wisdom = {
	main: [ 'priest', 'druid', 'ranger', 'monk' ],
	sub: [ 'paladin', 'wizard' ]
};

var charisma = {
	main: [ 'paladin', 'bard', 'sorcerer', 'warlock' ],
	sub: [ 'necromancer', 'witch' ]
};

var strength = { 
	main: [ 'barbarian', 'fighter', 'paladin', 'battlemage' ],
	sub: [ 'rogue', 'monk' ]
};

var dexterity = {
	main: [ 'monk', 'rogue' ],
	sub: [ 'bard', 'ranger', 'fighter' ]	
};

var wizard = 0;
var bard = 0;

function GetClassPercentage(className){
  var selectedSkillsCount = $('.skill').find('.spell').length;
  var intelligenceCount = $('.skill').find('.intelligence').length;
  var wisdomCount = $('.skill').find('.wisdom').length;
  var charismaCount = $('.skill').find('.charisma').length;
  var strengthCount = $('.skill').find('.strength').length;
  var dexterityCount = $('.skill').find('.dexterity').length;
  
  
  if (intelligence['main'].includes(className))
  {
    window[className] += intelligenceCount;
  }
  if (intelligence['sub'].includes(className))
  {
    window[className] += (intelligenceCount / 2);
  }
  if (wisdom['main'].includes(className))
  {
    window[className] += wisdomCount;
  }
  if (wisdom['sub'].includes(className))
  {
    window[className] += (wisdomCount / 2);
  }
  if (charisma['main'].includes(className))
  {
    window[className] += charismaCount;
  }
  if (charisma['sub'].includes(className))
  {
    window[className] += (charismaCount / 2);
  }
  if (strength['main'].includes(className))
  {
    window[className] += strengthCount;
  }
  if (strength['sub'].includes(className))
  {
    window[className] += (strengthCount / 2);
  }
  if (dexterity['main'].includes(className))
  {
    window[className] += dexterityCount;
  }
  if (dexterity['sub'].includes(className))
  {
    window[className] += (dexterityCount / 2);
  }
  
    // console.log('intelligence oount: ' + intelligenceCount);
    // console.log('wisdom oount: ' + wisdomCount);
    // console.log('charisma oount: ' + charismaCount);
    // console.log('strength oount: ' + strengthCount);
    // console.log('dexterity oount: ' + dexterityCount);
  
    console.log('Selected Skill Count:' + selectedSkillsCount);
    console.log('Wizard: ' + ((wizard / selectedSkillsCount) * 100) + '%');
     console.log('Bard: ' + ((bard/ selectedSkillsCount) * 100) + '%');
};

