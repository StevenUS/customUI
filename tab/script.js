var tabContainerWidth = document.getElementById("tabContainer").offsetWidth;
var titles = document.getElementsByClassName("tab");
var contents = document.getElementsByClassName("content");

function assignTitleWidth(){
  var width = ((tabContainerWidth/titles.length)-(titles.length + 1)).toString()
  for (var i = 0; i < titles.length; i++) {
      titles[i].addEventListener("click", addContent, false);
      //connect contents via dot notation
      titles[i].content = contents[i];
      titles[i].setAttribute("style", "width:"+ width +"px");
  }
}
assignTitleWidth();

function addContent() {
    var length = document.getElementById("content-box").children.length;
    for (var i = 0; i < length; i++) {
        document.getElementById("content-box").children[i].setAttribute("data-open", "false")
    }
    //from line 9 above, the dot notation was set
    this.content.setAttribute("data-open", "true");

    var titles = document.getElementById("title-box").children
    console.log(titles);
    for (var i = 0; i < titles.length; i++) {
            titles[i].setAttribute("style", "border-bottom: 1 px solid black");
    }
    this.setAttribute("style", "border-bottom: none");
    assignTitleWidth();
}
