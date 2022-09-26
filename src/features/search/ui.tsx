export const Search = ({
  searchText,
  setSearchText,
}: {
  searchText: string;
  setSearchText(e: string): void;
}) => {
  return (
    <input
      value={searchText}
      onChange={(e) => setSearchText(e.target.value)}
      className="search__input"
      placeholder="Контекстный поиск"
    />
  );
};
