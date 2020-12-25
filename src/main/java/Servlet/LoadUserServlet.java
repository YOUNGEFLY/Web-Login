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
import java.util.ArrayList;

@WebServlet(name = "LoadUserServlet")
public class LoadUserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {

            MySQLService mySQLService = new MySQLServiceImpl();
            ArrayList<UserDAO> userDAOS = mySQLService.findAllUser();

            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();

            for (int i =0;i<userDAOS.size();i++){
                System.out.println(userDAOS.get(i).toString());
                printWriter.write(userDAOS.get(i).toString());
            }

//            UserDAO userDAO = mySQLService.findUser((String) jsonObject.get("phone"));
//            String name = userDAO.getName();


            //printWriter.write(name);


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
