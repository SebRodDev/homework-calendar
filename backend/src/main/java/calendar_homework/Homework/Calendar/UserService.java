package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User newUser) { // method to create a user
        if (newUser.getUsername().equals(null) || newUser.getPassword().equals(null)) {
            return null; // returning null if the user was unable to be created
        }

        return userRepository.save(newUser); // saving the user the 
    }

    public void deleteUser(Long id) { // method to delete a user
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
        }
    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> findUserByID(long id) {
        try {
            return userRepository.findById(id);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find a user with the ID: " + id);
        }
    }

}
