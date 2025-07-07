import './App.css';
import BanList from './Components/BanList';
import CurrentPup from './Components/CurrentPup';

const App = () => {

  return (
    <>
    <main>
      <h1>Pup Your Way</h1>  
      <p>Ready for your next pup?</p>
      <CurrentPup />
    </main>
    
    <BanList />
    </>
  );
}

export default App;
