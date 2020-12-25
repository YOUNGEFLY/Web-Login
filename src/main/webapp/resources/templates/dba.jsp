<%--
  Created by IntelliJ IDEA.
  User: Yyf
  Date: 2020/12/19
  Time: 22:08
  To change this template use File | Settings | File Templates.
--%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
    <link rel="stylesheet" type="text/css" href="../static/css/dba.css">
    <link rel="stylesheet" type="text/css" href="../static/css/register.css">

    <title>dba</title>
    <link rel="icon" type="image/ico" href="../resources/icon.ico" sizes="192x192">

    <script type="text/javascript" src="../static/js/dba.js"></script>

</head>
<body>
<div class="main">
    <div class="bg">
        <img src="../static/img/bg.jpeg" alt="">
    </div>

    <div class="container1" id="container1">
        <div class="func">
            <div class="dbaHead">
                <span class="active selected_underline" style="width: 100%;">
                    <a>管理员</a>
                </span>
            </div>

            <div class="dba_Login_item"  style="">
                <div class="name_item">
                    <span class="prex-icon"><img src="../static/img/user1.png"></span>
                    <input type="text" id="dba_phone"  placeholder="管理员账号" value="">
                </div>

                <div class="dba_PSW">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <input type="password" id="dba_psw" placeholder="密码" name="password"  value="">

                </div>


            </div>


            <div class="btn">
                <a id="re_login" href="javascript:void(0);" onclick="dba_Login()" class="dba_login_btn">登陆</a>
            </div>



        </div>


    </div>

    <div class="container2" id="container2" style="display: none">

        <div class="func">

            <table class="mytable" id="table">
                <tr>
                    <th>PHONE</th>
                    <th>IDENTIFY</th>
                    <th>PSW</th>
                    <th>NAME</th>
                    <th>OPTION</th>
                </tr>

            </table>
            <div class="add_btn">
                <a class="add_user" href="javascript:void(0)" onclick="addUser()">新增</a>
            </div>


        </div>

    </div>

    <div class="container" id="container" style="display: none">
        <div class="func">
            <div class="RegisterHead">
                <span id="pwdLoginSpan" class="active selected_underline" style="width: 100%;">
                    <a>新增账号</a>
                </span>
                <img src="../static/img/return.png" class="back" onclick="Backhome()">

            </div>

            <div class="userRegister" id="userNameLogin" style="">
                <div class="name_item">
                    <span class="prex-icon"><img src="../static/img/user1.png"></span>
                    <input type="text" id="username" name="username" placeholder="用户昵称" value="">
                </div>

                <div class="password_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <input type="password" id="password" placeholder="密码" name="password" oninput="checkpsw()" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <div class="repassword_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <select id="repassword" name="repassword">
                        <option>user</option>
                        <option>dba</option>
                    </select>
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <div class="phone_item">
                    <span class="prex-icon"><img src="../static/img/captcha1.png"></span>
                    <input type="text" id="userphone" name="userphone" placeholder="请输入手机号" oninput="checkphone()" value="">
                </div>

                <!--                        <div class="email_item">-->
                <!--                            <span class="prex-icon"><img src="./img/captcha1.png"></span>-->
                <!--                            <input type="text" id="useremail" name="useremail" placeholder="请输入邮箱" value="">-->
                <!--                        </div>-->
            </div>


            <div class="btn">
                <a id="register_submit" href="javascript:void(0);" onclick="register()" class="register-btn">新增</a>
            </div>



        </div>


    </div>

    <div class="container" id="alter_container" style="display: none">
        <div class="func">
            <div class="RegisterHead">
                <span id="alter_head" class="active selected_underline" style="width: 100%;">
                    <a>修改账号：</a>
                </span>
                <img src="../static/img/return.png" class="back" onclick="Backhome()">


            </div>

            <div class="userRegister" id="alterUser" style="">
                <div class="name_item">
                    <span class="prex-icon"><img src="../static/img/user1.png"></span>
                    <input type="text" id="alter_name" name="username" placeholder="用户昵称(不更改则为空)" value="">
                </div>

                <div class="password_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <input type="password" id="alter_psw" placeholder="密码(不更改则为空)" name="password" oninput="checkpsw()" value="">
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>
                <div class="repassword_item">
                    <span class="prex-icon"><img src="../static/img/pass1.png"></span>
                    <select id="alter_id" name="repassword">
                        <option>user</option>
                        <option>dba</option>
                    </select>
                    <!--                            <input type="hidden" id="saltPassword" name="password">-->
                    <!--                            <a class="input_eye suffix-icon eyehide"></a>-->
                </div>



            </div>


            <div class="btn">
                <a id="alter_submit" href="javascript:void(0);" onclick="AlterUser()" class="register-btn">新增</a>
            </div>



        </div>


    </div>
</div>
</div>

</div>

</body>
</html>