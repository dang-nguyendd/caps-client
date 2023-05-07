import { AuthProvider } from "@/contexts/auth-context";
import { ConversationProvider } from "@/contexts/conversation-context";
import Home from "@/pages/home";

const App = () => {
  return (
    <AuthProvider>
      <ConversationProvider>
        <Home />
      </ConversationProvider>
    </AuthProvider>
  );
};

export default App;
