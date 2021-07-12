function zak() {
  var x = Math.random();
  x = Math.floor(x * 10);
  if (x % 2 == 0) {
    document.querySelector(".image").setAttribute("src", "كتابة.png")

  } else {
    document.querySelector(".image").setAttribute("src", "ملك.png")
  }
}
