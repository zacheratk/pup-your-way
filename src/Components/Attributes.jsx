

const Attributes = ({items}) => {
  return (
    <div className="container">
      {items && items.map((item) => (
        <button>{item}</button>
      ))}
    </div>
  );
}

export default Attributes;