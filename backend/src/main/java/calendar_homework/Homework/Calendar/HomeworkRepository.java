package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
/*
 * 
 * Created a separate repository for the homework assignment since it allows for cleaner organization of the program
 * and the different values
 * 
 */
@Repository
public interface HomeworkRepository extends JpaRepository<HomeworkAssignment, Long> {
    List<HomeworkAssignment> findByUserId(Long userId);
    Optional<HomeworkAssignment> findByIdAndUserId(Long assignmentId, Long userId);
}
