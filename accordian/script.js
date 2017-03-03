//remove the need for onclick
// (function () {
//     var myClass = document.getElementsByClassName("accordion-box");
//
//     for (var i = 0; i < myClass.length; i++) {
//         console.log(i)
//         myClass[i].addEventListener('click', collapseContent(this), false)
//     }
// })();
function setAccordionWidth() {
    var w = window.innerWidth;
    var accor = document.getElementById("accordion")
    if (w > 1200) {
        accor.setAttribute("style", "width: 65%;")

    } else if (w > 500) {
        accor.setAttribute("style", "width: 75%;")
    } else {
        accor.setAttribute("style", "width: 100%;")
    }
}
setAccordionWidth();

window.onresize = setAccordionWidth;

function collapseContent(param) {
    //select the text content
    var title = param.childNodes[1];
    var content = param.childNodes[3];
    //determine wether content is showing or hidden
    var flag = content.getAttribute("data-value")
    //hide or show content based on boolean
    if (!flag) {
        title.setAttribute("style", "border-bottom-left-radius: 10px; border-bottom-right-radius: 10px;")
        content.style.display = "none";
        content.setAttribute("data-value", "show");
    } else {
        title.setAttribute("style", "border-bottom-left-radius: 0px; border-bottom-right-radius: 0px;")
        content.style.display = "block";
        content.removeAttribute("data-value");
    }
}
