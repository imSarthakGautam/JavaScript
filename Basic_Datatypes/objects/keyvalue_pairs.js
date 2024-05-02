//json


const tekkenCharacter = {
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true
  };

  //to add property origin : 

  //  ---1---via dot notations:
  tekkenCharacter.origin = 'South Korea';

  //----2----via bracket notations- 
  
  //---if your property has space in it,
  //for strings enclose inside quotes
  tekkenCharacter['hair color'] = 'dyed orange';


  //else   here eyes are variables that store name of key.
  const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';


 /*
{
    player: 'Hwoarang',
    fightingStyle: 'Tae Kwon Doe',
    human: true,
    origin: 'South Korea',
    'hair color': 'dyed orange',
    'eye color': 'brown'
  };
  
  */