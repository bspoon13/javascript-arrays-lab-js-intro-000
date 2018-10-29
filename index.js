var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  kittens.push(name);
}

function destructivelyPrependKitten(name) {
  var destructivelyPrependKitten = kittens.unshift(name);
}

//function destructivelyRemoveLastKitten() {
//  var destructivelyRemoveLastKitten = 
//}
