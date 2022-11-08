function Card(props) {
  const card = props;
  return (
    <div className="card">
      <div className="card-img">
        <img src={card.imgUrl} alt="Imagem {card.title}" />
      </div>
      <div className="card-title">{card.title}</div>
      <div className="card-text">{card.text}</div>
    </div>
  );
}
export default Card;
