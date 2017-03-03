var rating = 4;
(function() {
    var percent = (rating * 10 * 2).toString() + "%"
    var currentRating = document.getElementById("progressBar")
    currentRating.children[0].style.width = percent;
}());
