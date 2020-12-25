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

@WebServlet(name = "HomeServlet")
public class HomeServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            RequestToJson requestToJson = new RequestToJsonImpl();
            JSONObject jsonObject = requestToJson.RequestToJson(request);
            System.out.println(jsonObject.get("phone"));

            MySQLService mySQLService = new MySQLServiceImpl();
            UserDAO userDAO = mySQLService.findUser((String) jsonObject.get("phone"));
            String name = userDAO.getName();

            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            printWriter.write(name);


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
