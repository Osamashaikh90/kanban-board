import Navbar from "./components/navigationBar/Navbar";
import Dashboard from "./pages/Dashboard";
import { CardProvider } from "./context/cardContext";
import { SelectedCardProvider } from "./context/selectedCardContext";
import "./App.css";

function App() {
  return (
    <>
      <CardProvider>
        <SelectedCardProvider>
          <Navbar />
          <Dashboard />
        </SelectedCardProvider>
      </CardProvider>
    </>
  );
}

export default App;
