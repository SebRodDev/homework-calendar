import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "User")
public class User {
    
    // This generates an ID number that is specific to each user meaning that 
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

}
