import { useState, useEffect } from 'react';
import axios from "../../axios";
interface RegisterData {
    email: string;
    password: string;
}

type RegisterResult = {
    data: any;
    isLoading: boolean;
};

const useRegister = (authData: RegisterData | null) => {
    const [data, setData] = useState<any>(null);
    const [isLoading, setLoading] = useState<boolean>(false);

    const register = async () => {
        if (!authData) return;
        setLoading(true)
        const response = await axios.post('/auth/register', authData)
        if (response){
            setLoading(false)
        }
        const data = response.data.json()
        setData(data);
    }

    useEffect(() => {
        register()
    }, [authData]);

    return { data, isLoading } as RegisterResult;
};

export default useRegister;