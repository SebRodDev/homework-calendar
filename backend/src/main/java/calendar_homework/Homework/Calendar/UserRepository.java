package calendar_homework.Homework.Calendar;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

/*
 * 
 * Since this is an interface there is no method body it is simply just saying that this interface
 * is a repository 
 * 
 * Spring automatically creates an instance of a class that implements this 
 * 
 * JpaRepository interface provides a set of methods for performing CRUD operations on the User entity 
 * 
 */

@Repository
public interface UserRepository extends JpaRepository<User, Long> {}
