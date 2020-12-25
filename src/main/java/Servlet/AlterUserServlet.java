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

@WebServlet(name = "AlterUserServlet")
public class AlterUserServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        try {
            RequestToJson requestToJson = new RequestToJsonImpl();
            JSONObject jsonObject = requestToJson.RequestToJson(request);
            String phone = (String) jsonObject.get("phone");
            MySQLService mySQLService = new MySQLServiceImpl();
            UserDAO userDAO = mySQLService.findUser(phone);
            String name = (String) jsonObject.get("name");
            name = (name.equals("")?userDAO.getName():name);
            String psw = (String) jsonObject.get("psw");
            psw = (psw.equals("")?userDAO.getPsw():psw);
            String identify = (String) jsonObject.get("identify");
            identify = (identify.equals("")?userDAO.getIdentify():identify);

            System.out.println(name);
            System.out.println(identify);
            System.out.println(psw);
            System.out.println(phone);
            System.out.println(userDAO.getEmail());


            userDAO.setName(name);
            userDAO.setIdentify(identify);
            userDAO.setPsw(psw);

            mySQLService.updateUser(userDAO);

            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            printWriter.write("success");


        }catch (Exception e){
            e.printStackTrace();
            response.setCharacterEncoding("UTF-8");
            response.setContentType("text/html;charset=UTF-8");
            PrintWriter printWriter = response.getWriter();
            printWriter.write("success");
        }
    }

    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        doPost(request,response);
    }
}
