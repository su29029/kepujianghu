var dropdown = document.querySelector(".dropdown");
var search = document.getElementById("search");
var dropdown_content = dropdown.children;
for (var i = 0;i < dropdown_content.length;i++){
    dropdown_content[i].onmouseover=function(){
        this.children[1].style.display = "block";
        this.style.backgroundColor="#8FCFFA";
    }
    dropdown_content[i].onmouseout=function(){
        this.children[1].style.display = "none";
        this.style.backgroundColor="";
    }
}
search.onclick=function(){
    
}