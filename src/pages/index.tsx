import { AuthProvider } from "@/contexts/auth-context";
import { ConversationProvider } from "@/contexts/conversation-context";
import Home from "@/pages/home";
import CommandPalette from "@/shared/command-palette";

const App = () => {
  return (
    <AuthProvider>
      <ConversationProvider>
        <Home />
        <CommandPalette />
      </ConversationProvider>
    </AuthProvider>
  );
};

export default App;
