var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(inputArray, name) {
  extraKittens = [...inputArray, name];
  return extraKittens;
}