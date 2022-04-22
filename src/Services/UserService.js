import axios from 'axios';

const USER_API_BASE_URL = 'http://localhost:9005/api/auth/register';
const LOGIN_API_BASE_URL = 'http://localhost:9005/api/auth/login';

class UserService {

    createUsers(user){
        return axios.post(USER_API_BASE_URL, user);
    }

    loginUser(user){
        return axios.post(LOGIN_API_BASE_URL, user);
    }
}

export default new UserService;