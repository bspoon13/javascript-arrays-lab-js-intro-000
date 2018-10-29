var kittens = ["Milo", "Otis", "Garfield"];

function kittenDestruction(name) {
  var destructivelyAppendKitten = kittens.push(name);
  var destructivelyPrependKitten = kittens.unshift(name);
}

