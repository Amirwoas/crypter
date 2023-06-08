import CoinCard from "./components/CoinCard/index.jsx";
import { Footer } from "./components/Footer/index.jsx";
import Navbar from "./components/Navbar/index.jsx";

function App() {
  return (
    <>
    <div className="xl:container  xl:mx-auto">
      <Navbar/>
      <CoinCard/>
      <Footer/>

    </div>
    </>
  );
}

export default App;
