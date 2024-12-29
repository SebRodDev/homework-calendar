package calendar_homework.Homework.Calendar;
import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {
    
    // This generates an ID number that is specific to each user meaning that 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    // Do not need to include the id in the constructor since it is automatically generated when an instance of the User class is used
    @Column(name = "Username", unique = true, nullable = false) // setting unique to true so that only one username can be associated with one account/user
    private String username;

    @Column(name = "Password", nullable = false)
    private String password;

    @OneToMany(cascade = CascadeType.ALL, mappedBy = "user")
    private List<HomeworkAssignment> homework = new ArrayList<>();    
    // There will be another variable for the homework assignments

    public User() {} // empty constructor

    public User(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // need getters and setters for each of the different things

    public Long getID() {
        return id;
    }

    public void setID(Long id) {
        this.id = id;
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

    public List<HomeworkAssignment> getHomework() {
        return homework;
    }

    public void setHomework (List<HomeworkAssignment> homework) {
        this.homework = homework;
    }
}
