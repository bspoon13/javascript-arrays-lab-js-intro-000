var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(inputArray, name) {
  var extraKittens = [...inputArray, name];
  return extraKittens;
}