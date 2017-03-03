// Declare variables & define as all elements to be used within functions
var contents = document.getElementsByClassName("content"),
		contentBoxChildren = Array.from(document.getElementById("content-box").children),
		tabs = Array.from(document.getElementsByClassName("tab")),
		tabContainerWidth = document.getElementById("tabContainer").offsetWidth,
		titles = document.getElementById("title-box").children;

// Declare variables & define as values dependent on previously declared variables
var tabWidth = (tabContainerWidth / tabs.length) - tabs.length;

function updateTabWidth() {
  tabs
  .forEach(function(tab, i) {
  	var styleAttr = document.createAttribute("style");
    styleAttr.value = `width: ${tabWidth}px`;
    tab.setAttributeNode(styleAttr);
  })
}

function showTabContent() {
  updateTabWidth();
	var content = this.content;
  this.setAttribute("style", "border-bottom: none");
  
  contentBoxChildren
    .forEach(function(child) {
      child !== content ?
        child.setAttribute("data-open", "false") :
        child.setAttribute("data-open", "true");
    })
}

tabs.forEach(function(tab, i) {
  tab.content = contents[i];
  tab.addEventListener("click", showTabContent)
});
