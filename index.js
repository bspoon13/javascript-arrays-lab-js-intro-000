var kittens = ["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name) {
  var destructivelyAppendKitten = kittens.push(name);
  var destructivelyPrependKitten = kittens.unshift(name);
}

