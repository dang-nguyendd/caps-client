import { AuthProvider } from "@/contexts/auth-context";
import Home from "@/pages/home";

const App = () => {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
};

export default App;
