import './CurrentPup.css'
import Attributes from './Attributes';
import { useState} from 'react';
const DOG_API_KEY = import.meta.env.VITE_DOG_API_KEY;

const CurrentPup = ({handleAttributeClick}) => {
  const [dogInfo, setDogInfo] = useState({
    name: 'Click the button to fetch a new dog!',
    image: null,
    attributes: []
  })

  const updateDog = (json) => {
    if (!json[0].breeds || json[0].breeds.length === 0) {
      fetchNewDog();
      return;
    }
    console.log(json)
    let newAttributes = [json[0].breeds[0].name];
    if (json[0].breeds[0].weight) {
      newAttributes.push(json[0].breeds[0].weight.imperial + ' lbs');
    }
    if (json[0].breeds[0].height) {
      newAttributes.push(json[0].breeds[0].height.imperial + ' in');
    }
    if (json[0].breeds[0].life_span) {
      newAttributes.push('Life span: ' + json[0].breeds[0].life_span);
    }
    setDogInfo({
      name: json[0].breeds[0].name,
      image: json[0].url,
      attributes: newAttributes
    })
  }

  const fetchNewDog = () => {
    let query = `https://api.thedogapi.com/v1/images/search?api_key=${DOG_API_KEY}&has_breeds=1&limit=1&format=json`;
    callAPI(query).catch(console.error);
  }

  const callAPI = async (query) => {
    const response = await fetch(query);
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const json = await response.json();
    if (json == null || json.length === 0) {
      alert('Uh oh, an error occurred!')
    } else {
      updateDog(json);
    }
  }

  return (
    <>
    <h2>{dogInfo.name}</h2>
    <Attributes items={dogInfo.attributes} handleClick={handleAttributeClick}/>
    <img
      className={'dog-image' + (dogInfo.image ? ' active' : '')}
      src={dogInfo.image}
      alt={dogInfo.image ? dogInfo.name : 'No dog image available'}
    />
    <button onClick={fetchNewDog}><i>Ruff</i>resh</button>
    </>
  );
}

export default CurrentPup;