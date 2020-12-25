package DAO;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDAO {
    private String phone;
    private String identify;
    private String psw;
    private String email;
    private String name;

}
