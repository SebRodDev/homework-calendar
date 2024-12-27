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

    private String dueDate;
    private String assignmentName;
    private String className;

    @ManyToOne
    @JoinColumn()
    private User user;

    public HomeworkAssignment() {} // empty constructor

    
}
