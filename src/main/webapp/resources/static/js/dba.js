
window.onload=function(){
    let flag = window.location.href.split('?')[1];
    if (flag!=null) {
        loadUser();
    }
};

function dba_Login() {
    let dba_phone = document.getElementById("dba_phone");
    let dba_psw = document.getElementById("dba_psw");
    //alert(dba_phone.value+"  "+dba_psw.value);
    if (dba_phone.value==""){
        alert("账号不能为空");
        return;
    }
    if (dba_psw.value==""){
        alert("密码不能为空");
        return;
    }

    let httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/DbaLogin', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）let obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "phone":dba_phone.value,
        "psw":dba_psw.value
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            let json = httpRequest.responseText;//获取到服务端返回的数据
            if (json=="success") {
                alert("登录成功");
                window.location.href = "./dba.jsp?phone="+dba_phone.value;
                //loadUser();
            }else{
                alert("错误的账号或密码！");
            }
        }
    };
}
function loadUser() {
    let container1 = document.getElementById("container1");
    let container2 = document.getElementById("container2");
    let httpRequest = new XMLHttpRequest();//第一步：创建需要的对象

    httpRequest.open('POST', '/LoadUser', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）let obj = { name: 'zhansgan', age: 18 };
    const obj = {
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            let json = httpRequest.responseText;//获取到服务端返回的数据
            if (json!="failed") {
                //alert("登录成功");
                console.log(json);
                // json = json.replace('(','{\"');
                // json = json.replace(')','\"}');
                // json = json.replace('=','\"=\"');
                // json = json.replace(', ','\",\"');
                json = json.split("(").join("{\"");
                json = json.split(")").join("\"}");
                json = json.split("=").join("\":\"");
                json = json.split(", ").join("\",\"");
                let users = json.split("UserDAO");

                for (i=1;i<users.length;i++){
                    var obj = JSON.parse(users[i]);
                    //alert(obj.phone);
                    addTR(obj);
                }

                //loadUser();
            }else{
                //alert("错误的账号或密码！");
            }
        }
    };

    container1.style.display = "none";
    container2.style.display = "block";

}

function addTR(user) {
    let tr=document.createElement("tr");
    let xh1=document.createElement("td");
    let xh2=document.createElement("td");
    let xh3=document.createElement("td");
    let xh4=document.createElement("td");
    let xm=document.createElement("td");

    xh1.innerHTML = user.phone;
    xh2.innerHTML = user.identify;
    xh3.innerHTML = user.psw;
    xh4.innerHTML = user.name;
    xm.innerHTML = "\n" +
        "                        <a href=\"javascript:void(0);\" onclick=\"del(this)\">删除</a>\n" +
        "                        <a href=\"javascript:void(0);\" onclick=\"alterUser(this)\">修改</a>\n" +
        "                    ";
    let tab = document.getElementById("table");
    tab.appendChild(tr);
    tr.appendChild(xh1);
    tr.appendChild(xh2);
    tr.appendChild(xh3);
    tr.appendChild(xh4);
    tr.appendChild(xm);


}

function addUser() {
    let container = document.getElementById("container");

    container.style.display = "block";


}

function alterUser(Obj) {
    let container = document.getElementById("alter_container");
    container.style.display = "block";


    let tr = Obj.parentNode.parentNode;

    let phone = tr.childNodes[0];
    let head = document.getElementById("alter_head");
    console.log(head.innerText + phone.innerText);
    head.innerText = "修改:" + phone.innerText;
}

function Backhome() {
    let container1 = document.getElementById("container1");
    let container2 = document.getElementById("container2");
    let container = document.getElementById("container");
    let alter_container = document.getElementById("alter_container");

    container.style.display = "none";
    container1.style.display = "none";
    container2.style.display = "block";
    alter_container.style.display = "none";

}
function register() {
    let psw = document.getElementById("password");
    let identify = document.getElementById("repassword");
    let name = document.getElementById("username");
    let phone = document.getElementById("userphone");

    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/Register', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "name":name.value,
        "identify":identify.value,
        "phone":phone.value,
        "psw":psw.value
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = httpRequest.responseText;//获取到服务端返回的数据
            if (json=="success") {
                addTR(obj);
                let container = document.getElementById("container");

                container.style.display = "none";
            }else{
                alert("注册失败！");
            }
        }
    };


}

function del(Obj) {
    console.log(Obj)
    let tr = Obj.parentNode.parentNode;

    let phone = tr.childNodes[0];
    console.log(phone.innerText);


    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/DelUser', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "phone":phone.innerText,
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = httpRequest.responseText;//获取到服务端返回的数据
            if (json=="success") {
                console.log(tr);
                tr.parentNode.removeChild(tr);
                alert("删除成功！");
            }else{
                alert("删除失败！");
            }
        }
    };



}

function AlterUser() {

    let head = document.getElementById("alter_head");
    console.log(head.innerText.split(":")[1]);
    let name = document.getElementById("alter_name");
    let psw = document.getElementById("alter_psw");
    let identify = document.getElementById("alter_id");

    var httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
    httpRequest.open('POST', '/AlterUser', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
    httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）var obj = { name: 'zhansgan', age: 18 };
    const obj = {
        "phone":head.innerText.split(":")[1],
        "name":name.value,
        "psw":psw.value,
        "identify":identify.value
    };
    httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
    httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
        if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
            var json = httpRequest.responseText;//获取到服务端返回的数据
            if (json=="success") {

                alert("修改成功！");
                window.location.reload();
            }else{
                alert("修改失败！");
            }
        }
    };
}

