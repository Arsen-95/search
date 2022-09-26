import { CardList } from "widgets/cardList";
import { Footer } from "widgets/footer";
import { Header } from "widgets/header";

import "./index.css";

function App() {
  return (
    <>
      <Header />
      <section className="registry">
        <div className="container">
          <div className="registry__content">
            <h2 className="registry__title">
              Реестр объектов нематериального культурного наследия народов
              россии
            </h2>
            <input className="registry__search" placeholder="Поиск" />
          </div>
        </div>
      </section>
      <CardList />
      <Footer />
    </>
  );
}

export default App;
