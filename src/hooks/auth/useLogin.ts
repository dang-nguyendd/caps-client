import { useState, useEffect } from 'react';
import axios from "../../axios";
interface LoginData {
    username: string;
    password: string;
}

type LoginResult = {
    data: any;
    isLoading: boolean;
};

const useLogin = (authData: LoginData | null) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const login = async () => {
        if (!authData) return;
        setLoading(true)
        const response = await axios.post('/auth/login', authData)
        if (response){
            setLoading(false)
        }
        const data = response.data.json()
        setData(data);
    }

    useEffect(() => {
        login()
    }, [authData]);

    return { data, isLoading } as LoginResult;
};

export default useLogin;