<%--
  Created by IntelliJ IDEA.
  User: Yyf
  Date: 2020/12/5
  Time: 1:32
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="stylesheet" type="text/css" href="../static/css/register.css">
    <title>Register</title>
    <link rel="icon" type="image/ico" href="../resources/icon.ico" sizes="192x192">

    <script type="text/javascript" src="../static/js/register.js"></script>

</head>
<body>
<div class="main">
    <div class="bg">
        <img src="../static/img/bg.jpeg" alt="">
    </div>

    <div class="container">
        <div class="func">
            <div class="RegisterHead">
                        <span id="pwdLoginSpan" class="active selected_underline" style="width: 100%;">
                            <a>注册账号</a>
                        </span>

            </div>

            <div class="userRegister" id="userNameLogin" style="">
                <div class="name_item">
                    <span class="prex-icon"><img src="../static/img/user1.png"></span>
                    <input type="text" id="username" name="username" placeholder="用户昵称" value="">
                </div>
                <span class="name_alert" id="name_alert">昵称长度应为3-11</span>

                <div class="password_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <input type="password" id="password" placeholder="密码" name="password" oninput="checkpsw()" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <span class="psw_alert" id="psw_alert">密码长度应为3-11</span>
                <div class="repassword_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <input type="password" id="repassword" placeholder="确认密码" name="repassword" oninput="checkrepsw()" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <span class="repsw_alert" id="repsw_alert">两次密码不一致</span>
                <div class="phone_item">
                    <span class="prex-icon"><img src="../static/img/captcha1.png"></span>
                    <input type="text" id="userphone" name="userphone" placeholder="请输入手机号" oninput="checkphone()" value="">
                </div>
                <span class="phone_alert" id="phone_alert">手机号格式错误</span>

                <!--                        <div class="email_item">-->
                <!--                            <span class="prex-icon"><img src="./img/captcha1.png"></span>-->
                <!--                            <input type="text" id="useremail" name="useremail" placeholder="请输入邮箱" value="">-->
                <!--                        </div>-->
            </div>


            <div class="btn">
                <a id="register_submit" href="javascript:void(0);" onclick="register()" class="register-btn">注册</a>
            </div>



        </div>


    </div>
</div>
</div>

</div>

</body>
</html>