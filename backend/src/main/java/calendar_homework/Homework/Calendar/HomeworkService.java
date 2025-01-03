package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HomeworkService {
   private final HomeworkRepository homeworkRepository;
   private final UserRepository userRepository;
   
   @Autowired
   public HomeworkService(HomeworkRepository homeworkRepository, UserRepository userRepository) {
    this.homeworkRepository = homeworkRepository;
    this.userRepository = userRepository;
   }

   public HomeworkAssignment addHomeworkAssignment(Long userId, HomeworkAssignment homework) {
    if (homework.getAssignmentName() == null || homework.getDueDate() == null || homework.getClassName() == null) {
        System.out.println("This is the assignment name " + homework.getAssignmentName());
        System.out.println("This is the due date " + homework.getDueDate());
        System.out.println("This is the class name " + homework.getClassName());
        return null;
    }
    Optional<User> foundUserOptional = userRepository.findById(userId);
    User foundUser = foundUserOptional.get();
    homework.setCurrentUser(foundUser);
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

   public List<HomeworkAssignment> findHomeworkAssignmentByUser(Long userId) {
    try {
        return homeworkRepository.findByUserId(userId);
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a user with the ID: " + userId);
    }
   }

   public Optional<HomeworkAssignment> findSpecificHomeworkAssignment(Long userId, Long assignmentId) {
    try {
        return homeworkRepository.findByIdAndUserId(assignmentId, userId);
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + assignmentId);
    }
   }

   public Optional<HomeworkAssignment> updateHomeworkAssignment(Long userId, Long assignmentId, HomeworkAssignment updatedHomework) {
    try {
        Optional<HomeworkAssignment> foundAssignments = homeworkRepository.findByIdAndUserId(assignmentId, userId);
        if (!foundAssignments.isEmpty()) {
            HomeworkAssignment currentAssignment = foundAssignments.get(); // getting the assignment that was found to match the ID
            currentAssignment.setAssignmentName(updatedHomework.getAssignmentName());
            currentAssignment.setClassName(updatedHomework.getClassName());
            currentAssignment.setDueDate(updatedHomework.getDueDate());
            HomeworkAssignment finalUpdatedAssignment = homeworkRepository.save(currentAssignment);
            return Optional.of(finalUpdatedAssignment);
        }
    } catch (Exception e) {
        throw new RuntimeException("Unable to find a homework assignment with the ID: " + assignmentId + " provided.");
    }

    return Optional.empty(); // return empty if nothing was found - the change could not be made
   }
}
