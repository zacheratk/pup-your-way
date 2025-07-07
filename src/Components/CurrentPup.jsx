import './CurrentPup.css'
import Attributes from "./Attributes";

const CurrentPup = () => {

  return (
    <>
    <h2>Search for a new dog!</h2>
    <Attributes />
    <img className='dog-image' src='' alt=''/>
    <button><i>Ruff</i>resh</button>
    </>
  );
}

export default CurrentPup;