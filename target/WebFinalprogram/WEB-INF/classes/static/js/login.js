let Dynamic = false;
let DynamicCode;


window.onload=function(){
    onload1();
    setHead();
};

function onload1() {
    /*轮播图实现*/

    /*变量声明和定义*/
    let curIndex=0;
    let container=document.getElementsByClassName("slides")[0];
    let slideBox=document.getElementsByClassName("slide-box")[0];
    let imageItems=slideBox.getElementsByTagName("img");

    let dotItems=document.getElementsByClassName("dot-box")[0]
        .getElementsByTagName("li");

    /*点击dot切换*/
    for (let i=0;i<dotItems.length;i++){
        dotItems[i].onclick=function (){

            change(i);
        }
    }
    /*自动轮播*/
    slidePlay();
    container.addEventListener("mouseover",function (){
        clearInterval(autoplayTimer);
    });

    container.addEventListener("mouseout",function (){
        slidePlay();
    });


    // 自动轮播函数
    function slidePlay(){
        autoplayTimer=setInterval(function (){
            change(++curIndex);
            // console.log("cur:"+curIndex);
        },5000)    //这个延迟是每张图片停留的时间（包括动画）
    }

    function change(targetIndex){
        //dot相关操作
        for (let j=0;j<dotItems.length;j++){
            dotItems[j].classList.remove("active");
        }
        if (targetIndex==dotItems.length){
            dotItems[0].classList.add("active");
        }
        else {
            dotItems[targetIndex].classList.add("active");
        }

        let movePercent=-(targetIndex*19.5)+"%";
        slideBox.style.cssText="transform: translateX(" + movePercent + "); transition:1s;";
        curIndex=targetIndex;

        if (curIndex==dotItems.length){
            setTimeout(function (){
                curIndex=0;
                slideBox.style.cssText = "transform: translateX(" + 0 + ");";
            },1000);
        }
    }
}

function setHead() {

    let userhead = document.getElementById("pwdLoginSpan");
    let dynamichead = document.getElementById("phoneLoginSpan");
    let userflag = true;
    let dynamicfalg = false;

    let userNameLogin = document.getElementById("userNameLogin");
    let dynamicLogin = document.getElementById("dynamicLogin");
    userhead.addEventListener('click',function () {
        if (userflag){
            //    do nothing
        } else{
            userflag = true;
            dynamicfalg = false;
            userhead.className = "active selected_underline";
            dynamichead.className = "";
            userNameLogin.style.display = "block";
            dynamicLogin.style.display = "none";


            let tem1 = userNameLogin.children[0];
            let tem2 = userNameLogin.children[1];
            tem1 = tem1.children[1];
            tem1.value = "";
            tem2 = tem2.children[1];
            tem2.value = "";

        }
    });
    dynamichead.addEventListener('click',function () {
        if (dynamicfalg){
            //    do nothing
        } else{
            dynamicfalg = true;
            userflag = false;
            userhead.className = "";
            dynamichead.className = "active selected_underline";
            userNameLogin.style.display = "none";
            dynamicLogin.style.display = "block";

            let tem1 = dynamicLogin.children[0];
            let tem2 = dynamicLogin.children[1];
            tem1 = tem1.children[1];
            tem1.value = "";
            tem2 = tem2.children[1];
            tem2.value = "";
        }
    });

}

function Login() {

    // let submit = document.getElementById("login_submit");

    let userNameLogin = document.getElementById("userNameLogin");
    let dynamicLogin = document.getElementById("dynamicLogin");
    let phone;
    let psw;
    if (userNameLogin.style.display == "block") {
        //账号登陆
        let tem1 = userNameLogin.children[0];
        let tem2 = userNameLogin.children[1];
        tem1 = tem1.children[1];
        phone = tem1.value;
        tem2 = tem2.children[1];
        psw = tem2.value;
        //console.log(phone+psw);

        let httpRequest = new XMLHttpRequest();//第一步：创建需要的对象
        httpRequest.open('POST', '/UserPswLogin', true); //第二步：打开连接/***发送json格式文件必须设置请求头 ；如下 - */
        httpRequest.setRequestHeader("Content-type", "application/json");//设置请求头 注：post方式必须设置请求头（在建立连接后设置请求头）let obj = { name: 'zhansgan', age: 18 };
        const obj = {
            "phone":phone,
            "psw":psw
        };
        httpRequest.send(JSON.stringify(obj));//发送请求 将json写入send中
        httpRequest.onreadystatechange = function () {//请求后的回调接口，可将请求成功后要执行的程序写在其中
            if (httpRequest.readyState == 4 && httpRequest.status == 200) {//验证请求是否发送成功
                let json = httpRequest.responseText;//获取到服务端返回的数据
                if (json=="success") {
                    window.location.href = "resources/templates/home.jsp?phone="+phone;

                }else{
                    alert("错误的账号或密码！");
                }
            }
        };
    }else {
        //手机验证码登陆
        let phone = document.getElementById("user_phone");
        let smscode = document.getElementById("pass_code");
        if (DynamicCode==smscode.value){
            window.location.href = "resources/templates/home.jsp?phone="+phone.value;
        } else {
            alert("验证码错误");
        }
    }

}

function SendDynamicCode() {


    let dynamic = document.getElementById("dynamic_psw");

    //发送验证码
    let  phone = document.getElementById("user_phone");
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
                DynamicCode = json;
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

function forgetPSW() {

    let button = document.getElementById("retrievePassId");
    window.location.href = "resources/templates/home.jsp?forgetpsw";

}