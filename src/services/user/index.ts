import axios from "@/axios";
import {UserNS} from "@/services/user/type";

export class UserService {
    static getUserDetail = (): Promise<UserNS.UserDetailResponse> => {
        return axios.get('/users/user-detail')
    }
}