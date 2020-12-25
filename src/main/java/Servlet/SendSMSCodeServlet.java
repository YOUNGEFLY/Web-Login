package Servlet;

import DAO.UserDAO;
import Service.Impl.MySQLServiceImpl;
import Service.Impl.RequestToJsonImpl;
import Service.MySQLService;
import Service.RequestToJson;
import Utils.AliyunSmsUtils;
import com.aliyuncs.dysmsapi.model.v20170525.SendSmsResponse;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "SendSMSCodeServlet")
public class SendSMSCodeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            RequestToJson requestToJson = new RequestToJsonImpl();
            JSONObject jsonObject = requestToJson.RequestToJson(request);
            MySQLService mySQLService = new MySQLServiceImpl();
            String phonenum = (String) jsonObject.get("phone");
            UserDAO userDAO = mySQLService.findUser(phonenum);

            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            if (userDAO==null){
                //用户不存在
                System.out.println("Login failed");
                printWriter.write("failed");
            }else {
                //发送验证码
                AliyunSmsUtils aliyunSmsUtils = new AliyunSmsUtils();
                aliyunSmsUtils.setCode();
                String smsCode = Integer.toString(aliyunSmsUtils.getCode());

                SendSmsResponse smsresponse =aliyunSmsUtils.sendSms(phonenum,smsCode);
                System.out.println("短信接口返回的数据----------------");
                System.out.println("Code=" + smsresponse.getCode());
                System.out.println("Message=" + smsresponse.getMessage());
                System.out.println("RequestId=" + smsresponse.getRequestId());
                System.out.println("BizId=" + smsresponse.getBizId());

                printWriter.write(smsCode);
            }





        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
