var usernamePassword = document.querySelector(".username-password");
var username = document.getElementById("username");
var password = document.getElementById("pswd");
var btn = document.getElementsByClassName("btn");
var i = 0;
username.onfocus = function (){
    if (this.value === "请输入手机号"){
        if (this.style.color !== "black"){
        this.value = "";
        this.style.color = "black";
        }
    }
}
username.onblur = function () {
    if (this.value === ""){
        this.value = "请输入手机号";
        this.style.color = "#acacac";
    }
}
username.onmouseover = function (){
    this.style.border = "1px solid blue";
}
username.onmouseout = function (){
    this.style.border = "";
}
password.onfocus = function () {
    if (this.value === "请输入密码"){
        if (this.style.color !== "black"){
            this.value = "";
            this.type = "password";
            this.style.color = "black";
        }
    }
}
password.onblur = function () {
    if (this.value === ""){
        this.type = "text";
        this.value = "请输入密码";
    }
}
password.onmouseover = function (){
    this.style.border = "1px solid blue";
}
password.onmouseout = function (){
    this.style.border = "";
}
btn[0].onclick = function (){
    var stringUsername = username.value;
    var stringPassword = password.value;
    var lengthUsername = stringUsername.length;
    var lengthPassword = stringPassword.length;
    console.log(lengthUsername);
    console.log(lengthPassword);          //为什么lengthPassword的值跟lengthUsername一样
    if (stringUsername == "请输入手机号"||stringUsername == ""){
        alert("请输入手机号");
        i++;

    }
    else if (lengthUsername !== 11 ){
        alert("不是合法的手机号!");
        i++;
    }
    else {
    }
    
    if (lengthPassword < 6 || lengthPassword > 18){
        alert("不是合法的密码！");
    }
    else if (stringPassword == "请输入密码"){
        alert("请输入密码");
    }
    else if( i > 0 ){
    }
    else {
        alert("登录功能敬请期待！");
    }
}
btn[1].onclick = function (){
    alert("注册功能敬请期待！");
}

//访问服务器
var req = new XMLHttpRequest();
req.open("GET","https://www.baidu.com");
req.setRequestHeader("Content-Type","text/plain;charset=UTF-8");
req.send(null);
if (req.readyState === 4 && req.status === 200)
console.log("OK");



