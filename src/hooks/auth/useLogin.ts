import {useState, useEffect} from 'react';
import {AuthService} from "@/services/auth";
import {AuthNS} from "@/services/auth/type";
import {LocalStorageService} from "@/services/local-storage";
import {LocalStorageKeys} from "@/services/local-storage/constant";


type LoginResult = {
    data: any;
    isLoading: boolean;
    login: (x: AuthNS.LoginRequest) => void;
};

const useLogin = () => {
    const [data, setData] = useState<AuthNS.LoginResponse | null>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const login = async (authData: AuthNS.LoginRequest) => {
        if (!authData) return;
        setLoading(true)
        const response: AuthNS.LoginResponse = await AuthService.login(authData)
        setLoading(false)
        setData(response);
        console.log(response)
        LocalStorageService.getInstance().setItem(LocalStorageKeys.access_token, response.access_token)
        LocalStorageService.getInstance().setItem(LocalStorageKeys.refresh_token, response.refresh_token)
    }


    return {data, isLoading, login} as LoginResult;
};

export default useLogin;