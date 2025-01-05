const names=require('./4-names');
const fun=require('./5-utils')

require('./5-utils') // when we execute function in utils file then we can do like this ! //mind grenade

// or else we can do like below
fun(names.firstname,names.lastname) // for this we have to require

const alternativeSyntax=require('./6-alternative-flavor');
console.log(alternativeSyntax)
console.log(`heyy ${alternativeSyntax.person.name} ! Good morning `)
