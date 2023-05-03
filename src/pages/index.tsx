import Home from "@/pages/home";
import {AuthProvider} from "@/contexts/auth-context";

const App = () => {
  return (
      <AuthProvider>
    <Home/>
      </AuthProvider>
  );
};

export default App;
