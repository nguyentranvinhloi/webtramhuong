import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div>
      <h2>Kết quả tìm kiếm:</h2>
      <ul>
        {results.map((result) => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;