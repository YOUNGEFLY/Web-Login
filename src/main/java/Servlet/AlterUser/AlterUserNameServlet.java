package Servlet.AlterUser;

import DAO.UserDAO;
import Service.Impl.MySQLServiceImpl;
import Service.Impl.RequestToJsonImpl;
import Service.MySQLService;
import Service.RequestToJson;
import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet(name = "AlterUserNameServlet")
public class AlterUserNameServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            RequestToJson requestToJson = new RequestToJsonImpl();
            JSONObject jsonObject = requestToJson.RequestToJson(request);
            System.out.println(jsonObject.get("name"));
            String phone = (String) jsonObject.get("phone");
            String name = (String) jsonObject.get("name");
            MySQLService mySQLService = new MySQLServiceImpl();
            UserDAO userDAO = mySQLService.findUser(phone);
            userDAO.setName(name);
            mySQLService.updateUser(userDAO);
            System.out.println("phone:"+phone+"  name:"+name);
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            printWriter.write("success");


        }catch (Exception e){
            e.printStackTrace();
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            printWriter.write("failed");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
