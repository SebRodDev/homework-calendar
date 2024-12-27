package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class HomeworkService {
   private final HomeworkRepository homeworkRepository;
   
   public HomeworkService(HomeworkRepository homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
   }

   public HomeworkAssignment addHomeworkAssignment(HomeworkAssignment homework) {
    if (homework.getAssignmentName().equals(null) || homework.getClassName().equals(null) || 
    homework.getDueDate().equals(null)) {
        return null; 
    }

    return homeworkRepository.save(homework);
   }

   public void deleteHomeworkAssignment(long id) {
    try {
        homeworkRepository.deleteById(id);
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + id);
    }
   }

   public List<HomeworkAssignment> getAllHomeworkAssignments() {
    return homeworkRepository.findAll();
   }

   public Optional<HomeworkAssignment> findHomeworkAssignment(long id) {
    try {
        return homeworkRepository.findById(id);
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + id);
    }
   }
}
