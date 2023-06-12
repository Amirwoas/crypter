import CoinCard from './components/CoinCard/index.jsx';
import { Footer } from './components/Footer/index.jsx';
import Navbar from './components/Navbar/index.jsx';
import CardTitle from './components/CoinCard Title/index';
import Landing from './components/Landing/index.jsx';

function App() {
  return (
    <>
      <div className="xl:container xl:mx-auto">
        <Navbar />
        <div className='w-full h-screen pb-20'>
          <Landing/>
        </div>
        <div className="w-full h-full pb-8">
          <div className="bg w-full h-full absolute -z-20"></div>
          <CardTitle />
          <CoinCard />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
