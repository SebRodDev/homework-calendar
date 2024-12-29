package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeworkService {
   private final HomeworkRepository homeworkRepository;
   
   @Autowired
   public HomeworkService(HomeworkRepository homeworkRepository) {
    this.homeworkRepository = homeworkRepository;
   }

   public HomeworkAssignment addHomeworkAssignment(HomeworkAssignment homework) {
    if (homework.getAssignmentName() == null || homework.getClassName() == null || 
            homework.getDueDate() == null) {
        return null; 
    }

    return homeworkRepository.save(homework);
   }

   public boolean deleteHomeworkAssignment(Long id) {
    try {
        homeworkRepository.deleteById(id);
        return true;
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + id);
    }
   }

   public List<HomeworkAssignment> getAllHomeworkAssignments() {
    return homeworkRepository.findAll();
   }

   public Optional<HomeworkAssignment> findHomeworkAssignment(Long id) {
    try {
        return homeworkRepository.findById(id);
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + id);
    }
   }

   public Optional<HomeworkAssignment> updateHomeworkAssignment(Long id, HomeworkAssignment updatedHomework) {
    try {
        Optional<HomeworkAssignment> foundAssignments = homeworkRepository.findById(id);
        if (!foundAssignments.isEmpty()) {
            HomeworkAssignment currentAssignment = foundAssignments.get(); // getting the assignment that was found to match the ID
            currentAssignment.setAssignmentName(updatedHomework.getAssignmentName());
            currentAssignment.setClassName(updatedHomework.getClassName());
            currentAssignment.setDueDate(updatedHomework.getDueDate());
            HomeworkAssignment finalUpdatedAssignment = homeworkRepository.save(currentAssignment);
            return Optional.of(finalUpdatedAssignment);
        }
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + id + " provided.");
    }

    return Optional.empty(); // return empty if nothing was found - the change could not be made
   }
}
