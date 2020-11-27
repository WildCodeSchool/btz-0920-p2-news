import Search from './Search';

const SearchPage = () => {
  return (
    <div
      style={{
        paddingTop: '250px',
        paddingBottom: '250px',
        textAlign: 'center',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}
    >
      <h1>Ma Recherche</h1>
      <Search />
    </div>
  );
};

export default SearchPage;
