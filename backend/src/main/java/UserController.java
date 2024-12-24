/*
 * 
 * This receives HTTP request and delegates them to a 
 * service layer that is forwarded back - basically the bread and butter
 * 
 * HTTP method determine the target method for the request
 *
 */
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController // central artifact in the RESTful API
@RequestMapping("/user")
public class UserController {
    
}
