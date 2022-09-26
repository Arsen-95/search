export const List = ({
  data,
}: {
  data: { region: string; title: string; id: number }[] | [];
}) => {
  return (
    <div className="list">
      <div className="container">
        <p className="list__count">Всего объектов {data.length}</p>
        <div className="list__content">
          {data.map((card) => (
            <Card key={card.id} region={card.region} title={card.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, region }: { title: string; region: string }) => {
  return (
    <div className="card">
      <div className="card__image"></div>
      <div className="card__content">
        <h5 className="card__title">{title}</h5>
        <p className="card__region">{region}</p>
        <div className="card__icons">
          <div className="card__icon1"></div>
          <div className="card__icon2"></div>
          <div className="card__icon3"></div>
          <div className="card__icon4"></div>
          <div className="card__icon5"></div>
        </div>
      </div>
    </div>
  );
};
