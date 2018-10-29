var kittens = ["Milo", "Otis", "Garfield"];

kittens.appendKitten(name);

function destructivelyAppendKitten(inputArray, name) {
  var extraKittens = [...inputArray, name];
  return extraKittens;
}