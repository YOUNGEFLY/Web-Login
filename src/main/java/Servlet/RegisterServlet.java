package Servlet;

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

@WebServlet(name = "RegisterServlet")
public class RegisterServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            RequestToJson requestToJson = new RequestToJsonImpl();
            JSONObject jsonObject = requestToJson.RequestToJson(request);
            UserDAO userDAO = new UserDAO();
            userDAO.setName((String) jsonObject.get("name"));
            userDAO.setIdentify("user");
            userDAO.setPhone((String) jsonObject.get("phone"));
            userDAO.setPsw((String) jsonObject.get("psw"));
            userDAO.setEmail("");

            MySQLService mySQLService = new MySQLServiceImpl();
            String status = mySQLService.addUser(userDAO);
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();

            if (status.equals("success")){
                // return success
                System.out.println("Login success");
                printWriter.write("success");
            }else {
                //return error
                System.out.println("Login failed");
                printWriter.write("failed");
            }


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
