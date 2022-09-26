export const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__content">
          <div className="footer__house-box">
            <img className="footer__image" src="images/house.svg" alt="logo" />
            <h2 className="footer__title">
              Государственный Российский Дом народного творчества имени В.Д.
              Поленова
            </h2>
            <div className="footer__contacts-box">
              <h6 className="footer__contacts">Контакты</h6>
              <p className="footer__address">
                Москва, Сверчков пер., 8, стр. 3. Тел.: +7 495 628-40-87
              </p>
            </div>
          </div>
          <img
            className="footer__culture"
            src="images/culture.svg"
            alt="culture committee"
          />
        </div>
      </div>
    </footer>
  );
};
