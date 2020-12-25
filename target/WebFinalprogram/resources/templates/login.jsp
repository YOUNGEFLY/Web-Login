<%--
  Created by IntelliJ IDEA.
  User: Yyf
  Date: 2020/12/4
  Time: 20:18
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="stylesheet" type="text/css" href="../resources/static/css/login.css">
    <title>Login</title>
    <link rel="icon" type="image/ico" href="../resources/resources/icon.ico" sizes="192x192">

    <script type="text/javascript" src="../resources/static/js/login.js"></script>

</head>
<body>
<div class="main">

    <div class="logo">
        <img src="../resources/static/img/logo.png" alt="">
    </div>


    <div class="bg">
        <img src="../resources/static/img/bg.jpeg" alt="">
    </div>
    <!--            &lt;!&ndash; banner内容&ndash;&gt;-->
    <!--            <div class="banner" id='banner'></div>-->
    <!--            &lt;!&ndash; banner内容&ndash;&gt;-->
    <!-- banner内容-->
    <div class="slides">
        <div class="slide-box">
            <img src="../resources/static/img/banner/banner1.jpg" alt="slide">
            <img src="../resources/static/img/banner/banner2.jpg" alt="slide">
            <img src="../resources/static/img/banner/banner3.jpg" alt="slide">
            <img src="../resources/static/img/banner/banner4.jpg" alt="slide">
            <img src="../resources/static/img/banner/banner5.jpg" alt="slide">
        </div>

        <ul class="dot-box">
            <li class="active"></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>

    </div>
    <!-- banner内容-->

    <div class="container">
        <a class="dba_entry" href="../resources/templates/dba.jsp">管理员入口</a>
        <div class="func">
            <div class="tabHead">
                        <span id="pwdLoginSpan" class="active selected_underline" style="width: 50%;">
                            <a>账号登录</a>
                        </span>
                <span id="phoneLoginSpan" style="width: 50%;">
                            <a>手机登录</a>
                        </span>
            </div>

            <div class="userNameLogin" id="userNameLogin" style="display: block">
                <div class="phone_item">
                    <span class="prex-icon"><img src="../resources/static/img/user1.png" class="login-icon"></span>
                    <input type="text" id="username" name="username" placeholder="请输入手机号" value="">
                </div>
                <div class="password_item">
                    <span class="prex-icon"><img src="../resources/static/img/pass1.png" class="login-icon"></span>
                    <input type="password" id="password" placeholder="密码" name="password" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
            </div>
            <div class="dynamicLogin" id="dynamicLogin" style="display: none">
                <div class="phone_item">
                    <span class="prex-icon"><img src="../resources/static/img/user1.png" class="login-icon"></span>
                    <input type="text" id="user_phone" name="user_phone" placeholder="请输入手机号" value="">
                </div>
                <div class="password_item">
                    <span class="prex-icon"><img src="../resources/static/img/captcha1.png" class="login-icon"></span>
                    <input type="text" id="pass_code" placeholder="短信验证码" name="pass_code" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                    <a id="dynamic_psw" href="javascript:void(0);" onclick="SendDynamicCode()" class="dynamic_psw">发送验证码</a>

                </div>

            </div>

            <div class="btn">
                <a id="login_submit" href="javascript:void(0)" onclick="Login()" class="login-btn">登录</a>
            </div>

            <!-- 注册账号|忘记密码 -->
            <div class="help">
                <a id="retrievePassId" href="javascript:void(0)" onclick="forgetPSW()" class="foget-password" title="通过手机短信修改密码">忘记密码？</a>
                <a id="activationAccountId" href="../resources/templates/register.jsp" class="register-account">注册账号</a>
            </div>

            <div class="footer">
                <div class="footeritem">其他登录方式</div>
                <div class="ways">
                    <a id="combinedLogin_a_qq" href="">
                        <img src="../resources/static/img/qq.png" alt="">
                    </a>
                    <a id="combinedLogin_a_wechat" href="">
                        <img src="../resources/static/img/wechat.png" alt="" sizes="40x40">
                    </a>

                </div>
            </div>
        </div>


    </div>
</div>
</div>

</div>

</body>
</html>