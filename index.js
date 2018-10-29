var kittens = ["Milo", "Otis", "Garfield"];
function destructivelyAppendKitten(name) {
  var extraKittens = [...kittens, name];
  return extraKittens;
}