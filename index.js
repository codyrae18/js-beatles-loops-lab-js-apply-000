var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"];
var instruments = ["Guitar", "Bass Guitar", "Lead Guitar", "Drums"];


function theBeatlesPlay(musicians, instruments){
var empty = [];
for(var i in musicians){
  empty.push(musicians[i] + " plays " + instruments[i]);
}
return empty;
}


function johnLennonFacts(facts){
  let shout = [];
  
  let i = 0;
  while(i< facts.length){
    console.log(facts[i] + "!!!");
    i++
  }
  return shout;
}  
  
function iLoveTheBeatles(n){
  let love =  []; 
  do{
  love.push('I love the Beatles!');
    n++;
  } while (n < 15);
  return love;
 

  let arr = []

  for (let i = 0, l = musicians.length; i < l; i++) {
    arr.push(`musicians[i] + "plays" + instruments[i]`)
  }

  return arr
}


function johnLennonFacts(facts) {
  const shoutedFacts = []

  let i = 0
  while (i < facts.length) {
    shoutedFacts.push(`${facts[i]}!!!`)
    i++
  }

  return shoutedFacts
}

function iLoveTheBeatles(n) {
  const arr = []

  do {
    arr.push('I love the Beatles!')
    n++
  } while (n < 15)

  return arr

}