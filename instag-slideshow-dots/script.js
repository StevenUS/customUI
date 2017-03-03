(function () {
    var carousel = document.getElementById("carousel");
    var indicator = document.getElementById("carouselIndicator");
    var slideBtn = document.getElementsByClassName("slideBtn");
    var slidePhotos = document.getElementsByClassName("slidePhoto");

    for (var i = 0; i < slideBtn.length; i++) {
      slideBtn[i].addEventListener('click', changePic, false);
    }


})();

function changePic() {
  if (this.name === "left") {
    for (var i = 0; i < carousel.children.length; i++) {
      // && check that there is a photo to the left to show
      if (carousel.children[i].getAttribute("data-show") === "true" && carousel.children[i-1]) {
        carousel.children[i].setAttribute("data-show", "false")
        carousel.children[i-1].setAttribute("data-show", "true")
        return;
      }
    }
  } else {
    for (var i = 0; i < carousel.children.length; i++) {
      // && check that there is a photo to the left to show
      if (carousel.children[i].getAttribute("data-show") === "true" && carousel.children[i+1]) {
        carousel.children[i].setAttribute("data-show", "false")
        carousel.children[i+1].setAttribute("data-show", "true")
        return;
      }
    }
  }
}
