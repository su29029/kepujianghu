var dropdown = document.querySelector(".dropdown");
var search = document.getElementById("search");
var other = document.getElementById("other");
var register = document.querySelector("#register");
var dropdown_content = dropdown.children;
for (var i = 1; i < dropdown_content.length; i++) {
    dropdown_content[i].addEventListener("mouseover", function() {
        this.children[1].style.display = "block";
        this.style.backgroundColor = "#8FCFFA";
    }, false);
    dropdown_content[i].addEventListener("mouseout", function() {
        this.children[1].style.display = "none";
        this.style.backgroundColor = "";
    }, false);
}
search.addEventListener("click", function() { //搜索框出现在页面正中央
    alert("搜索功能敬请期待！");
}, false);

// var pageWidth = window.innerWidth;
// var pageHeight = window.innerHeight;
// console.log(pageWidth);
// console.log(pageHeight);
// console.log(other.childNodes);
// if (pageWidth <= 1350){
//     other.style.display = "none";
// }
// if (pageWidth >= 1350){
//     other.style.display = "inlineFlex";
// }


// var padding = dropdown.style.padding;
//console.log(width);

//console.log(padding);