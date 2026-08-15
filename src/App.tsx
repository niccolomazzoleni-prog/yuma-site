import Home from "@/components/home/home";
import CredibilitaPreview from "@/components/credibilita-preview";

function App() {
  if (window.location.pathname.startsWith("/preview/credibilita")) {
    return <CredibilitaPreview />;
  }
  return <Home />;
}

export default App;
