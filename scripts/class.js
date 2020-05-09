var intelligence = { 
	main: [ 'wizard', 'battlemage', 'witch', 'necromancer' ],
	sub: [ 'bard', 'druid' ]
};

var wisdom = {
	main: [ 'priest', 'druid', 'ranger', 'monk' ],
	sub: [ 'warlock' ]
};

var charisma = {
	main: [ 'paladin', 'bard', 'sorcerer', 'warlock' ],
	sub: [ 'necromancer', 'witch', 'priest' ]
};

var strength = { 
	main: [ 'barbarian', 'fighter', 'battlemage' ],
	sub: [ 'paladin' ]
};

var dexterity = {
	main: [ 'monk', 'rogue', 'ranger', 'fighter' ],
	sub: [ 'bard' ]	
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
  
  window[className] = 0;
  
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
    // console.log('Selected Skill Count:' + selectedSkillsCount);
    // console.log(className + ': ' + ((window[className] / selectedSkillsCount) * 100) + '%');
	if(window[className] != 0 && selectedSkillsCount != 0)
	{
		$('.whatismypersonality').append('<p data-classpercentage="' + parseFloat((window[className] / selectedSkillsCount) * 100).toFixed(2) + '">' + className +': ' + ((window[className] / selectedSkillsCount) * 100).toFixed(2) + '%' + '</p>');
	}
};