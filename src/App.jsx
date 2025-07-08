import './App.css';
import BanList from './Components/BanList';
import CurrentPup from './Components/CurrentPup';
import { useState} from 'react';

const App = () => {
  const [bannedAttributes, setBannedAttributes] = useState([]);

  const addBannedAttributes = (e) => {
    const attribute = e.target.textContent;

    if (!bannedAttributes.includes(attribute)) {
      setBannedAttributes([...bannedAttributes, attribute]);
    }
  }

  const removeBannedAttribute = (e) => {
    const attribute = e.target.textContent;

    setBannedAttributes(bannedAttributes.filter(item => item != attribute));
  }

  return (
    <>
    <main>
      <h1>Pup Your Way</h1>  
      <p>Ready for your next pup?</p>
      <CurrentPup bannedAttributes={bannedAttributes} handleAttributeClick={addBannedAttributes}/>
    </main>
    
    <BanList items={bannedAttributes} handleClick={removeBannedAttribute} />
    </>
  );
}

export default App;
