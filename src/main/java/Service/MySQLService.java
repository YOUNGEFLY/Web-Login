package Service;

import DAO.UserDAO;

import java.util.ArrayList;

public interface MySQLService {
    public String addUser(UserDAO userDAO);

    public UserDAO findUser(String phone);

    public void updateUser(UserDAO userDAO);

    public void delteUser(String phone);

    public ArrayList<UserDAO> findAllUser();
}
