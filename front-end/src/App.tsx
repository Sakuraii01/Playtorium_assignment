import Router from "./router/routes";
import { AuthProvider } from "./auth/auth.provider";
function App() {
  return (
    <>
      <AuthProvider>
        <Router />
      </AuthProvider>
    </>
  );
}

export default App;
