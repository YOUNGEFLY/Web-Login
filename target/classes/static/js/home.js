// 当页面载入完毕后执行Javascript代码：
window.onload=function(){
    var flag = window.location.href.split('?')[1];
    if (flag=="forgetpsw") {
        Alterpsw();
    }else{
        setName();
    }

};

let UserPhone;

function setName() {
    var name = window.location.href.split('=')[1];
    var NameSpan = document.getElementById("NameSpan");
    UserPhone = name;
    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/Home', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "phone":name
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = httpRequest.responseText;//获取到服务端返回的数据
            NameSpan.innerText = "Welcome,  "+json;
        }
    };
}

function Altername() {
    let container1 = document.getElementsByClassName("container");
    container1[0].style.display = "none";
    let container2 = document.getElementById("alter_name_container");
    container2.style.display = "block";

}

function Alterpsw() {
    let container1 = document.getElementsByClassName("container");
    container1[0].style.display = "none";
    let container2 = document.getElementById("alter_psw_container");
    console.log(container2);
    container2.style.display = "block";
}
function Backhome() {
    window.location.reload();
}
let nameflag = false;
function checkname() {
    let name = document.getElementById("new_name");
    console.log(name.value);
    let name_alert = document.getElementById("name_alert");
    if (name.value.length>=2&&name.value.length<=6){
        //normal
        name_alert.style.display = "none";
        nameflag = true;
    }else {
        name_alert.style.display = "inline-block";
        nameflag = false;
    }
}
let pswflag = false;
function checkpsw() {
    let psw = document.getElementById("new_psw");
    let psw_alert = document.getElementById("new_psw_alert");
    if (psw.value.length>=3&&psw.value.length<=11){
        //normal
        psw_alert.style.display = "none";
        pswflag = true;
    }else {
        psw_alert.style.display = "inline-block";
        pswflag = false;
    }
}
let repswflag = false;
function checkrepsw() {
    let psw = document.getElementById("new_psw");
    let repsw = document.getElementById("new_repsw");
    let repsw_alert = document.getElementById("new_repsw_alert");
    if (psw.value==repsw.value){
        //normal
        repsw_alert.style.display = "none";
        repswflag = true;
    }else{
        repsw_alert.style.display = "inline-block";
        repswflag = false;
    }
}


let Dynamic = false;
let SmsCode;
function DynamicCode() {
    let dynamic = document.getElementById("send_dynamic_psw");

    //发送验证码
    let  phone = document.getElementById("userphone");
    console.log(phone.value)
    let httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/SendSmsCode', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）let obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "phone":phone.value,
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            let json = httpRequest.responseText;//获取到服务端返回的数据
            if (json=="failed") {
                alert("用户不存在！");

            }else{
                SmsCode = json;
                //样式改变
                if (Dynamic == false){
                    Dynamic = true;
                    dynamic.style.background = "#383838";
                    dynamic.innerText = "重新发送60s";
                    AotoPlay();

                }else {
                    return;
                }

                let time = 59;
                // 自动轮播函数
                function AotoPlay(){
                    let send_autoplayTimer=setInterval(function (){
                        dynamic.innerText = "重新发送"+time+"s";
                        time--;
                        if (time==-2){
                            time = 59;
                            clearInterval(send_autoplayTimer);
                            Dynamic = false;
                            dynamic.style.background = "#2368DE";
                            dynamic.innerText = "发送验证码";
                        }
                        // console.log("cur:"+curIndex);
                    },1000)    //这个延迟是每张图片停留的时间（包括动画）
                }
            }
        }
    };
}

function AlterName() {
    if (nameflag){
        let newname = document.getElementById("new_name");

        var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', '/AlterUserName', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
        httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
        const obj = {
            "name":newname.value,
            "phone":UserPhone
        };
        httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = httpRequest.responseText;//获取到服务端返回的数据
                if (json=="success") {
                    alert("修改成功");
                    window.location.reload();
                }else{
                    alert("修改失败！");
                }
            }
        };
    }

}


function AlterPsw() {
    let code = document.getElementById("dynamic_code");
    console.log(repswflag);
    console.log(pswflag);
    console.log(SmsCode);
    console.log(code.value);

    if (repswflag&&pswflag&&SmsCode!=code.value){
        alert("信息有误")
        return;

    }else {
        let psw = document.getElementById("new_psw");

        var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', '/AlterUserPsw', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
        httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
        const obj = {
            "psw":psw.value,
            "phone":UserPhone
        };
        httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                var json = httpRequest.responseText;//获取到服务端返回的数据
                if (json=="success") {
                    alert("修改成功,请重新登陆");
                    window.location.href = "/";
                }else{
                    alert("修改失败！");
                }
            }
        };
    }

}