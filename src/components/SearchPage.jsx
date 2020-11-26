import Search from './Search';

const SearchPage = () => {
  return (
    <div
      style={{
        paddingTop: '150px',
        paddingBottom: '150px',
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
