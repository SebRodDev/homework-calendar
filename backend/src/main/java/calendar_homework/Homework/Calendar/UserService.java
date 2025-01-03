package calendar_homework.Homework.Calendar;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User createUser(User newUser) { // method to create a user
        if (newUser.getUsername() == null || newUser.getPassword() == null) {
            return null; // returning null if the user was unable to be created
        }

        return userRepository.save(newUser); // saving the user the 
    }

    public boolean deleteUser(Long id) { // method to delete a user
        if (userRepository.existsById(id)) {
            userRepository.deleteById(id);
            return true;
        }

        return false;
    }

    public Optional<User> findUserByUsername(String username, String password) {
        try {
        return userRepository.findByUsernameAndPassword(username, password);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find a user with the username: " + username);
        }

    }

    public List<User> getAllUsers() {
        return userRepository.findAll();
    }

    public Optional<User> findUserByID(Long id) {
        try {
            return userRepository.findById(id);
        } catch (Exception e) {
            throw new RuntimeException("Unable to find a user with the ID: " + id);
        }
    }

    public Optional<User> updateUserInfo(Long id, User newUserInfo) {
        try {
            Optional<User> foundUsers = userRepository.findById(id);
            if (!foundUsers.isEmpty()) {
                User currentUserInfo = foundUsers.get();
                currentUserInfo.setPassword(newUserInfo.getPassword());
                currentUserInfo.setUsername(newUserInfo.getUsername());
                User finalUserInfo = userRepository.save(currentUserInfo);
                return Optional.of(finalUserInfo);
            }
        } catch (Exception e) {
            throw new RuntimeException("Unable to find a user with the ID: " + id);
        }

        return Optional.empty();
    }
}
