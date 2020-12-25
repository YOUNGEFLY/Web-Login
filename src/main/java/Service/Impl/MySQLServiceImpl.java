package Service.Impl;

import DAO.UserDAO;
import Service.MySQLService;

import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class MySQLServiceImpl implements MySQLService {

	//TODO 填入数据库对应信息
    private final static String connurl = "**************mysql地址***************";
    private final static String connname = "*****************USER****************";
    private final static String connpsw = "*******************PSW****************";
    private Connection conn = null;
    @Override
    public String addUser(UserDAO userDAO) {
        try {
            PreparedStatement preparedStatement = conn.prepareStatement("INSERT INTO user(phone,identify,name,psw) VALUES(?,?,?,?)");
            preparedStatement.setString(1,userDAO.getPhone());
            preparedStatement.setString(2,userDAO.getIdentify());
            preparedStatement.setString(3,userDAO.getName());
            preparedStatement.setString(4,userDAO.getPsw());

            int i = preparedStatement.executeUpdate();

        }catch (Exception e){
            e.printStackTrace();
            return "failed";
        }
        return "success";
    }

    @Override
    public UserDAO findUser(String phone) {
        try {
            PreparedStatement preparedStatement = conn.prepareStatement("select * from  user WHERE phone = ?");
            preparedStatement.setString(1,phone);
            ResultSet resultSet = preparedStatement.executeQuery();
            if (resultSet.next()){
                UserDAO userDAO = new UserDAO();
                userDAO.setPhone(resultSet.getString(1));
                userDAO.setIdentify(resultSet.getString(2));
                userDAO.setName(resultSet.getString(3));
                userDAO.setEmail(resultSet.getString(4));
                userDAO.setPsw(resultSet.getString(5));
                return userDAO;
            }

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    @Override
    public void updateUser(UserDAO userDAO) {
        try {
            PreparedStatement preparedStatement = conn.prepareStatement("update user " +
                                                                                "set name = ? ," +
                                                                                "identify = ?," +
                                                                                "psw = ?," +
                                                                                "email = ?" +
                                                                                " where phone = ?");
            preparedStatement.setString(1,userDAO.getName());
            preparedStatement.setString(2,userDAO.getIdentify());
            preparedStatement.setString(3,userDAO.getPsw());
            preparedStatement.setString(4,userDAO.getEmail());
            preparedStatement.setString(5,userDAO.getPhone());
            int i = preparedStatement.executeUpdate();

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public void delteUser(String phone) {
        try {
            PreparedStatement preparedStatement = conn.prepareStatement("DELETE FROM user WHERE phone=?");
            preparedStatement.setString(1,phone);
            int i = preparedStatement.executeUpdate();


        }catch (Exception e){
            e.printStackTrace();
        }
    }

    @Override
    public ArrayList<UserDAO> findAllUser() {
        ArrayList<UserDAO> userDAOS = new ArrayList<UserDAO>();
        try {
            PreparedStatement preparedStatement = conn.prepareStatement("select * from  user");
            ResultSet resultSet = preparedStatement.executeQuery();
            while (resultSet.next()){
                UserDAO userDAO = new UserDAO();
                userDAO.setPhone(resultSet.getString(1));
                userDAO.setIdentify(resultSet.getString(2));
                userDAO.setName(resultSet.getString(3));
                userDAO.setEmail(resultSet.getString(4));
                userDAO.setPsw(resultSet.getString(5));
                userDAOS.add(userDAO);

            }
            return userDAOS;

        }catch (Exception e){
            e.printStackTrace();
        }
        return null;
    }

    public MySQLServiceImpl(){
        try{
            Class.forName("com.mysql.cj.jdbc.Driver");
            conn = DriverManager.getConnection(connurl,connname,connpsw);

        }catch (Exception e){
            e.printStackTrace();
        }
    }

    protected void finalize() {
        try {
            conn.close();
        }catch (Exception e){
            e.printStackTrace();
        }
    }
}
