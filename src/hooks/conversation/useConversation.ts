import { useState } from "react";

import { AuthNS } from "@/services/auth/type";

const useConversation = () => {
  const [data, setData] = useState<AuthNS.LoginResponse | null>(null);
  const [isLoading, setLoading] = useState<boolean>(false);
};
