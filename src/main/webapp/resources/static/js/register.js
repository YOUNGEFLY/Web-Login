var flag1 = false;
var flag2 = false;
var flag3 = false;
var flag4 = false;
function checkname() {
    let name = document.getElementById("username");
    let name_alert = document.getElementById("psw_alert");
    if (name.value.length>2&&name.value.length<=6){
        //normal
        name_alert.style.display = "none";
        flag1 = true;
    }else {
        name_alert.style.display = "inline-block";
        flag1 = false;
    }
}

function checkpsw() {
    let psw = document.getElementById("password");
    let psw_alert = document.getElementById("psw_alert");
    if (psw.value.length>=3&&psw.value.length<=11){
        //normal
        psw_alert.style.display = "none";
        flag2 = true;
    }else {
        psw_alert.style.display = "inline-block";
        flag2 = false;
    }
}

function checkrepsw() {
    let psw = document.getElementById("password");
    let repsw = document.getElementById("repassword");
    let repsw_alert = document.getElementById("repsw_alert");
    if (psw.value==repsw.value){
        //normal
        repsw_alert.style.display = "none";
        flag3 = true;
    }else{
        repsw_alert.style.display = "inline-block";
        flag3 = false;
    }
}
function checkphone() {
    let phone = document.getElementById("userphone");
    let phone_alert = document.getElementById("phone_alert");
    if (/^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$/.test(phone.value)) {
        //normal
        phone_alert.style.display = "none";
        flag4 = true;
    }else{
        phone_alert.style.display = "inline-block";
        flag4 = false;
    }
    //^1([358][0-9]|4[579]|66|7[0135678]|9[89])[0-9]{8}$
    console.log(phone.value);
}

function register() {
    checkname();
    checkphone();
    checkpsw();
    checkrepsw();
    if (flag1==false||flag2==false||flag3==false||flag4==false) {
        return;
    }else {
        let psw = document.getElementById("password");
        let name = document.getElementById("username");
        let phone = document.getElementById("userphone");

        var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', '/Register', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
        httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
        const obj = {
            "name":name.value,
            "phone":phone.value,
            "psw":psw.value
        };
        httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = httpRequest.responseText;//获取到服务端返回的数据
                if (json=="success") {
                    alert("注册成功");
                    window.location = "/";
                }else{
                    alert("注册失败！");
                }
            }
        };
    }


}

