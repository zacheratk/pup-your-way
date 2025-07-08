

const BanList = ({items, handleClick}) => {

  return (
    <section className="banlist">
      <h2>Ban List</h2>
      <div className="container">
        {items && items.map((item, index) => (
          <button key={index} onClick={handleClick}>{item}</button>
        ))}
      </div>
    </section>
  )
}

export default BanList;