var usernamePassword = document.querySelector(".username-password");
var username = document.getElementById("username");
var password = document.getElementById("pswd");
var confirm = document.getElementById("confirm");
var btn = document.getElementsByClassName("btn");

username.onfocus = function() {
    if (this.value === "请输入用户名") {
        if (this.style.color !== "black") {
            this.value = "";
            this.style.color = "black";
        }
    }
}
username.onblur = function() {
    if (this.value === "") {
        this.value = "请输入用户名";
        this.style.color = "#acacac";
    }
}
username.onmouseover = function() {
    this.style.border = "1px solid blue";
}
username.onmouseout = function() {
    this.style.border = "";
}
password.onfocus = function() {
    if (this.value === "请输入密码") {
        if (this.style.color !== "black") {
            this.value = "";
            this.type = "password";
            this.style.color = "black";
        }
    }
}
password.onblur = function() {
    if (this.value === "") {
        this.type = "text";
        this.value = "请输入密码";
        this.style.color = "#acacac";
    }
}
password.onmouseover = function() {
    this.style.border = "1px solid blue";
}
password.onmouseout = function() {
    this.style.border = "";
}
confirm.onfocus = function() {
    if (this.value === "请确认密码") {
        if (this.style.color !== "black") {
            this.value = "";
            this.type = "password";
            this.style.color = "black";
        }
    }
}
confirm.onblur = function() {
    if (this.value === "") {
        this.type = "text";
        this.value = "请确认密码";
        this.style.color = "#acacac";
    }
}
confirm.onmouseover = function() {
    this.style.border = "1px solid blue";
}
confirm.onmouseout = function() {
    this.style.border = "";
}
btn[0].onclick = function() {
    var stringUsername = username.value;
    var stringPassword = password.value;
    var lengthUsername = stringUsername.length;
    var lengthPassword = stringPassword.length;
    console.log(lengthUsername);
    console.log(lengthPassword); //为什么lengthPassword的值跟lengthUsername一样
    if (stringUsername == "请输入用户名" || stringUsername == "") {
        username.style.border = "1px solid red";
        alert("请输入用户名");
    } else if (lengthUsername < 6) {
        username.style.border = "1px solid red";
        alert("不是合法的用户名!");
    } else {
        if (stringPassword == "请输入密码") {
            password.style.border = "1px solid red";
            alert("请输入密码");
        } else if (lengthPassword < 6 || lengthPassword > 18) {
            password.style.border = "1px solid red";
            alert("不是合法的密码！");
        } else {
            // alert("注册功能敬请期待！");
            if (password.value !== confirm.value) {
                password.style.border = "1px solid red";
                confirm.style.border = "1px solid red";
                alert("两次密码输入不一致");
            } else {
                if (lengthUsername < 6) {
                    username.style.border = "1px solid red";
                    alert("用户名长度过短，至少为6位");
                } else if (lengthUsername >= 32) {
                    username.style.border = "1px solid red";
                    alert("用户名长度过长，不能超过32位");
                } else {
                    if (lengthPassword <= 6) {
                        password.style.border = "1px solid red";
                        alert("密码长度过短，请至少设置6位");
                    } else if (lengthPassword >= 32) {
                        password.style.border = "1px solid red";
                        alert("密码长度过长，不能超过32位");
                    } else {
                        var userdata = { user: username.innerHTML, pwsd: password.innerHTML };
                        $.ajax({
                            url: '/login',
                            type: 'post',
                            data: userdata,
                            success: function(data, status) {
                                if (status == 'success') {
                                    location.href = 'login';
                                }
                            },
                            error: function(data, err) {
                                location.href = 'register';
                            }
                        });
                    }
                }
            }
























        }
    }
}