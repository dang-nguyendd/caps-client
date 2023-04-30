import { useState } from "react";

import { AuthNS } from "@/services/auth/type";
import { showToast } from "@/utils/app";

import axios from "@/axios";

type RegisterResult = {
  data: any;
  register: (x: AuthNS.RegisterRequest) => void;
  isLoading: boolean;
};

const useRegister = () => {
  const [data, setData] = useState<any>(null);
  const [isLoading, setLoading] = useState<boolean>(false);

  const register = async (authData: AuthNS.RegisterRequest) => {
    if (!authData) return;
    setLoading(true);
    const response = await axios.post("/auth/register", authData);
    if (response) {
      setLoading(false);
      showToast("success", "Register successfully!");
    }
    const data = response.data;
    setData(data);
  };

  return { data, isLoading, register } as RegisterResult;
};

export default useRegister;
