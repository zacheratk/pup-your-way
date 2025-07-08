

const Attributes = ({items, handleClick}) => {
  return (
    <div className="container">
      {items && items.map((item, index) => (
        <button key={index} onClick={handleClick}>{item}</button>
      ))}
    </div>
  );
}

export default Attributes;