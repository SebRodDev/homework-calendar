package calendar_homework.Homework.Calendar;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "Assignments")
public class HomeworkAssignment {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "Due Date", nullable = false)
    private String dueDate;
    
    @Column(name = "Assignment Name", nullable = false)
    private String assignmentName;
    
    @Column(name = "Class Name", nullable = false)
    private String className;

    @ManyToOne // many homework assignments are assigned to one user 
    @JoinColumn(name = "user_id")
    private User user;

    public HomeworkAssignment() {} // empty constructor

    public HomeworkAssignment(String dueDate, String assignmentName, String className) {
        this.dueDate = dueDate;
        this.assignmentName = assignmentName;
        this.className = className;
    }
}
