package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/*
 * 
 * This receives HTTP request and delegates them to a 
 * service layer that is forwarded back - basically the bread and butter
 * 
 * HTTP method determine the target method for the request
 *
 * Both the user and homework service will be inside this one controller
 * 
 * --------------------- NOTE -----------------------
 * 
 * GetMapping - use when a client wants to get information without directly changing anything to the server
 * PostMapping - use when a client sends information to be ADDED to the server 
 * 
 */
@RestController // central artifact in the RESTful API
@RequestMapping("/api/user") // this is the api call that we use to call the backend from the frontend I believe
public class UserController {

    private final UserService userService;
    private final HomeworkService homeworkService;

    public UserController(UserService userService, HomeworkService homeworkService) {
        this.userService = userService;
        this.homeworkService = homeworkService;
    }
    
    @PostMapping("/user") // used to indicate that this will handle HTTP requests and return the response as a JSON file
    public ResponseEntity<User> createUser(@RequestBody User user) { // the RequestBody annotation is used to bind the HTTP request to a parameter in a controller method
        // basically says that the information that the client will send data alongside their request body
        User createdUser = userService.createUser(user);
        return ResponseEntity.ok(createdUser);
    }


    @DeleteMapping("/user/{id}")
    public ResponseEntity<String> deleteUser(@PathVariable Long id) {
    return userService.deleteUser(id) ? ResponseEntity.ok("User with ID: " + id + " successfully deleted") : 
        ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to delete user with ID: " + id);
    }

    @GetMapping
    public List<User> getAllUsers() {
        return userService.getAllUsers();
    }

    @GetMapping("/user/{id}")
    public ResponseEntity<User> findUserByID(@PathVariable Long id) {
        Optional<User> foundUser = userService.findUserByID(id);
        return foundUser.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    @PutMapping(path = "/user/{userId}")
    public ResponseEntity<User> updateUserInfo(@PathVariable Long id, @RequestBody User newUserInfo) {
        Optional<User> updatedUserInfo = userService.updateUserInfo(id, newUserInfo);
        return updatedUserInfo.map(ResponseEntity::ok).orElseGet(() -> ResponseEntity.notFound().build());
    }

    // ------------ Homework Section -----------------

    @PostMapping("/{userId}/assignments")
    public ResponseEntity<HomeworkAssignment> addHomeworkAssignment(@PathVariable Long userId, 
    @RequestBody HomeworkAssignment homework) {
     HomeworkAssignment finalAssignment = homeworkService.addHomeworkAssignment(userId, homework);
     if (finalAssignment == null) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).build();
     } else {
        return ResponseEntity.ok(finalAssignment);
     }
    }

    @DeleteMapping("/{userId}/{homeworkId}")
    public ResponseEntity<String> deleteHomeworkAssignment(@PathVariable 
    Long assignmentId) {
        return homeworkService.deleteHomeworkAssignment(assignmentId) ? ResponseEntity.ok("Assignment with ID: " + assignmentId + "deleted!") :
        ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("No assignment exists with the ID: " + assignmentId);
    }

    @GetMapping("/user/assignments/{userId}")
    public ResponseEntity<List<HomeworkAssignment>> findHomeworkAssignmentsByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(homeworkService.findHomeworkAssignmentByUser(userId));
    }

    @GetMapping("/user/assignments/{userId}/{assignmentId}")
    public ResponseEntity<HomeworkAssignment> findSpecificHomeworkAssignment(@PathVariable Long userId, @PathVariable Long assignmentId) {
        Optional<HomeworkAssignment> foundHomeworkAssignment = homeworkService.findSpecificHomeworkAssigment(userId, assignmentId);
    }
    
}
