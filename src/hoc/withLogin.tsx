import React from "react";
import { useRouter } from "next/router";
import { useAuth } from "@/contexts/auth-context";

export default function withAuth<P extends object>(Component: React.ComponentType<P>) {
    const WithAuth: React.FC<P> = (props) => {
        const router = useRouter();
        const { user } = useAuth();

        React.useEffect(() => {
            if (!user) {
                router.replace("/login");
            }
        }, [user, router]);

        return user ? <Component {...props} /> : null;
    };

    return WithAuth;
}