import Login from './components/Login'
import { ToastProvider } from "react-toast-notifications";


function App() {
  return (
    <ToastProvider>
      <div className="container__main">
        <Login />
      </div>
    </ToastProvider>
  );
}

export default App;