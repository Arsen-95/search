/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { List } from "entities/list";
import { Filter } from "features/filter";
import { data } from "shared/lib";
import { regions } from "shared/lib/lib";
import { Search } from "features/search";

type CardType = {
  region: string;
  title: string;
  id: number;
}[];

export const CardList = () => {
  const [region, setRegion] = useState<{
    name: string;
    id: number;
    value: string;
  }>(regions[0]);
  const [cards, setCards] = useState<CardType | []>(data);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setCards(
      data
        .filter((card) => card.region.includes(region!.value))
        .filter((f) =>
          f.title.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
        )
    );
  }, [region, searchText]);

  return (
    <>
      <section className="search">
        <div className="container">
          <div className="search__content">
            <div className="search__top">
              <div className="search__titles">
                <p className="search__main">Главная</p>
                <h3 className="search__title">Расширенный поиск</h3>
              </div>
              <Search searchText={searchText} setSearchText={setSearchText} />
            </div>
          </div>
        </div>
      </section>
      <Filter region={region} setRegion={setRegion} />
      {cards.length ? (
        <List data={cards} />
      ) : (
        <p
          style={{
            margin: "0 auto",
            maxWidth: "max-content",
            fontWeight: 700,
            fontSize: "32px",
          }}
        >
          По вашему запросу ничего не найдено
        </p>
      )}
    </>
  );
};
