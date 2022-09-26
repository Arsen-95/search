/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
export const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <nav className="header__navigation">
          <ul className="header__list">
            <li className="header__list-item">
              <a className="header__list-link" href="#">
                Статистика
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#">
                Документы
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#">
                Экспертный совет
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#">
                Публикации
              </a>
            </li>
            <li className="header__list-item">
              <a className="header__list-link" href="#">
                О проекте
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
