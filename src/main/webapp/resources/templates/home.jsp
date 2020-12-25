<%--
  Created by IntelliJ IDEA.
  User: Yyf
  Date: 2020/12/5
  Time: 20:19
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" type="text/css" href="../static/css/home.css">
    <link rel="icon" type="image/ico" href="../resources/icon.ico" sizes="192x192">
    <script type="text/javascript" src="../static/js/home.js"></script>
</head>
<body>
<div class="main">
    <div class="bg">
        <img src="../static/img/bg.jpeg" alt="">
    </div>

    <div class="container" style="display: block">
        <div class="func">
            <div class="NameHead">
                    <span id="NameSpan" class="active selected_underline"  style="width: 100%;">
                    </span>

            </div>



            <div class="btn">
                <a id="alter_name" href="javascript:void(0);" onclick="Altername()" class="success-btn">修改信息</a>
                <a id="alter_psw" href="javascript:void(0);" onclick="Alterpsw()" class="success-btn">修改密码</a>
                <a id="logout" href="/" onclick="" class="success-btn">退出登陆</a>
            </div>



        </div>


    </div>

    <div class="container" id="alter_name_container" style="display: none">
        <div class="func">
            <div class="NameHead">
                        <span   class="active selected_underline" style="width: 100%;">
                            修改昵称
                        </span>
                <img src="../static/img/return.png" class="back" onclick="Backhome()">
            </div>
            <div class="name_alter" id="name_alter" style="">
                <div class="new_psw_item">
                    <input type="text" id="new_name" name="new_name" placeholder="输入新昵称" oninput="checkname()" value="">
                </div>
                <span class="name_alert" id="name_alert">昵称长度应为2-6</span>
            </div>

            <div class="btn">
                <a id="name_back_home" href="javascript:void(0);" onclick="AlterName()" class="success-btn">确认修改</a>
            </div>



        </div>


    </div>

    <div class="container" id="alter_psw_container" style="display: none">
        <div class="func">
            <div class="NameHead">
                        <span  id="" class="active selected_underline" style="width: 100%;">
                            修改密码
                        </span>
                <img src="../static/img/return.png" class="back" onclick="Backhome()">
            </div>

            <div class="user_alter" id="user_alter" style="">
                <div class="new_psw_item">
                    <input type="password" id="new_psw" name="new_psw" placeholder="输入新密码" oninput="checkpsw()" value="">
                </div>
                <span class="new_psw_alert" id="new_psw_alert">密码长度应为3-11</span>
                <div class="new_repsw_item">
                    <input type="password" id="new_repsw" placeholder="确认新密码" name="new_repsw" oninput="checkrepsw()" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <span class="new_repsw_alert" id="new_repsw_alert">两次密码不一致</span>

                <div class="confirm_phone">
                    <input type="text" id="userphone" placeholder="输入手机号" name="userphone" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>

                <div class="dynamic_code">
                    <input type="text" id="dynamic_code" name="dynamic_code" placeholder="请输入验证码"  value="">
                    <a id="send_dynamic_psw" href="javascript:void(0);" onclick="DynamicCode()" class="send_dynamic_psw">发送验证码</a>

                </div>

                <!--                        <div class="email_item">-->
                <!--                            <span class="prex-icon"><img src="./img/captcha1.png"></span>-->
                <!--                            <input type="text" id="useremail" name="useremail" placeholder="请输入邮箱" value="">-->
                <!--                        </div>-->
            </div>

            <div class="btn">
                <a id="psw_back_home" href="javascript:void(0);" onclick="AlterPsw()" class="success-btn">确认修改</a>
            </div>



        </div>


    </div>

</div>

</body>
</html>
