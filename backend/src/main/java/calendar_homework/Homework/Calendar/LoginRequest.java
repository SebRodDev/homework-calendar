package calendar_homework.Homework.Calendar;
/*
 * 
 * This is not part of the table so no Spring annotations need to be included
 * 
 * Spring only allows one RequestBody per Controller method so I have to make an object that takes
 * both of these objects so that I can use them in my login method
 * 
 */
public class LoginRequest {
    private String username;
    private String password;

    public LoginRequest(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
