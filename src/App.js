import Card from './components/main/main';

import nftImg from '../src/components/main/public/img/image-equilibrium.jpg';
import eth from '../src/components/main/public/img/icon-ethereum.svg';

function App() {
  return (
    <div className="App">
      <main>
        <Card _img={nftImg} _imgPrice={eth} _price={0.041+"ETH"}/>
      </main>
    </div>
  );
}

export default App;
